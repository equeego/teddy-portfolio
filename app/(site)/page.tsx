import { Metadata } from "next";
import {
  getHomePageBanner,
  getHomePageServices,
  getPromotedServices,
  getHomePageProjects,
  getPromotedProjects,
} from "@/sanity/sanity-utils";
import HomeBanner from "./components/HomeBanner";
import HomeServices from "./components/HomeServices";
import HomePortfolio from "./components/HomePortfolio";

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

  return (
    <>
      <HomeBanner banner={banner} />
      <HomeServices titles={homeServicesTitle} data={homeServices} />
      <HomePortfolio titles={homeProjectsTitle} data={homeProjects} />
    </>
  );
}