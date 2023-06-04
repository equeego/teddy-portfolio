"use client";

import { useState } from "react";
import useWindowSize from "../(utils)/useWindowSize";
import { Menu } from "@/types/Menu";
import Link from "next/link";
import Image from "next/image";


type INavbarProps = {
  menus: Menu[];
};

export default function Navbar(props: INavbarProps) {
  const { menus } = props;
  const { isMobile } = useWindowSize();

  const [show, setShow] = useState(false);

  const lng = localStorage.getItem('lng');
  const [selectedLng, setSelectedLng] = useState(lng || 'en');
  const [showDdlLng, setShowDdlLng] = useState(false);

  const renderDdlLang = () => {
    return (
      <div className="relative">
        {selectedLng === 'en' && (
          <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer" onClick={() => setShowDdlLng(!showDdlLng)}>
            <Image src="/images/en-flag.jpg" alt="Flag EN" fill />
          </div>
        )}
        {selectedLng === 'fr' && (
          <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer" onClick={() => setShowDdlLng(!showDdlLng)}>
            <Image src="/images/fr-flag.jpg" alt="Flag EN" fill />
          </div>
        )}
        {showDdlLng && (
          <div className="cursor-pointer absolute left-0 flex flex-col justify-center w-[40px]" style={{ bottom: isMobile ? '-300%' : '-420%' }}>
            <div className="w-[45px] h-[50px] rounded-lg overflow-hidden cursor-pointer mb-2 p-2 bg-white shadow-md hover:bg-gray-100" onClick={() => {
              setSelectedLng('en');
              localStorage.setItem('lng', 'en');
              setShowDdlLng(false);
            }}>
              <div className="relative rounded-lg overflow-hidden w-[30px] h-[30px] object-cover">
                <Image src="/images/en-flag.jpg" alt="Flag EN" fill />
              </div>
            </div>
            <div className="w-[45px] h-[50px] rounded-lg overflow-hidden cursor-pointer mb-2 p-2 bg-white shadow-md hover:bg-gray-100" onClick={() => {
              setSelectedLng('fr');
              localStorage.setItem('lng', 'fr');
              setShowDdlLng(false);
            }}>
              <div className="relative rounded-lg overflow-hidden w-[30px] h-[30px] object-cover">
                <Image src="/images/fr-flag.jpg" alt="Flag FR" fill />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-gray-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 items-center">
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Logo</span>
        </Link>
        <div className={`flex ${isMobile ? 'flex-row-reverse w-[80%]' : 'flex-row'}`}>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={() => {
              setShow(!show);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          {isMobile && renderDdlLang()}
        </div>
        <div className={!isMobile ? 'flex' : 'w-full'}>
          {(!isMobile || show) && (
            <div className="w-full md:block md:w-auto">
              <ul className={`flex font-medium rounded-lg ${isMobile ? 'flex-col p-4 mt-4' : 'flex-row'}`}>
                {menus.map((menu) => (
                  <li key={menu._id}>
                    <Link href={menu.slug !== 'portfolio' ? '/' : `/${menu.slug}`} className={`block text-white ${isMobile ? 'border border-white p-3 hover:bg-white hover:text-gray-900' : 'px-4 hover:underline'}`} aria-current="page">{menu.name}</Link>
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