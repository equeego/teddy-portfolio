"use client";

import Image from "next/image";
import Link from "next/link";
import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";

interface Props {
  titles: any
  data: any[];
}

const HomeAboutUs = ({ titles, data }: Props) => {
  const { t } = useTranslation();

  const renderElement = (element: any) => (
    <Link href={`about-us/${t(element.slug)}`} prefetch={false} key={`home-about-${element._id}`} className="zoom_on_hover sm:text-center md:text-left mx-auto bg-white grid grid-cols-[30%_70%] hover:opacity-80 min-h-[204px] w-full">
      <div className="flex items-center justify-center overflow-hidden relative">
        <Image className="zoom_on_hover_img" src={element.image} fill alt={element.image_alt} />
      </div>
      <div className="p-6">
        <h3 className="mb-4 font-semibold leading-5 capitalize">{t(element.title)}</h3>
        <p className="max-w-md text-sm sm:mx-auto mb-2">{t(element.subtitle)}</p>
        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
          {t((element.description)).length < 150
            ? t(element.description)
            : `${t(element.description).substring(0, 150)} ...`
          }
        </p>
        <p className="font-semibold capitalize text-sm">
          {t(translate['read-more'])}
        </p>
      </div>
    </Link>
  );
  const renderMainElement = (element: any, type?: string) => (
    <Link
      href={`about-us/${t(element.slug)}`}
      prefetch={false}
      key={`home-services-${element._id}`}
      className="zoom_on_hover sm:text-center mx-auto relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={element.image} fill alt={element.image_alt} className="zoom_on_hover_img" />
      </div>
      <div
        className="z-10 text-white relative text-left p-6 w-full h-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
        <h3 className="mb-4 font-semibold leading-5 capitalize">{t(element.title)}</h3>
        <p className="max-w-md text-sm sm:mx-auto mb-2">{t(element.subtitle)}</p>
        <p className="max-w-md text-sm sm:mx-auto mb-2">
          {t((element.description)).length < 150
            ? t(element.description)
            : `${t(element.description).substring(0, 150)} ...`
          }
        </p>
        <p className="font-semibold capitalize text-sm">
          {t(translate['read-more'])}
        </p>
      </div>
    </Link>
  );
  return (
    <section className="px-6 py-10 md:py-20"
        style={{
          minHeight: "calc(100vh - 68px)",
          backgroundColor: "hsl(218, 41%, 15%)",
          backgroundImage:
            "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%,transparent 100%)",
        }}>
        <div className="mx-auto md:px-24 container">
          <div className="text-center mb-10 md:mb-20 md:mx-auto text-white">
            <h2 className="max-w-lg font-sans font-bold leading-none tracking-tight text-3xl sm:text-4xl md:mx-auto mb-6">
              {t(titles.title)}
            </h2>
            {titles.subtitle && <p className="max-w-xl text-base md:text-lg mx-auto">
              {t(titles.subtitle)}
            </p>}
            
          </div>
          <div className={`rounded-xl overflow-hidden grid gap-x-0 grid-cols-1 lg:grid-cols-${data.length > 1 ? '2' : '1'}`}>
            {data.length > 0 && (
              data.length === 1
                ? renderMainElement(data[0], 'only')
                : data.length === 2 ? renderElement(data[0]): renderMainElement(data[0])
            )}
            
            {data.length > 1 && (
              <div>
                {data.slice(1).map((aboutElement: any) => renderElement(aboutElement))}
              </div>
            )}
            
          </div>
        </div>
      </section>
  );
};

export default HomeAboutUs;