"use client";

import useTranslation from "../utils/useTranslation";

import ServiceCard from "./ServiceCard";
import { PortableText } from "@portabletext/react";
import { IService } from "@/types/Service";

interface Props {
  titles: any;
  services: IService[];
}
export default function ServiceList({ titles, services }: Props) {
  const { t } = useTranslation();
  return (
    <section className="container max-w-5xl mx-auto py-10 md:py-20 text-center">
      <h1 className="mb-8 text-3xl text-center font-bold">{t(titles.title)}</h1>
      {titles.subtitle && <p className="mb-10 text-center">{t(titles.subtitle)}</p>}
      <div className="max-w-3xl mx-auto">
        <PortableText value={t(titles.content)} />
      </div>

      <div className="mt-10">
        {services.map((service: IService, key: number) => (
          <ServiceCard key={service._id} service={service} idx={key} />
        ))}
      </div>
    </section>
  );
}
