import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import { slugify } from "../(utils)/format";

export default async function Portfolio() {
  const projects = await getProjects();

  const projectInfos = (project: Project) => {
    return {
      name: project.name.en,
      slug: slugify(project.name.en)
    };
  };

  return (
    <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            href={`/portfolio/${projectInfos(project).slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-6 m-3 hover:scale-105 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={projectInfos(project).name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            {projectInfos(project).name}
          </a>
        ))}
      </div>
    </div>
  )
}
