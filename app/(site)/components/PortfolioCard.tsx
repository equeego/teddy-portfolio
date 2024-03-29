"use client";

import Image from "next/image";
import Link from "next/link";

import useTranslation from "../utils/useTranslation";
// import { translate } from '../utils/translations';
import { IProject } from "@/types/Project";

interface Props {
  project: IProject;
}
const PortfolioCard = ({ project }: Props) => {
  const { t } = useTranslation();
  return (
    <Link
      key={`card-projects-${project._id}`}
      href={`/portfolio/${t(project.slug)}`}
      prefetch={false}
      className="block rounded-lg overflow-hidden bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:scale-105 duration-700 transition-all mx-auto"
      style={{ maxWidth: "350px" }}>
      <div className="relative overflow-hidden h-[200px]">
        <Image
          src={project.image}
          width={200}
          height={200}
          alt={project.image_alt || t(project.name)}
          style={{ height: "calc(100% - 1px)", width: "100%", objectFit: "cover" }}
        />
        <svg
          className="absolute left-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="white"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="p-6 bg-white">
        <h5 className="mb-4 text-lg font-bold">{t(project.name)}</h5>
        <p className="mb-4 text-sm text-neutral-500 min-h-[80px]">
          {t(project.description).length < 150
            ? t(project.description)
            : `${t(project.description).substring(0, 150)} ...`}
        </p>

        {/* <span
          data-te-ripple-init
          data-te-ripple-color="light"
          className="inline-block rounded-full bg-blue-900 px-6 pt-2.5 pb-2 text-white text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          {t(translate['read-more'])}
        </span> */}
      </div>
    </Link>
  );
};

export default PortfolioCard;
