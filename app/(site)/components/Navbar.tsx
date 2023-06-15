"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import { usePathname } from 'next/navigation'
import Link from "next/link";

import useWindowSize from "../utils/useWindowSize";
import useTranslation from "../utils/useTranslation";
import { useAppContext } from "../context/app";

import { langs, menus } from "../utils/constants";

import { ILang } from "../types/app-types";
import { ISEO } from "@/types/global";

interface Props {
  SEO: any;
}
export default function Navbar({ SEO }: Props) {
  const pathname = usePathname()
  const ref = useRef(null);
  const { isMobile } = useWindowSize();
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
          cursor: "pointer",
        }
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#f7f7f7" : "white",
        color: state.isSelected ? "#333" : "#666",
        padding: "8px 12px",
      }),
      indicatorsContainer: () => ({
        display: "none!important",
      }),
      menu: (provided: any) => ({
        ...provided,
        boxShadow: "none",
      }),
      input: (provided: any) => ({
        ...provided,
        opacity: 0,
      }),
    };

    return (
      <Select
        value={selectedLng}
        options={langs.filter((lng: ILang) => lng.value !== selectedLng.value)}
        onChange={handleChangeLang}
        styles={customStyles}
        // isDisabled={true}
      />
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
  
  const SEO_content = useMemo(() => {
    const idCurrentContent = SEO.findIndex((item: ISEO) => item.pathname === pathname);
    return idCurrentContent !== -1 ? SEO[idCurrentContent] : {
      _id: '',
      pathname: '/',
      title: { en: 'Portfolio', fr: 'Portfolio' },
      description: { en: 'Ramarotafika Teddy Portfolio', fr: 'Ramarotafika Teddy Portfolio' },
    };
  }, [SEO, pathname]);

  return (
    <>
      <title>{`Teddy R | ${t(SEO_content.title)}`}</title>
      <meta name="description" content={t(SEO_content.description)} />

      <nav className="bg-white shadow-md sticky top-0 z-[999999]" ref={ref}>
        <div className="container flex flex-wrap items-center justify-between mx-auto p-6 items-center">
          <Link href="/" className="flex items-center" prefetch={false}>
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
              Logo
            </span>
          </Link>
          <div
            className={`flex ${
              isMobile ? "flex-row-reverse w-[80%]" : "flex-row"
            }`}
          >
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none text-gray-400 hover:text-gray-700"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {isMobile && renderDdlLang()}
          </div>
          <div className={!isMobile ? "flex items-center" : "w-full"}>
            {(!isMobile || show) && (
              <ul
                className={`w-full md:w-auto flex font-medium rounded-lg ${
                  isMobile ? "flex-col p-0 mt-4" : "flex-row"
                }`}
              >
                {menus.map((menu) => (
                  <li key={menu.en}>
                    <Link
                      prefetch={false}
                      href={menu.slug}
                      onClick={() => setShow(false)}
                      className={`block text-black ${
                        isMobile
                          ? "border border-white px-0 py-3 hover:bg-white hover:text-gray-900"
                          : "px-4 hover:underline"
                      }`}
                      aria-current="page"
                    >
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
