import { PortableTextBlock } from "sanity";

export type IAboutUs = {
  _id: string;
  _createdAt: string;
  title: {
    en: string;
    fr: string;
  };
  subtitle: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  slug: {
    en: string;
    fr: string;
  };
  image: string;
  image_alt?: string;
  content: {
    en: PortableTextBlock[];
    fr: PortableTextBlock[];
  };
};
