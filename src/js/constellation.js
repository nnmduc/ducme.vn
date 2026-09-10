/**
 * Quản Lý Lớp Phủ Chòm Sao Bắc Đẩu & Ngũ Giác Đài (Constellation Overlay)
 */

window.MarianConstellation = (function () {
  let isConstellationVisible = true;
  let constellationLayerGroup = null;
  let pointerLayerGroup = null;

  function initConstellation() {
    const map = window.MarianMap.getMapInstance();
    constellationLayerGroup = L.layerGroup().addTo(map);
    pointerLayerGroup = L.layerGroup().addTo(map);

    renderConstellation(window.MarianMap.getCurrentVersion());
    renderUrsaMajorDiagram();
  }

  function renderConstellation(versionKey) {
    constellationLayerGroup.clearLayers();
    pointerLayerGroup.clearLayers();

    if (!isConstellationVisible) {
      updatePanelInfo(versionKey, false);
      return;
    }

    const versionData = window.CONSTELLATION_VERSIONS[versionKey];
    if (!versionData) return;

    const statueMap = new Map();
    window.MARIAN_STATUES_DATA.forEach(s => statueMap.set(s.id, s));

    // Vẽ từng đoạn đường nối
    versionData.segments.forEach(([startId, endId]) => {
      const s1 = statueMap.get(startId);
      const s2 = statueMap.get(endId);
      if (!s1 || !s2) return;

      const latlngs = [
        [s1.lat, s1.lng],
        [s2.lat, s2.lng]
      ];

      // Đốm sáng nền (Halo background line)
      L.polyline(latlngs, {
        color: versionData.color,
        weight: 6,
        opacity: 0.25,
        className: "constellation-halo"
      }).addTo(constellationLayerGroup);

      // Đường nét đứt chính phát sáng (Main animated line)
      L.polyline(latlngs, {
        color: versionData.color,
        weight: 2.5,
        opacity: 0.9,
        dashArray: "6, 6",
        className: "constellation-segment"
      }).addTo(constellationLayerGroup);
    });

    // Vẽ đường chỉ hướng Sao Bắc Cực (The Pointers) nếu có (như trong V1 & V2)
    if (versionData.pointerStars && versionData.pointerStars.length === 2) {
      const p1 = statueMap.get(versionData.pointerStars[0]); // Merak (Tà Pao)
      const p2 = statueMap.get(versionData.pointerStars[1]); // Dubhe (Thác Mơ)

      if (p1 && p2) {
        // Vector kéo dài từ p1 qua p2 thêm 5 lần
        const dLat = p2.lat - p1.lat;
        const dLng = p2.lng - p1.lng;
        const polarisLat = p2.lat + dLat * 2.5;
        const polarisLng = p2.lng + dLng * 2.5;

        const pointerPath = [
          [p2.lat, p2.lng],
          [polarisLat, polarisLng]
        ];

        // Tia sáng chỉ hướng Bắc Cực
        L.polyline(pointerPath, {
          color: "#38bdf8",
          weight: 2,
          opacity: 0.7,
          dashArray: "4, 6",
          className: "pointer-line"
        }).addTo(pointerLayerGroup);

        // Biểu tượng Sao Bắc Cực (Polaris)
        const polarisIcon = L.divIcon({
          className: "polaris-star-icon",
          html: `
            <div style="display:flex; align-items:center; gap:6px;">
              <div style="width:12px; height:12px; border-radius:50%; background:#fff; box-shadow:0 0 15px #38bdf8, 0 0 25px #fff;"></div>
              <div style="font-size:10px; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px; white-space:nowrap; text-shadow:0 0 8px rgba(0,0,0,0.8);">Hướng Polaris (Bắc Cực)</div>
            </div>
          `,
          iconSize: [160, 20],
          iconAnchor: [6, 10]
        });
        L.marker([polarisLat, polarisLng], { icon: polarisIcon, interactive: false }).addTo(pointerLayerGroup);
      }
    }

    updatePanelInfo(versionKey, true);
  }

  function toggleVisibility() {
    isConstellationVisible = !isConstellationVisible;
    renderConstellation(window.MarianMap.getCurrentVersion());
    return isConstellationVisible;
  }

  function updatePanelInfo(versionKey, isVisible) {
    const version = window.CONSTELLATION_VERSIONS[versionKey];
    if (!version) return;

    const badgeEl = document.getElementById("panelBadge");
    const titleEl = document.getElementById("panelTitle");
    const descEl = document.getElementById("panelDesc");
    const countEl = document.getElementById("statCount");
    const yearRangeEl = document.getElementById("statYearRange");
    const statusEl = document.getElementById("statConstellationStatus");

    if (badgeEl) badgeEl.innerText = version.badge;
    if (titleEl) titleEl.innerText = version.name;
    if (descEl) descEl.innerText = version.description;
    if (countEl) countEl.innerText = version.nodes.length;
    if (statusEl) statusEl.innerText = isVisible ? "ĐANG BẬT" : "TẮT";

    // Tìm khoảng năm
    const statueMap = new Map();
    window.MARIAN_STATUES_DATA.forEach(s => statueMap.set(s.id, s));
    const years = version.nodes.map(id => statueMap.get(id)?.year).filter(Boolean);
    if (years.length > 0 && yearRangeEl) {
      yearRangeEl.innerText = `${Math.min(...years)} - ${Math.max(...years)}`;
    }
  }

  /**
   * Vẽ sơ đồ chòm Đại Hùng (Ursa Major / Big Dipper) thiên văn chuẩn mực
   */
  function renderUrsaMajorDiagram() {
    const box = document.getElementById("celestialDiagramBox");
    if (!box) return;

    const svg = `
      <svg width="100%" height="100%" viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <!-- Đường nối các sao thiên văn -->
        <!-- Alkaid -> Mizar -> Alioth -> Megrez -->
        <line x1="20" y1="75" x2="50" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <line x1="50" y1="60" x2="85" y2="55" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <line x1="85" y1="55" x2="120" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <!-- Bầu gáo: Megrez -> Phecda -> Merak -> Dubhe -> Megrez -->
        <line x1="120" y1="60" x2="135" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <line x1="135" y1="90" x2="185" y2="85" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <line x1="185" y1="85" x2="175" y2="40" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <line x1="175" y1="40" x2="120" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.8"/>
        <!-- Tia Pointers chỉ hướng Polaris -->
        <line x1="185" y1="85" x2="175" y2="40" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
        <line x1="175" y1="40" x2="168" y2="12" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.9"/>

        <!-- Các ngôi sao -->
        <circle cx="20" cy="75" r="3.5" fill="#fcd34d" filter="url(#starGlow)" />
        <text x="12" y="90" fill="#94a3b8" font-size="7.5" font-family="monospace">Alkaid</text>

        <circle cx="50" cy="60" r="3.5" fill="#fcd34d" filter="url(#starGlow)" />
        <text x="44" y="52" fill="#94a3b8" font-size="7.5" font-family="monospace">Mizar</text>

        <circle cx="85" cy="55" r="4" fill="#fff" filter="url(#starGlow)" />
        <text x="76" y="47" fill="#f59e0b" font-size="7.5" font-weight="bold" font-family="monospace">Alioth</text>

        <circle cx="120" cy="60" r="3" fill="#fcd34d" filter="url(#starGlow)" />
        <text x="108" y="73" fill="#94a3b8" font-size="7.5" font-family="monospace">Megrez</text>

        <circle cx="135" cy="90" r="3.5" fill="#fcd34d" filter="url(#starGlow)" />
        <text x="125" y="103" fill="#94a3b8" font-size="7.5" font-family="monospace">Phecda</text>

        <circle cx="185" cy="85" r="4" fill="#38bdf8" filter="url(#starGlow)" />
        <text x="180" y="100" fill="#38bdf8" font-size="7.5" font-family="monospace">Merak</text>

        <circle cx="175" cy="40" r="4" fill="#38bdf8" filter="url(#starGlow)" />
        <text x="182" y="42" fill="#38bdf8" font-size="7.5" font-family="monospace">Dubhe</text>

        <!-- Polaris -->
        <circle cx="168" cy="12" r="4.5" fill="#fff" filter="url(#starGlow)" />
        <text x="130" y="15" fill="#38bdf8" font-size="8" font-weight="bold" font-family="monospace">★ Polaris</text>
      </svg>
    `;
    box.innerHTML = svg;
  }

  return {
    initConstellation: initConstellation,
    renderConstellation: renderConstellation,
    toggleVisibility: toggleVisibility,
    isConstellationVisible: () => isConstellationVisible
  };
})();
