'use client';

import { IProject } from '@/types/Project';
import useTranslation from '../utils/useTranslation';
import PortfolioCard from './PortfolioCard';

interface Props {
  titles: any;
  projects: IProject[];
}
export default function PortfolioList({ titles, projects }: Props) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto text-center px-6 md:px-0 py-10">
      <h1 className={`${titles.subtitle ? 'mb-12' : 'mb-10 md:mb-20'} text-3xl font-bold`}>
        {t(titles.title)}
      </h1>
      {titles.subtitle && <p className="mb-10 md:mb-20">{t(titles.subtitle)}</p>}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 max-w-[1100px] mx-auto">
        {projects.map(project => (
          <PortfolioCard key={`card-projects-${project._id}`} project={project} />
        ))}
      </div>
    </section>
  );
}
