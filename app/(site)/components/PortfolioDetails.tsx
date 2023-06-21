"use client";
import { IProject } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import useTranslation from "../utils/useTranslation";

interface IProjectProps {
  project: IProject;
}

export default function PortfolioDetails({ project }: IProjectProps) {
  const { t } = useTranslation();

  return (
    <>
      <title>{`Teddy R ${t(project.name) ? `| ${t(project.name)}` : ""}`}</title>
      <meta name="description" content={t(project.description)} />

      <div className="w-full h-80 overflow-hidden relative">
        <Image src={project.image} alt={t(project.name)} fill className="object-cover" />
      </div>
      <div className="container mx-auto px-6 md:px-0 py-10 md:py-20">
        <h1 className="text-3xl drop-shadow font-extrabold text-center">{t(project.name)}</h1>
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={t(project.content)} />
        </div>
      </div>
    </>
  );
}
