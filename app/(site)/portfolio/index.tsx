"use client";

import Image from "next/image";

import { IProject } from "@/types/Project";
import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";

interface IPortfolioProps {
  projects: IProject[];
}
export default function Portfolio(props: IPortfolioProps) {
  const { projects } = props;
  const { t } = useTranslation();

  const projectInfos = (project: IProject) => {
    return {
      name: t(project.name),
      description: t(project.description),
      slug: t(project.slug),
    };
  };

  return (
    <div className="mx-10">
      <section className="my-10 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Latest projects
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project) => (
            <div key={`card-projects-${project._id}`} className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-md min-h-full">
                <div className="flex">
                  <div
                    className="relative mx-auto -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg w-[85%] h-[200px]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <Image
                      src={project.image}
                      alt={projectInfos(project).name}
                      fill
                    />
                    <a href={`/portfolio/${projectInfos(project).slug}`}>
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 text-lg font-bold">
                    {projectInfos(project).name}
                  </h5>
                  <p className="mb-4 pb-2">
                    {projectInfos(project).description}
                  </p>
                  <a
                    href={`/portfolio/${projectInfos(project).slug}`}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded-full bg-blue-900 px-6 pt-2.5 pb-2 text-white text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    {t(translate['read-more'])}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
