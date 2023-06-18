import { getSEO } from "./queries/seo-queries";
import {
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects
} from "./queries/homepage-queries";
import {
  getProjects,
  getProject,
  getPromotedProjects
} from "./queries/project-queries";
import {
  getServices,
  getService,
  getPromotedServices
} from "./queries/service-queries";

export {
  getSEO,

  // HOME PAGE
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects,

  // PROJECTS
  getProjects,
  getPromotedProjects,
  getProject,

  // SERVICES
  getServices,
  getPromotedServices,
  getService,
};
