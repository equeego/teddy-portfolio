import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from '../config/client-config'

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      "image_alt": image.alt,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && (slug.en.current == $slug || slug.fr.current == $slug)][0]{
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      content
    }`,
    { slug }
  )
}