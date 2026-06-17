export function Banner({ name, email, phone, phoneHref, visaStatus }) {
  return `
    <header class="site-banner" aria-label="Site header">
      <div class="banner-status" aria-label="Visa status">
        <span>${visaStatus}</span>
      </div>
      <a class="banner-name" href="#home" aria-label="Go to home">${name}</a>
      <div class="banner-contact" aria-label="Contact details">
        <a href="mailto:${email}">${email}</a>
        <a href="tel:${phoneHref}">${phone}</a>
      </div>
    </header>
  `;
}
