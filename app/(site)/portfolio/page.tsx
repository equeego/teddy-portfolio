import { getProjects, getHomePageProjects } from '@/sanity/sanity-utils';
import PortfolioList from '../components/PortfolioList';

export default async function SSRPortfolio() {
  const homeProjectsTitle = await getHomePageProjects();
  const projects = await getProjects();

  return <PortfolioList titles={homeProjectsTitle} projects={projects} />;
}
