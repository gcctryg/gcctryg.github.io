import { sideNav, tagList } from "../utils/html.js";

function projectCard(project) {
  return `
    <article class="project" id="${project.id}">
      <div class="project-thumb">${project.thumb}</div>
      <div>
        <div class="project-head">
          <h4>${project.title}</h4>
          <span class="meta">${project.meta}</span>
        </div>
        <p class="lead">${project.summary}</p>
        <div class="project-tags">${tagList(project.tags)}</div>
      </div>
    </article>
  `;
}

export function PortfolioPanel(projects) {
  const nav = sideNav("portfolio-title", "Portfolio", [
    { id: "lab-app", label: "Lab Data App" },
    { id: "ai-project", label: "AI Classification" },
    { id: "cloud-api", label: "Cloud APIs" },
    { id: "simulation", label: "Simulation" }
  ]);

  return `
    <section class="detail-panel" id="portfolio-panel" data-detail-panel="portfolio" aria-labelledby="portfolio-title">
      ${nav}
      <div class="panel-content">
        <section class="content-block">
          <h3>Project Highlights</h3>
          <p class="lead">These are starter portfolio entries based on your resume. When you send screenshots, repos, demos, or writeups, each one can become a deeper case study.</p>
          <div class="project-list">${projects.map(projectCard).join("")}</div>
        </section>
      </div>
    </section>
  `;
}
