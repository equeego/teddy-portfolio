import { getLogo } from "./queries/logo-queries";
import { getSEO } from "./queries/seo-queries";
import {
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects,
  getHomePageTeam,
  getHomePageAboutUs
} from "./queries/page_home-queries";
import { getProjects, getProject, getPromotedProjects } from "./queries/project-queries";
import { getServices, getService, getPromotedServices } from "./queries/service-queries";
import { getMembers, getMember, getPromotedMembers } from "./queries/team-queries";
import { getAbout, getAbouts, getPromotedAbouts } from "./queries/about-us-queries";

import { getServicePageContent } from "./queries/page_service-queries";
import { getPortfolioPageContent } from "./queries/page_portfolio-queries";
import { getTeamPageContent } from "./queries/page_team-queries";

export {
  getLogo,
  getSEO,

  // HOME PAGE
  getHomePageBanner,
  getHomePageServices,
  getHomePageProjects,
  getHomePageTeam,
  getHomePageAboutUs,

  // SERVICES PAGE
  getServicePageContent,

  // PORTFOLIO PAGE
  getPortfolioPageContent,

  // TEAM PAGE
  getTeamPageContent,

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

  // ABOUT US
  getAbout,
  getAbouts,
  getPromotedAbouts
};
