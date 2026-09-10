/**
 * Quản Lý Danh Sách Tượng Đức Mẹ & Bộ Lọc Đa Tiêu Chí
 */

window.MarianListView = (function () {
  let isDrawerOpen = false;
  let activeFilter = "all";
  let searchQuery = "";

  function initListView() {
    const searchInput = document.getElementById("statueSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderStatueCards();
      });
    }

    renderStatueCards();
  }

  function toggleDrawer() {
    isDrawerOpen = !isDrawerOpen;
    const drawer = document.getElementById("listViewDrawer");
    const toggleBtn = document.getElementById("toggleListBtn");

    if (drawer) {
      drawer.classList.toggle("open", isDrawerOpen);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle("active", isDrawerOpen);
    }
  }

  function setFilter(filterType, chipElement) {
    activeFilter = filterType;
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.classList.remove("active");
    });
    if (chipElement) {
      chipElement.classList.add("active");
    }
    renderStatueCards();
  }

  function getFilteredStatues() {
    return window.MARIAN_STATUES_DATA.filter(statue => {
      // Bộ lọc danh mục
      let matchesFilter = true;
      if (activeFilter === "diem5") {
        matchesFilter = statue.diemStatue5 === true;
      } else if (activeFilter === "v1") {
        matchesFilter = statue.constellationRole.v1 !== null;
      } else if (activeFilter === "taynguyen") {
        matchesFilter = statue.region === "Tây Nguyên";
      } else if (activeFilter === "trungbo") {
        matchesFilter = statue.region === "Bắc Trung Bộ" || statue.region === "Duyên hải Nam Trung Bộ";
      } else if (activeFilter === "nambo") {
        matchesFilter = statue.region === "Đông Nam Bộ" || statue.region === "Đồng bằng sông Cửu Long";
      } else if (activeFilter === "bacbo") {
        matchesFilter = statue.region === "Đồng bằng sông Hồng";
      }

      // Bộ lọc tìm kiếm từ khóa
      let matchesSearch = true;
      if (searchQuery) {
        const fullText = `${statue.name} ${statue.title} ${statue.location} ${statue.diocese} ${statue.historicalFact} ${statue.oralTradition}`.toLowerCase();
        matchesSearch = fullText.includes(searchQuery);
      }

      return matchesFilter && matchesSearch;
    });
  }

  function renderStatueCards() {
    const listContainer = document.getElementById("drawerListItems");
    if (!listContainer) return;

    const statues = getFilteredStatues();

    if (statues.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding:40px 20px; color:#94a3b8; font-size:13px;">
          Không tìm thấy địa điểm phù hợp với từ khóa "<strong>${searchQuery}</strong>".
        </div>
      `;
      return;
    }

    const currentVersion = window.MarianMap ? window.MarianMap.getCurrentVersion() : "v1";
    const versionConfig = window.CONSTELLATION_VERSIONS[currentVersion];
    const highlightedNodeIds = new Set(versionConfig ? versionConfig.nodes : []);

    listContainer.innerHTML = statues.map(s => {
      const isIncluded = highlightedNodeIds.has(s.id);

      return `
        <div class="statue-card ${s.diemStatue5 ? "diem-era" : ""} ${isIncluded ? "is-active-member" : "card-dimmed"}" onclick="window.MarianListView.onCardClick('${s.id}')">
          <span class="card-title">${s.name} ${isIncluded ? '<span class="star-indicator">★</span>' : ""}</span>
          <span class="card-year-badge">${s.year}</span>
        </div>
      `;
    }).join("");
  }

  function onCardClick(statueId) {
    window.MarianMap.focusStatue(statueId);
    window.MarianModal.open(statueId);
  }

  return {
    initListView: initListView,
    toggleDrawer: toggleDrawer,
    setFilter: setFilter,
    renderStatueCards: renderStatueCards,
    onCardClick: onCardClick
  };
})();
