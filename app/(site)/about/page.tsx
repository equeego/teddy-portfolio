import { getAbouts, getAboutPageContent } from "@/sanity/sanity-utils";
import AboutList from "../components/AboutList";

export default async function SSRService() {
  const aboutTitle = await getAboutPageContent();
  const abouts = await getAbouts();

  return <AboutList titles={aboutTitle} abouts={abouts} />;
}
