import { IMember } from "@/types/Team";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getMembers(): Promise<IMember[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "member"]{
      _id,
      _createdAt,
      name,
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

export async function getPromotedMembers(): Promise<IMember[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "member"]{
      _id,
      _createdAt,
      name,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "image": image.asset->url,
      "image_alt": image.alt,
      content
    }[0...3]`
  );
}

export async function getMember(slug: string): Promise<IMember> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "member" && (slug.en.current == $slug || slug.fr.current == $slug)][0]{
      _id,
      _createdAt,
      name,
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
