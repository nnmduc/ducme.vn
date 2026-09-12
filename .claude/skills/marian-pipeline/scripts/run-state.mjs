#!/usr/bin/env node
/**
 * CLI dieu phoi quy trinh ba buoc: khao cuu -> kiem chung -> trien khai.
 *
 * Script nay KHONG lam noi dung. Viec duy nhat cua no la tra loi "buoc tiep theo la gi"
 * va ghi lai nhat ky bang may, de mot lan chay dut giua chung van tiep tuc dung cho.
 * Toan bo logic quyet dinh nam trong pipeline-lib.mjs.
 *
 * Cach dung:
 *   node .claude/skills/marian-pipeline/scripts/run-state.mjs init <id> [--no-pr] [--max-rounds 2]
 *   node .claude/skills/marian-pipeline/scripts/run-state.mjs next <id> [--json]
 *   node .claude/skills/marian-pipeline/scripts/run-state.mjs archive-audit <id>
 *   node .claude/skills/marian-pipeline/scripts/run-state.mjs record <id> --step <buoc> --result <xong|loi> [--note "..."] [--agent "..."]
 *
 * "next" chi doc, khong doi trang thai: goi lai bao nhieu lan cung ra mot ket qua.
 * Chi "record" va "finish" moi ghi quyet dinh vao nhat ky.
 *   node .claude/skills/marian-pipeline/scripts/run-state.mjs finish <id> --status <trang-thai> [--note "..."] [--branch "..."] [--pr "..."]
 *
 * Ma thoat: 0 = chay duoc, 1 = sai tham so hoac thieu du lieu.
 */

import fs from 'node:fs';
import path from 'node:path';

import { readJson, writeFileSafe } from '../../_lib/bundle.mjs';
import {
  RUN_SCHEMA, ROOT, STEPS, STEP_LABEL, MODE_LABEL, TERMINAL,
  dirOf, stateFileOf, now, decide,
} from './pipeline-lib.mjs';

/** Cac tuy chon co nhan gia tri dung sau; con lai la co bat/tat. */
const VALUE_FLAGS = new Set(['mode', 'step', 'result', 'note', 'agent', 'status', 'branch', 'pr', 'max-rounds', 'max-fixes']);

function parse(argv) {
  const args = argv.slice(2);
  const flags = { _: [] };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (!a.startsWith('--')) {
      flags._.push(a);
      continue;
    }
    const [key, inline] = a.slice(2).split(/=(.*)/s);
    if (inline !== undefined) flags[key] = inline;
    else if (VALUE_FLAGS.has(key)) flags[key] = args[++i];
    else flags[key] = true;
  }
  return flags;
}

const die = (msg) => {
  console.error(msg);
  process.exit(1);
};

const shortPath = (p) => path.relative(ROOT, p);

function readState(id) {
  const file = stateFileOf(id);
  if (!fs.existsSync(file)) die(`Chua co ${shortPath(file)}. Chay "init ${id}" truoc.`);
  return readJson(file);
}

function saveState(id, state) {
  state.updated = now();
  writeFileSafe(stateFileOf(id), `${JSON.stringify(state, null, 2)}\n`);
  return state;
}

const flags = parse(process.argv);
const cmd = flags._[0];
const id = flags._[1];

if (!cmd || !id) die('Cach dung: run-state.mjs <init|next|archive-audit|record|finish> <id> [tuy chon]');

const commands = {
  init() {
    const file = stateFileOf(id);
    if (fs.existsSync(file)) {
      const state = readJson(file);
      console.log(`Da co luot chay cho "${id}" (bat dau ${state.started}, trang thai ${state.status}). Giu nguyen de chay tiep.`);
      return;
    }
    const state = saveState(id, {
      schema: RUN_SCHEMA,
      id,
      started: now(),
      updated: now(),
      status: 'dangchay',
      rounds: 0,
      maxRounds: Number(flags['max-rounds'] || 2),
      fixes: 0,
      maxFixes: Number(flags['max-fixes'] || 2),
      options: { pr: flags['no-pr'] !== true },
      steps: [],
      decisions: [],
      final: {},
    });
    console.log(`Da tao ${shortPath(file)} — toi da ${state.maxRounds} vong khao cuu, ${state.maxFixes} lan sua luoc do, tao PR: ${state.options.pr ? 'co' : 'khong'}.`);
  },

  next() {
    const state = readState(id);
    const decision = decide(id, state);
    // Ghi de "pending", khong noi them vao decisions[]: goi next bao nhieu lan cung ra mot ket qua,
    // nen chay lai lenh de tiep tuc khong de lai hang ma trong nhat ky.
    // decisions[] chi nhan quyet dinh DA THUC SU thi hanh — do record/finish chuyen sang.
    state.pending = { at: now(), step: decision.step, mode: decision.mode, why: decision.why, verdict: decision.verdict };
    saveState(id, state);

    if (flags.json) {
      console.log(JSON.stringify(decision, null, 2));
      return;
    }
    console.log(`BUOC TIEP THEO: ${decision.step} (${STEP_LABEL[decision.step]})`);
    console.log(`Ly do: ${decision.why}`);
    if (decision.mode) console.log(`Che do: ${decision.mode} (${MODE_LABEL[decision.mode]})`);
    if (decision.preAction) console.log(`Phai chay truoc: ${decision.preAction}`);
    if (decision.suggestStatus) console.log(`Trang thai ket thuc de nghi: ${decision.suggestStatus}`);
    console.log(`So vong khao cuu con lai: ${decision.roundsLeft} · so lan sua luoc do con lai: ${decision.fixesLeft}`);
    if (decision.conditions.length) {
      console.log('\nDieu kien bat buoc khi trien khai:');
      decision.conditions.forEach((c) => console.log(`  - ${typeof c === 'string' ? c : JSON.stringify(c)}`));
    }
    if (decision.blocking.length) {
      console.log('\nPhai xu ly:');
      decision.blocking.forEach((b) => console.log(`  - ${b}`));
    }
  },

  'archive-audit'() {
    const state = readState(id);
    const dir = dirOf(id);
    const suffix = `vong${state.rounds || 1}`;
    const moved = [];
    for (const [from, to] of [
      ['kiem-chung.json', `kiem-chung.${suffix}.json`],
      ['bao-cao-kiem-chung.md', `bao-cao-kiem-chung.${suffix}.md`],
      ['bao-cao-kiem-chung.html', `bao-cao-kiem-chung.${suffix}.html`],
    ]) {
      const src = path.join(dir, from);
      if (!fs.existsSync(src)) continue;
      fs.renameSync(src, path.join(dir, to));
      moved.push(`${from} -> ${to}`);
    }
    if (!moved.length) {
      console.log('Khong co ho so kiem chung nao de luu tru.');
      return;
    }
    state.steps.push({ at: now(), step: 'luutru', round: state.rounds || 0, result: 'xong', agent: null, note: moved.join(', ') });
    saveState(id, state);
    moved.forEach((m) => console.log(`Da luu tru: ${m}`));
  },

  record() {
    if (!STEPS.includes(flags.step)) die(`--step phai la mot trong: ${STEPS.join(', ')}`);
    if (!['xong', 'loi'].includes(flags.result)) die('--result phai la "xong" hoac "loi"');

    const state = readState(id);
    const pending = state.pending?.step === flags.step ? state.pending : null;
    const mode = pending?.mode || (flags.mode ?? null);

    // Sua luoc do la loi cau truc, khong phai mot vong khao cuu noi dung: dem rieng.
    if (mode === 'sualuocdo') state.fixes = (state.fixes || 0) + 1;
    else if (flags.step === 'khaocuu') state.rounds = (state.rounds || 0) + 1;

    state.steps.push({
      at: now(),
      step: flags.step,
      mode,
      round: state.rounds || 0,
      result: flags.result,
      agent: flags.agent || null,
      note: flags.note || '',
    });
    // Quyet dinh vua duoc thi hanh moi duoc vao nhat ky re nhanh.
    if (pending) {
      state.decisions.push(pending);
      state.pending = null;
    }
    saveState(id, state);
    console.log(`Da ghi nhan buoc ${flags.step}${mode ? ` (${mode})` : ''} = ${flags.result} — vong khao cuu ${state.rounds || 0}, lan sua luoc do ${state.fixes || 0}.`);
  },

  finish() {
    if (!Object.keys(TERMINAL).includes(flags.status)) {
      die(`--status phai la mot trong: ${Object.keys(TERMINAL).join(', ')}`);
    }
    const state = readState(id);
    // Quyet dinh ket thuc khong co buoc nao "record" sau no — chot o day.
    if (state.pending) {
      state.decisions.push(state.pending);
      state.pending = null;
    }
    state.status = flags.status;
    state.ended = now();
    state.final = {
      ...state.final,
      status: flags.status,
      note: flags.note || state.final?.note || '',
      branch: flags.branch || state.final?.branch || null,
      pr: flags.pr || state.final?.pr || null,
    };
    saveState(id, state);
    console.log(`Luot chay "${id}" ket thuc: ${flags.status} — ${TERMINAL[flags.status]}`);
  },
};

if (!commands[cmd]) die(`Lenh khong hop le: ${cmd}`);
commands[cmd]();
