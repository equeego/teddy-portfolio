import { getProjects, getPortfolioPageContent } from "@/sanity/sanity-utils";
import PortfolioList from "../components/PortfolioList";

export default async function SSRPortfolio() {
  const portfolioPageContent = await getPortfolioPageContent();
  const projects = await getProjects();

  return <PortfolioList titles={portfolioPageContent} projects={projects} />;
}
