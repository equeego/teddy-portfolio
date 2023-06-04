import { Menu } from "@/types/Menu";
import { createClient, groq } from "next-sanity";
import clientConfig from '../config/client-config'

export async function getMenus(): Promise<Menu[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "menu"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      url
    }`
  );
}