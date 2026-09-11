/**
 * Cloudflare D1 Database Operations
 */

export async function insertSubmission(env, record) {
  const query = `
    INSERT INTO submissions (
      id, type, name, email, phone, statue_id, message,
      file_keys, file_meta, ip_country, user_agent,
      status, email_status, email_error, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  await env.DB.prepare(query)
    .bind(
      record.id,
      record.type,
      record.name,
      record.email,
      record.phone || null,
      record.statue_id || null,
      record.message,
      record.file_keys ? JSON.stringify(record.file_keys) : null,
      record.file_meta ? JSON.stringify(record.file_meta) : null,
      record.ip_country || null,
      record.user_agent || null,
      record.status || 'new',
      record.email_status || 'pending',
      record.email_error || null,
      record.created_at || new Date().toISOString()
    )
    .run();
}

export async function updateSubmissionEmailStatus(env, id, status, error = null) {
  const query = `
    UPDATE submissions
    SET email_status = ?, email_error = ?
    WHERE id = ?
  `;

  await env.DB.prepare(query).bind(status, error, id).run();
}

export async function checkDbHealth(env) {
  if (!env.DB) return false;
  try {
    const res = await env.DB.prepare('SELECT 1 as ping').first();
    return res && res.ping === 1;
  } catch (err) {
    return false;
  }
}

export async function getSubmissionById(env, id) {
  if (!env.DB) return null;
  return await env.DB.prepare('SELECT * FROM submissions WHERE id = ?').bind(id).first();
}
