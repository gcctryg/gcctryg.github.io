import { listItems, sideNav, tagList } from "../utils/html.js";

function entry({ title, date, bullets }) {
  return `
    <article class="entry">
      <div class="entry-head">
        <h4>${title}</h4>
        <span class="meta">${date}</span>
      </div>
      <ul>${listItems(bullets)}</ul>
    </article>
  `;
}

function resumeProject({ title, date, summary }) {
  return `
    <article class="entry">
      <div class="entry-head">
        <h4>${title}</h4>
        <span class="meta">${date}</span>
      </div>
      <p class="lead">${summary}</p>
    </article>
  `;
}

function skillGroup({ group, items }) {
  return `
    <article class="skill-group">
      <h4>${group}</h4>
      <p>${tagList(items)}</p>
    </article>
  `;
}

export function AboutPanel(profile) {
  const nav = sideNav("about-title", "About Me", [
    { id: "intro", label: "Intro" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Work Experience" },
    { id: "resume-projects", label: "Projects" },
    { id: "skills", label: "Skills" }
  ]);

  return `
    <section class="detail-panel is-active" id="about-panel" data-detail-panel="about" aria-labelledby="about-title">
      ${nav}
      <div class="panel-content">
        <section class="content-block" id="intro">
          <h3>Intro</h3>
          <p class="lead">${profile.intro}</p>
        </section>

        <section class="content-block" id="education">
          <h3>Education</h3>
          <div class="timeline">
            <article class="entry">
              <div class="entry-head">
                <h4>${profile.education.school}</h4>
                <span class="meta">${profile.education.location}</span>
              </div>
              <ul>${listItems(profile.education.items)}</ul>
            </article>
          </div>
        </section>

        <section class="content-block" id="experience">
          <h3>Work Experience</h3>
          <div class="timeline">${profile.experience.map(entry).join("")}</div>
        </section>

        <section class="content-block" id="resume-projects">
          <h3>Projects</h3>
          <div class="project-list">${profile.resumeProjects.map(resumeProject).join("")}</div>
        </section>

        <section class="content-block" id="skills">
          <h3>Key Skills</h3>
          <div class="skill-grid">${profile.skills.map(skillGroup).join("")}</div>
        </section>
      </div>
    </section>
  `;
}
