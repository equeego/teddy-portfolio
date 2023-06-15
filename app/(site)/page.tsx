import { Metadata } from "next";
import {
  getHomePageBanner,
  getPromotedProjects,
  getHomePageServices,
  getHomePagePortfolio,
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
  const homeServices = await getHomePageServices();
  const homeProjectsTitle = await getHomePagePortfolio();
  const homeProjects = await getPromotedProjects();

  return (
    <>
      <HomeBanner banner={banner} />
      <HomeServices titles={homeServices} data={[]} />
      <HomePortfolio titles={homeProjectsTitle} data={homeProjects} />
    </>
  );
}