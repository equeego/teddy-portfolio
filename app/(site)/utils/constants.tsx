import Image from "next/image";
import { ILang, IMenu } from "../types/app-types";

export const langs: ILang[] = [
  {
    value: 'en',
    label: (
      <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer">
        <Image src="/images/en-flag.jpg" alt="EN" fill />
      </div>
    ),
  },
  {
    value: 'fr',
    label: (
      <div className="w-[30px] h-[30px] relative object-cover rounded-lg overflow-hidden cursor-pointer">
        <Image src="/images/fr-flag.jpg" alt="FR" fill />
      </div>
    ),
  },
];

export const menus: IMenu[] =[
  {
    en: 'Our services',
    fr: 'Nos services',
    // slug: '/services'
    slug: '/'
  },
  {
    en: 'Portfolio',
    fr: 'Portfolio',
    slug: '/portfolio'
  },
  {
    en: 'The team',
    fr: 'Notre équipe',
    // slug: '/team'
    slug: '/'
  },
  {
    en: 'Who we are',
    fr: 'Qui sommes nous',
    // slug: '/about'
    slug: '/'
  }
];