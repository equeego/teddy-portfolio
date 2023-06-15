import { getProjects, getProject, getPromotedProjects } from "./queries/project-queries";
import { getHomePageBanner, getHomePageServices, getHomePagePortfolio } from "./queries/homepage-queries";
import { getSEO } from "./queries/seo-queries";

export {
  getSEO,

  // HOME PAGE
  getHomePageBanner,
  getHomePageServices,
  getHomePagePortfolio,

  // PROJECTS
  getProjects,
  getPromotedProjects,
  getProject,
};
