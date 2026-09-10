/**
 * Quản Lý Hộp Thoại Khảo Cứu Chi Tiết (Deep Reading Modal)
 * Hỗ trợ giao diện 2 cột, không crop ảnh Đức Mẹ, chuyển đổi Tranh nghệ thuật / Ảnh thực tế,
 * và hiển thị danh mục dẫn chứng nguồn xác thực.
 */

window.MarianModal = (function () {
  let activeStatue = null;
  let currentMediaMode = "real"; // Ưu tiên hiển thị ảnh thực tế tư liệu

  function initModal() {
    const backdrop = document.getElementById("detailModalBackdrop");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
          close();
        }
      });
    }

    // Lắng nghe phím Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        close();
      }
    });
  }

  function switchMediaTab(mode) {
    currentMediaMode = mode;
    updateMediaDisplay();
  }

  function updateMediaDisplay() {
    if (!activeStatue) return;

    const heroImg = document.getElementById("modalHeroImg");
    const ambientBg = document.getElementById("modalArtAmbient");
    const captionEl = document.getElementById("modalImageCaption");
    const badgeEl = document.getElementById("modalMediaBadge");
    const btnArtwork = document.getElementById("btnTabArtwork");
    const btnReal = document.getElementById("btnTabReal");

    const hasReal = Boolean(activeStatue.realImage);

    let chosenSrc = "";
    let chosenCaption = "";
    let badgeText = "";

    if (currentMediaMode === "real" && hasReal) {
      chosenSrc = activeStatue.realImage;
      chosenCaption = activeStatue.realImageCaption || `Ảnh chụp thực địa linh đài ${activeStatue.name}`;
      badgeText = "Ảnh thực địa tư liệu • Chân thực";
      if (btnReal) btnReal.classList.add("active");
      if (btnArtwork) btnArtwork.classList.remove("active");
    } else {
      chosenSrc = activeStatue.image || "assets/images/stella_maris_hero.jpg";
      chosenCaption = `Bản họa thánh tích ${activeStatue.name} phong cách Stella Maris`;
      badgeText = "Bản họa nghệ thuật • Bố cục nguyên bản";
      if (btnArtwork) btnArtwork.classList.add("active");
      if (btnReal) btnReal.classList.remove("active");
    }

    if (heroImg) {
      heroImg.src = chosenSrc;
      heroImg.alt = activeStatue.name;
    }
    if (ambientBg) {
      ambientBg.style.backgroundImage = `url('${chosenSrc}')`;
    }
    if (captionEl) {
      captionEl.innerText = chosenCaption;
    }
    if (badgeEl) {
      badgeEl.innerText = badgeText;
    }
  }

  function open(statueId) {
    const statue = window.MARIAN_STATUES_DATA.find(s => s.id === statueId);
    if (!statue) return;
    activeStatue = statue;
    currentMediaMode = statue.realImage ? "real" : "artwork";

    const currentVersion = window.MarianMap ? window.MarianMap.getCurrentVersion() : "v1";
    const starRole = statue.constellationRole[currentVersion];

    // Cập nhật khung hình ảnh & tabs
    updateMediaDisplay();

    // Huy hiệu danh mục & thời kỳ
    const badgeContainer = document.getElementById("modalBadges");
    if (badgeContainer) {
      let badgesHtml = `<span class="modal-badge">Năm Thành Lập: ${statue.year}</span>`;
      if (statue.diemStatue5) {
        badgesHtml += `<span class="modal-badge diem">★ 1 Trong 5 Tượng TT Ngô Đình Diệm (1959)</span>`;
      }
      if (starRole) {
        badgesHtml += `<span class="modal-badge" style="border-color:#38bdf8; color:#38bdf8;">${starRole.star} (${starRole.code})</span>`;
      }
      badgeContainer.innerHTML = badgesHtml;
    }

    const titleEl = document.getElementById("modalTitle");
    if (titleEl) titleEl.innerText = statue.title;

    const locationEl = document.getElementById("modalLocation");
    if (locationEl) locationEl.innerHTML = `📍 ${statue.location} • ${statue.diocese}`;

    // Meta stats band
    const coordEl = document.getElementById("metaCoords");
    if (coordEl) coordEl.innerText = `${statue.lat.toFixed(4)}° N, ${statue.lng.toFixed(4)}° E`;

    const elevEl = document.getElementById("metaElevation");
    if (elevEl) elevEl.innerText = statue.elevation || "Đang cập nhật";

    const regionEl = document.getElementById("metaRegion");
    if (regionEl) regionEl.innerText = statue.region;

    const architectEl = document.getElementById("metaArchitect");
    if (architectEl) architectEl.innerText = statue.architect ? "KTS Ngô Viết Thụ / Điêu khắc Phát Diệm" : "Nghệ nhân Giáo phận";

    // Các phần nội dung sâu
    const historyEl = document.getElementById("modalHistoryText");
    if (historyEl) historyEl.innerText = statue.historicalFact;

    const constellationEl = document.getElementById("modalConstellationText");
    if (constellationEl) {
      let text = statue.oralTradition;
      if (starRole) {
        text = `<strong>Vị trí chòm sao:</strong> ${starRole.star} - ${starRole.role}.<br><br>` + text;
      }
      constellationEl.innerHTML = text;
    }

    const significanceEl = document.getElementById("modalSignificanceText");
    if (significanceEl) significanceEl.innerText = statue.significance;

    // Danh sách dẫn chứng nguồn xác thực
    const sourcesList = document.getElementById("modalSourcesList");
    if (sourcesList) {
      if (statue.sources && statue.sources.length > 0) {
        sourcesList.innerHTML = statue.sources.map(src => `
          <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-link-chip">
            <span class="source-icon">🔗</span>
            <span class="source-text">${src.title}</span>
            <span class="source-arrow">↗</span>
          </a>
        `).join("");
      } else {
        sourcesList.innerHTML = `
          <div style="font-size:12px; color:#94a3b8; font-style:italic;">
            Văn khố lưu trữ Giáo phận sở tại và tài liệu Thống kê Địa phận Việt Nam.
          </div>
        `;
      }
    }

    const backdrop = document.getElementById("detailModalBackdrop");
    if (backdrop) {
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function close() {
    const backdrop = document.getElementById("detailModalBackdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
    activeStatue = null;
  }

  function openGoogleMaps() {
    if (!activeStatue) return;
    const url = `https://www.google.com/maps/search/?api=1&query=${activeStatue.lat},${activeStatue.lng}`;
    window.open(url, "_blank");
  }

  return {
    initModal: initModal,
    open: open,
    close: close,
    switchMediaTab: switchMediaTab,
    openGoogleMaps: openGoogleMaps
  };
})();
