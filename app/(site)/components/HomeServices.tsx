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
    <section className="px-6 py-10 md:py-20 bg-white">
      <div className="mx-auto md:px-24 container">
        <div className="text-center mb-10 md:mb-20 md:mx-auto">
          <h2 className="max-w-lg font-sans font-bold leading-none tracking-tight text-gray-900 text-3xl lg:text-4xl mx-auto mb-6">
            {t(titles.title)}
          </h2>
          {titles.subtitle && (
            <p className="max-w-xl text-gray-700 text-base md:text-lg mx-auto">
              {t(titles.subtitle)}
            </p>
          )}
        </div>
        <div className={`grid gap-6 lg:grid-cols-${data.length}`}>
          {data.map((service: any) => (
            <Link
              href={`services#${t(service.slug)}`}
              prefetch={false}
              key={`home-services-${service._id}`}
              className="text-center max-w-[300px] mx-auto hover:scale-110 duration-700 transition-all mb-10 sm:mb-0">
              <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50 mx-auto w-24 h-24">
                {/* {service.icon && <Icon data={service.icon} width={40} height={40} />} */}
              </div>
              <h3 className="mb-2 font-semibold leading-5">{t(service.name)}</h3>
              <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto lg:min-h-[80px]">
                {t(service.description).length < 150
                  ? t(service.description)
                  : `${t(service.description).substring(0, 150)} ...`}
              </p>
              <p className="mt-2 sm:mt-6 inline-flex items-center font-semibold transition-colors duration-200 capitalize text-sm">
                {t(translate["read-more"])}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
