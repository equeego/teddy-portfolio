import { getProjects } from "@/sanity/sanity-utils";
import Portfolio from "./index";

export default async function SSRPortfolio() {
  const projects = await getProjects();

  
  return <Portfolio projects={projects} />
}