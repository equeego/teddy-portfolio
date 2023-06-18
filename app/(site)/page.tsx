import { Metadata } from "next";
import {
  getHomePageBanner,
  getHomePageServices,
  getPromotedServices,
  getHomePageProjects,
  getPromotedProjects,
  getHomePageTeam,
  getPromotedMembers,
  getHomePageAboutUs,
  getPromotedAbouts,
} from "@/sanity/sanity-utils";
import HomeBanner from "./components/HomeBanner";
import HomeServices from "./components/HomeServices";
import HomePortfolio from "./components/HomePortfolio";
import HomeTeam from "./components/HomeTeam";
import HomeAboutUs from "./components/HomeAboutUs";

export const metadata: Metadata = {
  title: 'Teddy R | Portfolio',
  description: 'Ramarotafika Teddy Portfolio',
}

export default async function SSRHome() {
  const banner = await getHomePageBanner();

  const homeServicesTitle = await getHomePageServices();
  const homeServices = await getPromotedServices();

  const homeProjectsTitle = await getHomePageProjects();
  const homeProjects = await getPromotedProjects();

  const homeTeamTitle = await getHomePageTeam();
  const homeTeam = await getPromotedMembers();

  const homeAboutUsTitle = await getHomePageAboutUs();
  const homeAboutUs = await getPromotedAbouts();

  return (
    <>
      <HomeBanner banner={banner} />
      <HomeServices titles={homeServicesTitle} data={homeServices} />
      <HomePortfolio titles={homeProjectsTitle} data={homeProjects} />
      <HomeTeam titles={homeTeamTitle} data={homeTeam} />
      <HomeAboutUs titles={homeAboutUsTitle} data={homeAboutUs} />
    </>
  );
}