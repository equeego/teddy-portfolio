import { PortableTextBlock } from "sanity";

export type IService = {
  _id: string;
  _createdAt: string;
  name: {
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
  content: {
    en: PortableTextBlock[];
    fr: PortableTextBlock[];
  };
};