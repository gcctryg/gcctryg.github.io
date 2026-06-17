export function Hero(profile) {
  return `
    <section class="intro-grid" id="home">
      <div class="intro-copy">
        <p class="eyebrow">Portfolio home</p>
        <h2>${profile.headline}</h2>
        <p>${profile.heroSummary}</p>
      </div>
      <figure class="visual-panel">
        <img src="${profile.heroImage.src}" alt="${profile.heroImage.alt}">
        <figcaption class="visual-caption">
          <span>${profile.heroCaption.stack}</span>
          <strong>${profile.heroCaption.focus}</strong>
        </figcaption>
      </figure>
    </section>
  `;
}
