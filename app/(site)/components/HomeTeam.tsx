"use client";

import _ from "lodash";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";

interface Props {
  titles: any;
  data: any[];
}
const HomeTeam = ({ titles, data }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-10 md:py-20 bg-white">
      <div className="mx-auto md:px-24 container">
        <div className="text-center mb-10 md:mb-20 md:mx-auto">
          <h2 className="max-w-lg font-sans font-bold leading-none tracking-tight text-gray-900 text-3xl sm:text-4xl md:mx-auto mb-6">
            {t(titles.title)}
          </h2>
          {titles.subtitle && (
            <p className="max-w-xl text-gray-700 text-base md:text-lg mx-auto">
              {t(titles.subtitle)}
            </p>
          )}
        </div>
        <div className={`grid gap-6 lg:grid-cols-${data.length}`}>
          {data.map((member: any) => {
            const trimmedContent = _.flatMap(t(member.content) || [], "children")
              .map(child => child.text)
              .join(" ");
            return (
              <Link
                href={`team#${t(member.slug)}`}
                prefetch={false}
                key={`hometeam--${member._id}`}
                className="text-center max-w-[300px] mx-auto hover:scale-110 duration-700 transition-all drop-shadow-md">
                <div className="flex items-center justify-center mb-4 rounded-full mx-auto w-24 h-24 overflow-hidden">
                  <Image
                    src={member.image}
                    width={200}
                    height={200}
                    alt={member.image_alt || t(member.name)}
                    style={{ height: "calc(100% - 1px)", width: "100%" }}
                  />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{t(member.name)}</h6>
                <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto min-h-[40px]">
                  {t(member.description)}
                </p>
                <p className="max-w-md mb-3 text-sm text-gray-500 sm:mx-auto min-h-[80px]">
                  {trimmedContent.length < 150
                    ? trimmedContent
                    : `${trimmedContent.substring(0, 150)} ...`}
                </p>
                <p className="mt-6 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 capitalize">
                  {t(translate["read-more"])}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
