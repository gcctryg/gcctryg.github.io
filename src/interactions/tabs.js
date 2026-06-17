function scrollToElementWithOffset(element) {
  const anchorOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset")) || 0;
  const targetTop = element.getBoundingClientRect().top + window.scrollY - anchorOffset;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth"
  });
}

function activatePanel(panelName, tabButtons, detailPanels) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.panel === panelName;
    button.setAttribute("aria-expanded", String(isActive));
  });

  detailPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.detailPanel === panelName);
  });
}

export function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-card");
  const detailPanels = document.querySelectorAll("[data-detail-panel]");

  tabButtons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      button.style.setProperty("--mx", `${x}%`);
      button.style.setProperty("--my", `${y}%`);
    });

    button.addEventListener("click", () => {
      activatePanel(button.dataset.panel, tabButtons, detailPanels);
      scrollToElementWithOffset(button.closest(".section-tabs"));
    });
  });
}
