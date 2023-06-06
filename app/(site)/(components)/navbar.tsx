"use client";
import { useState } from "react";
import Select, { components } from 'react-select';
const { Option, SingleValue, Control } = components;

import Link from "next/link";
import Image from "next/image";

import useWindowSize from "../(utils)/useWindowSize";
import { Menu } from "@/types/Menu";

type INavbarProps = {
  menus: Menu[];
};

export default function Navbar(props: INavbarProps) {
  const { menus } = props;
  const { isMobile } = useWindowSize();

  const [show, setShow] = useState(false);

  const options = [
    {
      value: 'en',
      label: (
        <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer">
          <Image src="/images/en-flag.jpg" alt="EN" fill />
        </div>
      ),
      image: '/images/en-flag.jpg',
    },
    {
      value: 'fr',
      label: (
        <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer">
          <Image src="/images/fr-flag.jpg" alt="FR" fill />
        </div>
      ),
      image: '/images/fr-flag.jpg',
    },
  ];

  const [selectedLng, setSelectedLng] = useState<any>(options[0]);

  const renderDdlLang = () => {
    const customStyles = {
      control: (provided: any) => ({
        ...provided,
        border: 'none',
        borderRadius: '4px',
        minHeight: '36px',
        boxShadow: 'none',
        backgroundColor: 'transparent'
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f7f7f7' : 'white',
        color: state.isSelected ? '#333' : '#666',
        padding: '8px 12px',
      }),
      indicatorsContainer: (provided: any, state: any) => ({
        display: 'none!important'
      }),
    };

    return (
      <Select
        value={selectedLng}
        options={options}
        onChange={setSelectedLng}
        styles={customStyles}
      />
    );
  };

  return (
    <nav className="bg-white shadow-md">
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
        <div className={!isMobile ? 'flex items-center' : 'w-full'}>
          {(!isMobile || show) && (
            <div className="w-full md:block md:w-auto">
              <ul className={`flex font-medium rounded-lg ${isMobile ? 'flex-col p-4 mt-4' : 'flex-row'}`}>
                {menus.map((menu) => (
                  <li key={menu._id}>
                    <Link href={menu.slug !== 'portfolio' ? '/' : `/${menu.slug}`} className={`block text-black ${isMobile ? 'border border-white p-3 hover:bg-white hover:text-gray-900' : 'px-4 hover:underline'}`} aria-current="page">{menu.name}</Link>
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