import { IService } from "@/types/Service";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getServices(): Promise<IService[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"]{
      _id,
      _createdAt,
      name,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "icon": icon,
      content
    }`
  );
}

export async function getPromotedServices(): Promise<IService[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service"]{
      _id,
      _createdAt,
      name,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "icon": icon,
      content
    }[0...3]`
  );
}

export async function getService(slug: string): Promise<IService> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service" && (slug.en.current == $slug || slug.fr.current == $slug)][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "icon": icon,
      content
    }`,
    { slug }
  );
}
