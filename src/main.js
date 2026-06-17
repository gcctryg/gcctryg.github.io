import { Banner } from "./components/Banner.js";
import { Hero } from "./components/Hero.js";
import { SectionTabs } from "./components/SectionTabs.js";
import { AboutPanel } from "./components/AboutPanel.js";
import { PortfolioPanel } from "./components/PortfolioPanel.js";
import { FuturePanel } from "./components/FuturePanel.js";
import { profile, portfolioProjects, tabs } from "./data/profile.js";
import { initTabs } from "./interactions/tabs.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Banner(profile)}
  ${Hero(profile)}
  ${SectionTabs(tabs)}
  ${AboutPanel(profile)}
  ${PortfolioPanel(portfolioProjects)}
  ${FuturePanel()}
`;

initTabs();
