const icons = {
  visa: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="M7 9h5"></path>
      <path d="M7 13h10"></path>
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2"></rect>
      <path d="m5 8 7 5 7-5"></path>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5a4 4 0 0 1 1-2.8 3.7 3.7 0 0 1 .1-2.8s.9-.3 2.9 1.1a9.9 9.9 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8a4 4 0 0 1 1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2.1V21c0 .3.2.6.8.5A10 10 0 0 0 12 2Z"></path>
    </svg>
  `
};

function infoItem(icon, label) {
  return `<span class="banner-info-icon">${icons[icon]}</span><span>${label}</span>`;
}

export function Banner({ name, email, phone, phoneHref, githubUrl, visaStatus }) {
  const githubHref = githubUrl || "https://github.com/gcctryg";
  const bannerName = name.toUpperCase().replace(" ", "\u00a0");
  const letters = [...bannerName].map((letter, index) => {
    const isAccent = index === 3 || index === 4;
    const className = isAccent ? "banner-letter is-accent" : "banner-letter";

    return `<span class="${className}">${letter}</span>`;
  }).join("");

  return `
    <header class="site-banner" aria-label="Site header">
      <div class="banner-status" aria-label="Visa status">
        <span>${infoItem("visa", visaStatus)}</span>
      </div>
      <a class="banner-name" href="#home" aria-label="Go to home">${letters}</a>
      <div class="banner-contact" aria-label="Contact details">
        <a href="mailto:${email}">${infoItem("email", email)}</a>
        <a href="tel:${phoneHref}">${infoItem("phone", phone)}</a>
        <a href="${githubHref}" target="_blank" rel="noreferrer">${infoItem("github", "GitHub")}</a>
      </div>
    </header>
  `;
}
