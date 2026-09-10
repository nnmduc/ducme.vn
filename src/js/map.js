/**
 * Quản Lý Bản Đồ Tương Tác Leaflet & Điểm Định Vị Tượng Đức Mẹ
 */

window.MarianMap = (function () {
  let mapInstance = null;
  let markersLayer = null;
  let currentVersion = "v1";
  let activeStatueId = null;
  let currentFilterYear = 2026;
  let currentBaseLayer = null;
  const markerMap = new Map();

  function initMap() {
    // Tọa độ trung tâm Việt Nam: bao quát từ Bắc vào Nam
    mapInstance = L.map("mapContainer", {
      center: [14.5, 107.5],
      zoom: 6,
      minZoom: 5,
      maxZoom: 14,
      zoomControl: false
    });

    // Zoom control góc dưới bên phải để tránh che các panel trên
    L.control.zoom({ position: "bottomright" }).addTo(mapInstance);

    // Các nguồn bản đồ 100% MIỄN PHÍ - KHÔNG CẦN API KEY - KHÔNG WATERMARK:
    const tileLayers = {
      dark: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a> &copy; OpenStreetMap | Tượng Đức Mẹ VN',
        maxZoom: 16
      }),
      satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a> Earthstar Geographics | Tượng Đức Mẹ VN',
        maxZoom: 18
      }),
      osm: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      })
    };

    // Mặc định sử dụng bản đồ đêm vũ trụ ESRI Dark Canvas (sạch sẽ, không watermark)
    currentBaseLayer = tileLayers.dark.addTo(mapInstance);
    window._tileLayers = tileLayers;

    // Khẳng định chủ quyền Quần đảo Hoàng Sa & Trường Sa của Việt Nam
    addSovereigntyLabels();

    markersLayer = L.layerGroup().addTo(mapInstance);

    renderMarkers();

    // Map click để bỏ active nếu click ra ngoài
    mapInstance.on("click", (e) => {
      if (e.originalEvent.target.classList.contains("leaflet-container")) {
        clearActiveMarker();
      }
    });

    return mapInstance;
  }

  function addSovereigntyLabels() {
    // Nhãn Quần đảo Hoàng Sa
    const hoangSaIcon = L.divIcon({
      className: "sovereignty-label",
      html: '<div style="color:rgba(148,163,184,0.7); font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:1px; white-space:nowrap;">Quần đảo Hoàng Sa (Việt Nam)</div>',
      iconSize: [160, 20],
      iconAnchor: [80, 10]
    });
    L.marker([16.5, 112.0], { icon: hoangSaIcon, interactive: false }).addTo(mapInstance);

    // Nhãn Quần đảo Trường Sa
    const truongSaIcon = L.divIcon({
      className: "sovereignty-label",
      html: '<div style="color:rgba(148,163,184,0.7); font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:1px; white-space:nowrap;">Quần đảo Trường Sa (Việt Nam)</div>',
      iconSize: [160, 20],
      iconAnchor: [80, 10]
    });
    L.marker([9.5, 114.0], { icon: truongSaIcon, interactive: false }).addTo(mapInstance);
  }

  function createMarkerIcon(statue, isHighlighted, starRole) {
    const isDiemEra = statue.diemStatue5;
    const coreClass = isDiemEra ? "marker-core diem-statue" : "marker-core";
    const starText = starRole ? starRole.star : `Năm ${statue.year}`;
    const groupClass = isHighlighted ? "is-active-group active" : "is-dimmed";
    
    const html = `
      <div class="custom-marian-marker ${groupClass}" id="marker-dom-${statue.id}">
        <div class="marker-halo"></div>
        <div class="${coreClass}">
          ${isDiemEra ? "★" : "✦"}
        </div>
        <div class="marker-label-tag">
          <div class="marker-label-title">${statue.name}</div>
          <div class="marker-label-star">${starText}</div>
        </div>
      </div>
    `;

    return L.divIcon({
      className: "marian-div-icon",
      html: html,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
  }

  function renderMarkers() {
    markersLayer.clearLayers();
    markerMap.clear();

    const versionConfig = window.CONSTELLATION_VERSIONS[currentVersion];
    const highlightedNodeIds = new Set(versionConfig ? versionConfig.nodes : []);

    window.MARIAN_STATUES_DATA.forEach((statue) => {
      const isVisibleByYear = statue.year <= currentFilterYear;
      const isIncludedInVersion = highlightedNodeIds.has(statue.id);
      const starRole = statue.constellationRole[currentVersion];

      const icon = createMarkerIcon(statue, isIncludedInVersion, starRole);
      
      // Tượng trong nhóm: sáng 100%, zIndex cao; Tượng ngoài nhóm: mờ bớt (0.28) để làm nổi bật hình chòm sao
      const targetOpacity = isIncludedInVersion 
        ? (isVisibleByYear ? 1 : 0.35) 
        : (isVisibleByYear ? 0.28 : 0.08);

      const marker = L.marker([statue.lat, statue.lng], {
        icon: icon,
        opacity: targetOpacity,
        zIndexOffset: isIncludedInVersion ? 500 : 5,
        title: statue.name
      });

      marker.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        focusStatue(statue.id);
        window.MarianModal.open(statue.id);
      });

      markerMap.set(statue.id, {
        leafletMarker: marker,
        data: statue
      });

      markersLayer.addLayer(marker);
    });
  }

  function updateYearFilter(year) {
    currentFilterYear = year;
    const versionConfig = window.CONSTELLATION_VERSIONS[currentVersion];
    const highlightedNodeIds = new Set(versionConfig ? versionConfig.nodes : []);

    markerMap.forEach((entry, id) => {
      const isIncludedInVersion = highlightedNodeIds.has(id);
      const isVisible = entry.data.year <= currentFilterYear;
      
      const targetOpacity = isIncludedInVersion 
        ? (isVisible ? 1 : 0.35) 
        : (isVisible ? 0.28 : 0.08);

      entry.leafletMarker.setOpacity(targetOpacity);
    });
  }

  function setVersion(versionKey) {
    currentVersion = versionKey;
    renderMarkers();
    if (window.MarianConstellation) {
      window.MarianConstellation.renderConstellation(currentVersion);
    }
  }

  function focusStatue(statueId) {
    activeStatueId = statueId;
    const entry = markerMap.get(statueId);
    if (!entry) return;

    // Pan map mượt mà
    mapInstance.flyTo([entry.data.lat, entry.data.lng], 9, {
      animate: true,
      duration: 1.2
    });

    // Highlight marker DOM
    document.querySelectorAll(".custom-marian-marker").forEach((el) => {
      el.classList.remove("active");
    });
    const targetDom = document.getElementById(`marker-dom-${statueId}`);
    if (targetDom) {
      targetDom.classList.add("active");
    }
  }

  function clearActiveMarker() {
    activeStatueId = null;
    document.querySelectorAll(".custom-marian-marker").forEach((el) => {
      el.classList.remove("active");
    });
  }

  function switchBaseLayer(layerKey) {
    if (!window._tileLayers || !window._tileLayers[layerKey]) return;
    if (currentBaseLayer) {
      mapInstance.removeLayer(currentBaseLayer);
    }
    currentBaseLayer = window._tileLayers[layerKey].addTo(mapInstance);
    // Đảm bảo tile layer luôn nằm dưới markers và polyline
    currentBaseLayer.bringToBack();
  }

  function getMapInstance() {
    return mapInstance;
  }

  function getCurrentVersion() {
    return currentVersion;
  }

  return {
    initMap: initMap,
    renderMarkers: renderMarkers,
    updateYearFilter: updateYearFilter,
    setVersion: setVersion,
    switchBaseLayer: switchBaseLayer,
    focusStatue: focusStatue,
    clearActiveMarker: clearActiveMarker,
    getMapInstance: getMapInstance,
    getCurrentVersion: getCurrentVersion
  };
})();
