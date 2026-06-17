export function SectionTabs(tabs) {
  const buttons = tabs.map((tab, index) => `
    <button class="tab-card" type="button" data-panel="${tab.id}" aria-expanded="${index === 0}" aria-controls="${tab.id}-panel">
      <span class="tab-reveal" aria-hidden="true"></span>
      <span class="tab-ghost" aria-hidden="true">${tab.title.charAt(0)}</span>
      <span class="tab-content">
        <span class="tab-title-wrap">
          <strong class="tab-title">${tab.title}</strong>
        </span>
      </span>
      <span class="tab-arrow" aria-hidden="true">-&gt;</span>
    </button>
  `).join("");

  return `
    <nav class="section-tabs" aria-label="Portfolio sections">
      ${buttons}
    </nav>
  `;
}
