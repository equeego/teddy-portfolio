"use client";

import { useMemo } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import useTranslation from "../utils/useTranslation";
import { IAboutUs } from "@/types/AboutUs";

interface Props {
  about: IAboutUs;
  idx?: number;
}
const AboutCard = ({ about, idx }: Props) => {
  const { t } = useTranslation();
  const colDivisionMd = useMemo(
    () => ((idx || 0) % 2 === 0 ? "md:grid-cols-[18rem_auto]" : "md:grid-cols-[auto_18rem]"),
    [idx]
  );
  const imgOrderMd = useMemo(
    () => ((idx || 0) % 2 === 0 ? "md:order-first" : "md:order-last"),
    [idx]
  );
  return (
    <div
      id={t(about.slug)}
      className={`scroll-m-20 grid gap-8 grid-cols-1 ${colDivisionMd} max-w-[1100px] mx-auto py-10 px-6 rounded-lg bg-white mb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}>
      <div
        className={`flex items-center justify-center rounded-full m-auto w-48 h-48 overflow-hidden order-first ${imgOrderMd}`}>
        <Image
          src={about.image}
          width={300}
          height={300}
          alt={about.image_alt || t(about.title)}
          style={{ height: "calc(100% - 1px)", width: "100%" }}
        />
      </div>
      <div className="text-center sm:text-left">
        <h6 className="mb-2 font-semibold leading-5">{t(about.title)}</h6>
        <p className="max-w-md text-sm mx-auto sm:mx-0 mb-2">{t(about.subtitle)}</p>
        <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto sm:mx-0 min-h-[40px]">
          {t(about.description)}
        </p>
        <div className="text-sm text-gray-700">
          <PortableText value={t(about.content)} />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
