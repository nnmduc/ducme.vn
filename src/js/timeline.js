/**
 * Quản Lý Dòng Thời Gian (Timeline Player) 1798 - 2026
 */

window.MarianTimeline = (function () {
  let isPlaying = false;
  let playInterval = null;
  let currentYear = 2026;
  const minYear = 1798;
  const maxYear = 2026;

  // Các mốc son lịch sử Thánh Mẫu Việt Nam
  const milestones = [
    { year: 1798, label: "1798 (La Vang)" },
    { year: 1885, label: "1885 (Trà Kiệu)" },
    { year: 1950, label: "1950 (La Mã)" },
    { year: 1959, label: "1959 (5 Tượng TT Diệm)" },
    { year: 1963, label: "1963 (Giang Sơn)" },
    { year: 1971, label: "1971 (Măng Đen)" },
    { year: 1992, label: "1992 (Bãi Dâu)" },
    { year: 2020, label: "2020 (Núi Cúi)" }
  ];

  function initTimeline() {
    const slider = document.getElementById("timelineSlider");
    const playBtn = document.getElementById("timelinePlayBtn");

    if (slider) {
      slider.min = minYear;
      slider.max = maxYear;
      slider.value = currentYear;

      slider.addEventListener("input", (e) => {
        setYear(parseInt(e.target.value, 10));
        if (isPlaying) pause();
      });
    }

    if (playBtn) {
      playBtn.addEventListener("click", togglePlay);
    }

    renderMilestones();
    updateDisplay();
  }

  function renderMilestones() {
    const container = document.getElementById("milestonesContainer");
    if (!container) return;

    container.innerHTML = milestones.map(m => `
      <span class="milestone-node" onclick="window.MarianTimeline.jumpToYear(${m.year})">
        ${m.label}
      </span>
    `).join("");
  }

  function setYear(year) {
    currentYear = Math.max(minYear, Math.min(maxYear, year));
    const slider = document.getElementById("timelineSlider");
    if (slider) slider.value = currentYear;

    window.MarianMap.updateYearFilter(currentYear);
    updateDisplay();
  }

  function jumpToYear(year) {
    setYear(year);
    if (isPlaying) pause();
  }

  function togglePlay() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  function play() {
    if (currentYear >= maxYear) {
      currentYear = minYear;
    }
    isPlaying = true;
    const playBtn = document.getElementById("timelinePlayBtn");
    if (playBtn) {
      playBtn.innerHTML = "❚❚";
      playBtn.setAttribute("title", "Tạm dừng");
    }

    playInterval = setInterval(() => {
      if (currentYear >= maxYear) {
        pause();
        return;
      }
      // Tăng từng bước theo tốc độ lịch sử: từ trước 1950 nhảy nhanh hơn, sau 1950 từng năm
      const step = currentYear < 1950 ? 5 : 1;
      setYear(currentYear + step);
    }, 450);
  }

  function pause() {
    isPlaying = false;
    if (playInterval) {
      clearInterval(playInterval);
      playInterval = null;
    }
    const playBtn = document.getElementById("timelinePlayBtn");
    if (playBtn) {
      playBtn.innerHTML = "▶";
      playBtn.setAttribute("title", "Phát dòng thời gian");
    }
  }

  function stepYear(delta) {
    setYear(currentYear + delta);
    if (isPlaying) pause();
  }

  function updateDisplay() {
    const yearDigitEl = document.getElementById("yearDigit");
    const countEl = document.getElementById("visibleStatuesCount");

    if (yearDigitEl) {
      yearDigitEl.innerText = currentYear;
    }

    if (countEl) {
      const visibleCount = window.MARIAN_STATUES_DATA.filter(s => s.year <= currentYear).length;
      countEl.innerText = `Đã thành lập: ${visibleCount}/${window.MARIAN_STATUES_DATA.length} linh địa`;
    }

    // Highlight milestone gần nhất
    document.querySelectorAll(".milestone-node").forEach((node, idx) => {
      const m = milestones[idx];
      node.classList.toggle("active", m && m.year <= currentYear);
    });
  }

  return {
    initTimeline: initTimeline,
    setYear: setYear,
    jumpToYear: jumpToYear,
    togglePlay: togglePlay,
    stepYear: stepYear,
    getCurrentYear: () => currentYear
  };
})();
