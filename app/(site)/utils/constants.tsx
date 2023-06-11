import Image from "next/image";
import { ILang, IMenu } from "../types/app-types";

export const langs: ILang[] = [
  {
    value: 'en',
    label: (
      <div className="w-[20px] h-[15px] relative object-cover rounded overflow-hidden cursor-pointer">
        <Image src="/images/en-flag.jpg" alt="EN" fill />
      </div>
    ),
  },
  {
    value: 'fr',
    label: (
      <div className="w-[20px] h-[15px] relative object-cover rounded overflow-hidden cursor-pointer">
        <Image src="/images/fr-flag.jpg" alt="FR" fill />
      </div>
    ),
  },
];

export const menus: IMenu[] =[
  {
    en: 'Services',
    fr: 'Services',
    slug: '/services'
  },
  {
    en: 'Portfolio',
    fr: 'Portfolio',
    slug: '/portfolio'
  },
  {
    en: 'The team',
    fr: "L'équipe",
    slug: '/team'
  },
  {
    en: 'About',
    fr: 'À propos',
    slug: '/about'
  }
];