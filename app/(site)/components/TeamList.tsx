"use client";

import useTranslation from "../utils/useTranslation";

import MemberCard from "./MemberCard";
import { PortableText } from "@portabletext/react";
import { IMember } from "@/types/Team";

interface Props {
  titles: any;
  members: IMember[];
}
export default function TeamList({ titles, members }: Props) {
  const { t } = useTranslation();
  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-0 py-10 md:py-20 text-center">
      <h1 className="mb-0 text-3xl text-center font-bold">{t(titles.title)}</h1>
      {titles.subtitle && (
        <p className="mb-10 text-center text-2xl text-[hsl(218,81%,75%)] font-bold">
          {t(titles.subtitle)}
        </p>
      )}
      <div className="max-w-3xl mx-auto text-sm">
        <PortableText value={t(titles.content)} />
      </div>

      <div className="mt-10">
        {members.map((member: IMember, key: number) => (
          <MemberCard key={member._id} member={member} idx={key} />
        ))}
      </div>
    </section>
  );
}
