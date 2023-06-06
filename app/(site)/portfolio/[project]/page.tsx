import { getProject } from "@/sanity/sanity-utils";
import Project from "./index";

type Props = {
  params: { project: string }
}

export default async function SSRProject({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <Project project={project} />
}