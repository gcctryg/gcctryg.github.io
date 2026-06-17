export function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function tagList(tags) {
  return tags.map((tag) => `<span>${tag}</span>`).join("");
}

export function sideNav(titleId, title, links) {
  const navLinks = links.map((link) => `<a href="#${link.id}">${link.label}</a>`).join("");

  return `
    <aside class="side-nav">
      <h3 id="${titleId}">${title}</h3>
      ${navLinks}
    </aside>
  `;
}
