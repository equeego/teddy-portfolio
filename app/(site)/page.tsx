import { getHomePageBanner } from "@/sanity/sanity-utils";
import Home from "./index";

export default async function SSRHome() {
  const banner = await getHomePageBanner();

  return <Home banner={banner} />
}