"use client";

import Link from "next/link";
import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";

interface Props {
  titles: any;
  data: any[];
}
const HomeServices = ({ titles }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-10 md:py-20">
      <div className="mx-auto md:px-24 container">
        <div className="text-center mb-10 md:mb-12 md:mx-auto">
          <h2 className="max-w-lg font-sans font-bold leading-none tracking-tight text-gray-900 text-3xl sm:text-4xl md:mx-auto mb-6">
            {t(titles.title)}
          </h2>
          {titles.subtitle && <p className="max-w-xl text-gray-700 text-base md:text-lg mx-auto">
            {t(titles.subtitle)}
          </p>}
          
        </div>
        <div className="grid gap-6 lg:grid-cols-3 mt-8">
          {[1,2,3].map((key: number) => (
            <Link href="/" prefetch={false} key={`service-home-${key}`} className="sm:text-center max-w-[300px] mx-auto hover:scale-110 duration-700 transition-all">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Pick up truck</h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
                mechad
              </p>
              <p className="mt-6 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 capitalize">
                {t(translate['read-more'])}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;