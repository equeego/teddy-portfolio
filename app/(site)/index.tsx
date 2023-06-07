"use client"
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import useTranslation from "./utils/useTranslation";

interface IHomeProps {
  banner: any;
}

export default function Home({ banner }: IHomeProps) {
  const { t } = useTranslation();

  console.log(banner);
  return (
    <div
      className="flex flex-col justify-center"
      style={{
        minHeight: "calc(100vh - 68px)",
        backgroundColor: "hsl(218, 41%, 15%)",
        backgroundImage:
          "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%,transparent 100%)",
      }}
    >
      <section
        className=""
      >
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mb-12 font-bold tracking-tight text-[hsl(218,81%,95%)] text-5xl md:text-6xl xl:text-7xl">
                  {t(banner.title_white)}<br />
                  <span className="text-4xl md:text-5xl xl:text-6xl text-[hsl(218,81%,75%)]">
                  {t(banner.title_blue)}
                  </span>
                </h1>
                <div className="text-lg text-[hsl(218,81%,95%)]">
                  <PortableText value={t(banner.description)} />
                </div>
              </div>
              <div className="mb-12 lg:mb-0">
                <div
                  className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingTop: "56.25%" }}
                >
                  <div className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full">
                    <Image
                      src={banner.image}
                      alt="Banner image"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
