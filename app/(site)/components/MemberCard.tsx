"use client";

import { useMemo } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import useTranslation from "../utils/useTranslation";
import { IMember } from "@/types/Team";

interface Props {
  member: IMember;
  idx?: number;
}
const MemberCard = ({ member, idx }: Props) => {
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
      id={t(member.slug)}
      className={`grid gap-8 grid-cols-1 ${colDivisionMd} max-w-[1100px] mx-auto py-10 px-6 rounded-lg bg-white mb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}>
      <div
        className={`flex items-center justify-center rounded-full m-auto w-48 h-48 overflow-hidden order-first ${imgOrderMd}`}>
        <Image
          src={member.image}
          width={300}
          height={300}
          alt={member.image_alt || t(member.name)}
          style={{ height: "calc(100% - 1px)", width: "100%" }}
        />
      </div>
      <div className="text-center sm:text-left">
        <h6 className="mb-2 font-semibold leading-5">{t(member.name)}</h6>
        <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto sm:mx-0 min-h-[40px]">
          {t(member.description)}
        </p>
        <div className="text-sm">
          <PortableText value={t(member.content)} />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
