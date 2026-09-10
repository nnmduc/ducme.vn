/**
 * Quản Lý Hộp Thoại Khảo Cứu Chi Tiết (Deep Reading Modal)
 * Nguyên tắc:
 * 1. Tuyệt đối không dùng ảnh AI.
 * 2. Chỉ hiển thị khi có ảnh thực tế được xác thực (Wikimedia Commons / Ảnh thực địa).
 * 3. Nếu không có ảnh thực tế, ẩn hoàn toàn khu vực hình ảnh và hiển thị giao diện 1 cột thanh lịch.
 */

window.MarianModal = (function () {
  let activeStatue = null;

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

  function open(statueId) {
    const statue = window.MARIAN_STATUES_DATA.find(s => s.id === statueId);
    if (!statue) return;
    activeStatue = statue;

    const currentVersion = window.MarianMap ? window.MarianMap.getCurrentVersion() : "v1";
    const starRole = statue.constellationRole[currentVersion];

    // Xử lý hiển thị hình ảnh: Chỉ hiện khi có ảnh thực tế, không có thì ẩn hẳn
    const visualCol = document.getElementById("modalVisualColumn");
    const modalCard = document.getElementById("detailModalCard");
    const heroImg = document.getElementById("modalHeroImg");
    const ambientBg = document.getElementById("modalArtAmbient");
    const captionEl = document.getElementById("modalImageCaption");

    if (statue.realImage) {
      if (visualCol) visualCol.style.display = "flex";
      if (modalCard) modalCard.classList.remove("no-image");
      if (heroImg) {
        heroImg.src = statue.realImage;
        heroImg.alt = statue.name;
      }
      if (ambientBg) {
        ambientBg.style.backgroundImage = `url('${statue.realImage}')`;
      }
      if (captionEl) {
        captionEl.innerText = statue.realImageCaption || `Ảnh chụp thực tế linh đài ${statue.name}`;
      }
    } else {
      if (visualCol) visualCol.style.display = "none";
      if (modalCard) modalCard.classList.add("no-image");
      if (heroImg) {
        heroImg.src = "";
        heroImg.alt = "";
      }
      if (ambientBg) {
        ambientBg.style.backgroundImage = "none";
      }
    }

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
    openGoogleMaps: openGoogleMaps
  };
})();
