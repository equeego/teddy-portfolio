"use client";

import ServiceCard from "./ServiceCard";
import { IService } from "@/types/Service";
import useTranslation from "../utils/useTranslation";

interface Props {
  titles: any;
  services: IService[];
}
export default function ServiceList({ titles, services }: Props) {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto py-10 md:py-20">
      <h1 className="mb-8 text-3xl text-center font-bold">{t(titles.title)}</h1>
      {titles.subtitle && <p className="mb-10 text-center">{t(titles.subtitle)}</p>}

      {services.map((service: IService, key: number) => (
        <ServiceCard service={service} idx={key} />
      ))}
    </section>
  );
}
