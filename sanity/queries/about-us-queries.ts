import { IAboutUs } from "@/types/AboutUs";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getAbouts(): Promise<IAboutUs[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about_us"]{
      _id,
      _createdAt,
      title,
      subtitle,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "image": image.asset->url,
      "image_alt": image.alt,
      content
    }`
  );
}

export async function getPromotedAbouts(): Promise<IAboutUs[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about_us"]{
      _id,
      _createdAt,
      title,
      subtitle,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "image": image.asset->url,
      "image_alt": image.alt,
      content
    }[0...4]`
  );
}

export async function getAbout(slug: string): Promise<IAboutUs> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about_us" && (slug.en.current == $slug || slug.fr.current == $slug)][0]{
      _id,
      _createdAt,
      title,
      subtitle,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "image": image.asset->url,
      "image_alt": image.alt,
      content
    }`,
    { slug }
  );
}
