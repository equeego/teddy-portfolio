import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createAt: string;
  name: string;
  slug: string;
  image: string;
  image_alt: any;
  url: string;
  content: PortableTextBlock[];
};