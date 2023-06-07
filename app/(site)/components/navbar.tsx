"use client";
import { useState } from "react";
import Select, { SingleValue } from "react-select";

import Link from "next/link";

import useWindowSize from "../utils/useWindowSize";
import useTranslation from "../utils/useTranslation";
import { useAppContext } from "../context/app";

import { langs, menus } from "../utils/constants";

import { ILang } from "../types/app-types";

export default function Navbar() {
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
        border: "none",
        borderRadius: "4px",
        minHeight: "36px",
        boxShadow: "none",
        backgroundColor: "transparent",
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
    };

    return (
      <Select
        value={selectedLng}
        options={langs}
        onChange={handleChangeLang}
        styles={customStyles}
      />
    );
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4 items-center">
        <Link href="/" className="flex items-center">
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
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
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
            <div className="w-full md:block md:w-auto">
              <ul
                className={`flex font-medium rounded-lg ${
                  isMobile ? "flex-col p-4 mt-4" : "flex-row"
                }`}
              >
                {menus.map((menu) => (
                  <li key={menu.en}>
                    <Link
                      href={menu.slug}
                      className={`block text-black ${
                        isMobile
                          ? "border border-white p-3 hover:bg-white hover:text-gray-900"
                          : "px-4 hover:underline"
                      }`}
                      aria-current="page"
                    >
                      {t(menu)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!isMobile && renderDdlLang()}
        </div>
      </div>
    </nav>
  );
}
