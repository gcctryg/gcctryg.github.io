const tabButtons = document.querySelectorAll(".tab-card");
const detailPanels = document.querySelectorAll("[data-detail-panel]");

function scrollToElementWithOffset(element) {
  const anchorOffset = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset")) || 0;
  const targetTop = element.getBoundingClientRect().top + window.scrollY - anchorOffset;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth"
  });
}

function activatePanel(panelName) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.panel === panelName;
    button.setAttribute("aria-expanded", String(isActive));
  });

  detailPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.detailPanel === panelName);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activatePanel(button.dataset.panel);
    scrollToElementWithOffset(document.getElementById(`${button.dataset.panel}-panel`));
  });
});
