export function initBannerName() {
  document.querySelectorAll(".banner-name").forEach((logo) => {
    const letters = [...logo.querySelectorAll(".banner-letter")];

    logo.addEventListener("pointermove", (event) => {
      const rect = logo.getBoundingClientRect();
      const x = event.clientX - rect.left;

      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();
        const center = letterRect.left - rect.left + letterRect.width / 2;
        const distance = Math.abs(x - center);
        const lift = Math.max(0, 1 - distance / 58) * -8;

        letter.style.setProperty("--wave", `${lift}px`);
      });
    });

    logo.addEventListener("pointerleave", () => {
      letters.forEach((letter) => {
        letter.style.setProperty("--wave", "0px");
      });
    });
  });
}
