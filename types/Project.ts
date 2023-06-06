import { PortableTextBlock } from "sanity";

export type IProject = {
  _id: string;
  _createAt: string;
  name: {
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
