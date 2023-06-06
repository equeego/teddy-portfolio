"use client";
import { useAppContext } from "../context/app";

interface IText {
  t: any;
}

export default function useTranslation(): IText {
  const { lang } = useAppContext();

  const language = lang || "en";

  const t = (value: any) => {
    return language === "en" ? value.en : value.fr;
  };

  return { t };
}
