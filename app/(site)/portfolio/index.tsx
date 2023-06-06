"use client"

import Image from "next/image";

import { IProject } from '@/types/Project';
import useTranslation from "../utils/useTranslation";

interface IPortfolioProps {
  projects: IProject[];
}
export default function Portfolio(props: IPortfolioProps) {
  const { projects } = props;
  const { t } = useTranslation();

  const projectInfos = (project: IProject) => {
    return {
      name: t(project.name),
      slug: t(project.slug),
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