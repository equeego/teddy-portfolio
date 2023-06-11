import { Metadata } from "next";
import { getHomePageBanner } from "@/sanity/sanity-utils";
import HomeBanner from "./components/HomeBanner";

export const metadata: Metadata = {
  title: 'Teddy R | Portfolio',
  description: 'Ramarotafika Teddy Portfolio',
}

export default async function SSRHome() {
  const banner = await getHomePageBanner();

  return (
    <>
      <HomeBanner banner={banner} />
    </>
  );
}