"use client";

import Link from "next/link";
import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";
import Icon from "./Icon";

interface Props {
  titles: any;
  data: any[];
}
const HomeServices = ({ titles, data }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-10 md:py-20">
      <div className="mx-auto md:px-24 container">
        <div className="text-center mb-10 md:mb-20 md:mx-auto">
          <h2 className="max-w-lg font-sans font-bold leading-none tracking-tight text-gray-900 text-3xl sm:text-4xl md:mx-auto mb-6">
            {t(titles.title)}
          </h2>
          {titles.subtitle && <p className="max-w-xl text-gray-700 text-base md:text-lg mx-auto">
            {t(titles.subtitle)}
          </p>}
          
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {data.map((service: any) => (
            <Link href={t(service.slug)} prefetch={false} key={`service-home-${service._id}`} className="sm:text-center max-w-[300px] mx-auto hover:scale-110 duration-700 transition-all">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                {service.icon && <Icon data={service.icon} width={40} height={40} /> }
              </div>
              <h6 className="mb-2 font-semibold leading-5">{t(service.name)}</h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto min-h-[80px]">
                {t((service.description)).length < 150
                  ? t(service.description)
                  : `${t(service.description).substring(0, 150)} ...`
                }
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