import { IProject } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getProjects(): Promise<IProject[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
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

export async function getPromotedProjects(): Promise<IProject[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
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
    }[0..3]`
  );
}

export async function getProject(slug: string): Promise<IProject> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && (slug.en.current == $slug || slug.fr.current == $slug)][0]{
      _id,
      _createdAt,
      name,
      description,
      "slug": {
        "en": slug.en.current,
        "fr": slug.fr.current
      },
      "image": image.asset->url,
      content
    }`,
    { slug }
  );
}
