"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import { usePathname } from "next/navigation";
import Link from "next/link";

import useWindowSize from "../utils/useWindowSize";
import useTranslation from "../utils/useTranslation";
import { useAppContext } from "../context/app";

import { langs, menus } from "../utils/constants";

import { ILang } from "../types/app-types";
import { ISEO } from "@/types/global";
import Image from "next/image";

interface Props {
  SEO: any;
  logo: any;
}
export default function Navbar({ SEO, logo }: Props) {
  const pathname = usePathname();
  const ref = useRef(null);
  const { isMobile, isPhone } = useWindowSize();
  const { t } = useTranslation();
  const { setLang } = useAppContext();

  const [show, setShow] = useState(false);

  const [selectedLng, setSelectedLng] = useState<ILang>(langs[0]);

  const handleChangeLang = (s: SingleValue<ILang>) => {
    setSelectedLng(s as ILang);
    if (s) setLang(s.value);
  };

  const renderDdlLang = () => {
    const customStyles = {
      control: (provided: any) => ({
        ...provided,
        border: "1px solid transparent",
        borderRadius: "4px",
        minHeight: "36px",
        boxShadow: "none",
        backgroundColor: "transparent",
        ":hover": {
          borderColor: "transparent",
          cursor: "pointer"
        }
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#f7f7f7" : "white",
        color: state.isSelected ? "#333" : "#666",
        padding: "8px 12px"
      }),
      indicatorsContainer: () => ({
        display: "none!important"
      }),
      menu: (provided: any) => ({
        ...provided,
        boxShadow: "none"
      }),
      input: (provided: any) => ({
        ...provided,
        opacity: 0
      })
    };

    return (
      <div className="relative z-[999999]">
        <Select
          value={selectedLng}
          options={langs.filter((lng: ILang) => lng.value !== selectedLng.value)}
          onChange={handleChangeLang}
          styles={customStyles}
          // isDisabled={true}
        />
      </div>
    );
  };

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!(ref.current as any)?.contains(event.target)) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  // is not set on server side as translation is only defined on client
  const SEO_content = useMemo(() => {
    const idCurrentContent = SEO.findIndex((item: ISEO) => item.pathname === pathname);
    return idCurrentContent !== -1
      ? SEO[idCurrentContent]
      : {
          _id: "",
          pathname: "/",
          title: { en: "", fr: "" },
          description: { en: "Ramarotafika Teddy", fr: "Ramarotafika Teddy" }
        };
  }, [SEO, pathname]);

  return (
    <>
      <title>{`Teddy R ${t(SEO_content.title) ? `| ${t(SEO_content.title)}` : ""}`}</title>
      <meta name="description" content={t(SEO_content.description)} />

      <nav className="bg-white shadow-md sticky top-0 z-[999998] min-h-[76px]" ref={ref}>
        <div className="max-w-6xl flex flex-wrap justify-between mx-auto py-2 px-6 items-center">
          <Link
            href="/"
            className="flex items-center overflow-hidden relative"
            prefetch={false}
            style={{
              width: isPhone ? 40 : 150,
              height: isPhone ? 40 : 60
            }}>
            {logo && (
              <Image
                fill
                src={!isPhone ? logo.logo_lg : logo.logo_sm}
                alt={logo.title || "Teddy R"}
              />
            )}
          </Link>
          <div className={`flex ${isMobile ? "flex-row-reverse" : "flex-row"}`}>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none text-gray-400 hover:text-gray-700"
              onClick={() => {
                setShow(!show);
              }}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
            {isMobile && renderDdlLang()}
          </div>
          <div className={!isMobile ? "flex items-center" : "w-full"}>
            {(!isMobile || show) && (
              <ul
                className={`w-full md:w-auto flex font-medium rounded-lg ${
                  isMobile ? "flex-col p-0 mt-4" : "flex-row"
                }`}>
                {menus.map(menu => (
                  <li key={menu.en}>
                    <Link
                      prefetch={false}
                      href={menu.slug}
                      onClick={() => setShow(false)}
                      className={`block text-black ${
                        isMobile
                          ? "border border-white px-0 py-3 hover:bg-white hover:text-gray-900"
                          : "px-4 hover:underline"
                      } ${pathname.includes(menu.slug) ? "underline" : ""}`}
                      aria-current="page">
                      {t(menu)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!isMobile && renderDdlLang()}
          </div>
        </div>
      </nav>
    </>
  );
}
