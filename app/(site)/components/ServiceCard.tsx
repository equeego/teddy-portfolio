"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import Icon from "../components/Icon";
import { PortableText } from "@portabletext/react";

import useTranslation from "../utils/useTranslation";
import { translate } from "../utils/translations";
import { IService } from "@/types/Service";

interface Props {
  service: IService;
  idx?: number;
}
const ServiceCard = ({ service, idx }: Props) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [expand, setExpand] = useState<boolean>(false);
  // const colDivisionMd = useMemo(
  //   () => ((idx || 0) % 2 === 0 ? "md:grid-cols-[6rem_auto]" : "md:grid-cols-[auto_6rem]"),
  //   [idx]
  // );
  // const iconOrderMd = useMemo(
  //   () => ((idx || 0) % 2 === 0 ? "md:order-first" : "md:order-last"),
  //   [idx]
  // );
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!(ref.current as any)?.contains(event.target)) {
        setExpand(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  return (
    <div
      ref={ref}
      id={t(service.slug)}
      className={`scroll-m-20 grid gap-8 grid-cols-1 md:grid-cols-[6rem_auto] max-w-[1100px] mx-auto p-6 rounded-lg ${
        expand ? "bg-indigo-50" : "bg-white"
      } mb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}>
      <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50 mx-auto w-24 h-24 order-first">
        {/* {service.icon && <Icon data={service.icon} width={50} height={50} />} */}
      </div>
      <div className="text-center sm:text-left">
        <h2 className="mb-3 text-lg font-bold">{t(service.name)}</h2>
        {expand ? (
          <div className="text-sm text-gray-700">
            <PortableText value={t(service.content)} />
          </div>
        ) : (
          <p className="text-sm text-gray-900">{t(service.description)}</p>
        )}
        <button
          role="button"
          onClick={() => {
            setExpand(!expand);
            const element = document.getElementById(t(service.slug));

            const offset = 100;
            if (element) {
              const elementTop = element.getBoundingClientRect().top;
              const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
              const scrollToPosition = elementTop + bodyScrollTop - offset;

              window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
              });
            }
          }}
          data-te-ripple-init
          data-te-ripple-color="light"
          className="inline-block rounded-full bg-blue-900 px-6 pt-2.5 pb-2 text-white text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mt-4">
          {expand ? t(translate["read-less"]) : t(translate["read-more"])}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
