"use client";

import useTranslation from "../utils/useTranslation";

import AboutCard from "./AboutCard";
import { PortableText } from "@portabletext/react";
import { IAboutUs } from "@/types/AboutUs";

interface Props {
  titles: any;
  abouts: IAboutUs[];
}
export default function AboutList({ titles, abouts }: Props) {
  const { t } = useTranslation();
  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-0 py-10 md:py-20 text-center">
      <h1 className="mb-0 text-3xl text-center font-bold">{t(titles.title)}</h1>
      {titles.subtitle && (
        <p className="mb-10 text-center text-2xl text-[hsl(218,81%,75%)] font-bold">
          {t(titles.subtitle)}
        </p>
      )}
      <div className="max-w-3xl mx-auto text-sm text-gray-700">
        <PortableText value={t(titles.content)} />
      </div>

      <div className="mt-10">
        {abouts.map((about: IAboutUs, key: number) => (
          <AboutCard key={about._id} about={about} idx={key} />
        ))}
      </div>
    </section>
  );
}
