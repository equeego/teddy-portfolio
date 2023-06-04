import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createAt: string;
  name: {
    en: string;
    fr: string;
  };
  image: string;
  content: {
    en: PortableTextBlock[];
    fr: PortableTextBlock[];
  };
};