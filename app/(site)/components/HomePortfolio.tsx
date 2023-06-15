"use client";

import Image from "next/image";
import Link from "next/link";
import useTranslation from "../utils/useTranslation";

interface Props {
  titles: any
  data: any[];
}
const HomePortfolio = ({ titles, data }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-10 md:py-20 text-center" 
      style={{
        backgroundColor: "hsl(218, 41%, 15%)",
        backgroundImage:
          "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%,transparent 100%)",
      }}>
      <div className="container mx-auto px-6">
        <h2 className={`${titles.subtitle ? 'mb-4' : 'mb-20'} text-3xl font-bold text-white`}>
          {t(titles.title)}
        </h2>
        {titles.subtitle && <p className="mb-20 text-white">{t(titles.subtitle)}</p>}
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {data.map((project) => (
            <Link key={`home-portfolio-${project._id}`} prefetch={false} href={`/portfolio/${t(project.slug)}`}
              className="project block rounded-lg overflow-hidden bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-110 duration-700 transition-all">
              <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px]">
                <Image src={project.image} width={300} height={300} alt={project.image_alt} style={{ height: 'calc(100% - 1px)', width: '100%' }} />
                <svg className="absolute text-white left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320">
                  <path fill="white"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div className="p-6 bg-white">
                <h5 className="mb-4 text-lg font-bold">{t(project.name)}</h5>
                <p className="mb-4 text-neutral-500">{t(project.description)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;