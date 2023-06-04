"use client";

import { useState } from "react";
import useWindowSize from "../(utils)/useWindowSize";
import { Menu } from "@/types/Menu";
import Link from "next/link";


type INavbarProps = {
  menus: Menu[];
};

export default function Navbar(props: INavbarProps) {
  const { menus } = props;
  const { isMobile } = useWindowSize();

  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gray-900 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Logo</span>
        </Link>
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
      </div>
    </nav>

  );
}