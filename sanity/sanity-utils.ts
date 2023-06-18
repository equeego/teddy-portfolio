import { getSEO } from "./queries/seo-queries";
import {
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects,
  getHomePageTeam
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
import {
  getMembers,
  getMember,
  getPromotedMembers
} from "./queries/team-queries";

export {
  getSEO,

  // HOME PAGE
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects,
  getHomePageTeam,

  // PROJECTS
  getProjects,
  getPromotedProjects,
  getProject,

  // SERVICES
  getServices,
  getPromotedServices,
  getService,

  // TEAM
  getMembers,
  getMember,
  getPromotedMembers,
};
