"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import useTranslation from "../utils/useTranslation";

interface Props {
  banner: any;
}
const HomeBanner = ({ banner }: Props) => {
  const { t } = useTranslation();
  return (
    <section
      id="main_banner"
      className="flex flex-col justify-center"
      style={{
        minHeight: "calc(100vh - 68px)",
        backgroundColor: "hsl(218, 41%, 15%)",
        backgroundImage:
          "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%,transparent 100%)"
      }}>
      <div
        className="grid items-center gap-12 lg:grid-cols-2 container mx-0 lg:mx-auto text-center lg:text-left px-6 py-12 md:px-12 relative min-w-[100vw] lg:min-w-auto"
        style={{ minHeight: "inherit" }}>
        <div className="mt-12 lg:mt-0 z-20">
          <h1 className="mb-12 font-bold tracking-tight text-[hsl(218,81%,95%)] text-5xl md:text-6xl xl:text-7xl">
            {t(banner.title_white)}
            <br />
            <span className="text-4xl md:text-5xl xl:text-6xl text-[hsl(218,81%,75%)]">
              {t(banner.title_blue)}
            </span>
          </h1>
          <div className="text-lg text-[hsl(218,81%,95%)]">
            <PortableText value={t(banner.description)} />
          </div>
        </div>
        <div
          className="zoom_on_hover lg:mb-0 z-10 absolute top-0 left-0 lg:relative w-screen h-full lg:w-auto lg:h-auto overflow-hidden lg:rounded-lg lg:shadow-lg max-w-auto lg:max-w-[700px]"
          style={{ minHeight: "350px" }}>
          <div className="relative w-full h-full" style={{ minHeight: "inherit" }}>
            <Image src={banner.image} alt="Banner image" fill className="zoom_on_hover_img" />
            <div className="block lg:hidden absolute inset-0 bg-black bg-opacity-50 w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
