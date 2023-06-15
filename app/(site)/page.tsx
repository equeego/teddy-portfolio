import { Metadata } from "next";
import { getHomePageBanner, getPromotedProjects } from "@/sanity/sanity-utils";
import HomeBanner from "./components/HomeBanner";
import HomeServices from "./components/HomeServices";
import HomePortfolio from "./components/HomePortfolio";

export const metadata: Metadata = {
  title: 'Teddy R | Portfolio',
  description: 'Ramarotafika Teddy Portfolio',
}

export default async function SSRHome() {
  const banner = await getHomePageBanner();
  const promotedProjects = await getPromotedProjects();

  return (
    <>
      <HomeBanner banner={banner} />
      <HomeServices />
      <HomePortfolio projects={promotedProjects} />
    </>
  );
}