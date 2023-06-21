"use client";

import useTranslation from "../utils/useTranslation";

import PortfolioCard from "./PortfolioCard";
import { PortableText } from "@portabletext/react";

import { IProject } from "@/types/Project";
interface Props {
  titles: any;
  projects: IProject[];
}
export default function PortfolioList({ titles, projects }: Props) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto text-center px-6 md:px-0 py-10">
      <div className="max-w-3xl mb-20 mx-auto">
        <h1 className="text-3xl font-bold">{t(titles.title)}</h1>
        {titles.subtitle && (
          <p className="mb-10 text-center text-2xl text-[hsl(218,81%,75%)] font-bold">
            {t(titles.subtitle)}
          </p>
        )}
        <div className="max-w-3xl mx-auto text-sm text-gray-700">
          <PortableText value={t(titles.content)} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 max-w-[1100px] mx-auto">
        {projects.map(project => (
          <PortfolioCard key={`card-projects-${project._id}`} project={project} />
        ))}
      </div>
    </section>
  );
}
