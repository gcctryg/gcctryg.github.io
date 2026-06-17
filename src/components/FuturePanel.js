import { sideNav } from "../utils/html.js";

export function FuturePanel() {
  const nav = sideNav("future-title", "Future Space", [
    { id: "future-ideas", label: "Ideas" }
  ]);

  return `
    <section class="detail-panel" id="future-panel" data-detail-panel="future" aria-labelledby="future-title">
      ${nav}
      <div class="panel-content">
        <section class="content-block" id="future-ideas">
          <h3>Open for the next idea</h3>
          <div class="future-note">
            <p>
              This section is intentionally quiet for now. Later it could become a blog, a photo or design gallery,
              a research notes page, selected coursework, awards, certifications, or a contact-focused section.
            </p>
          </div>
        </section>
      </div>
    </section>
  `;
}
