'use client';

import PortfolioCard from './PortfolioCard';

import useTranslation from '../utils/useTranslation';
import { IProject } from '@/types/Project';

interface Props {
  titles: any;
  data: IProject[];
}
const HomePortfolio = ({ titles, data }: Props) => {
  const { t } = useTranslation();
  return (
    <section
      className="px-6 py-10 md:py-20 text-center"
      style={{
        backgroundColor: 'hsl(218, 41%, 15%)',
        backgroundImage:
          'radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%,transparent 100%)'
      }}>
      <div className="container mx-auto px-6">
        <h2
          className={`${
            titles.subtitle ? 'mb-4' : 'mb-10 md:mb-20'
          } text-3xl font-bold text-white`}>
          {t(titles.title)}
        </h2>
        {titles.subtitle && <p className="mb-10 md:mb-20 text-white">{t(titles.subtitle)}</p>}
        <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 max-w-[1100px] mx-auto">
          {data.map(project => (
            <PortfolioCard key={`home-portfolio-${project._id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
