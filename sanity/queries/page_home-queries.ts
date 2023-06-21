import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getHomePageBanner(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepage_banner"][0]{
      _id,
      title_white,
      title_blue,
      description,
      "image": image.asset->url,
    }`
  );
}

export async function getHomePageServices(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepage_services"][0]{
      _id,
      title,
      subtitle,
    }`
  );
}

export async function getHomePageProjects(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepage_portfolio"][0]{
      _id,
      title,
      subtitle,
    }`
  );
}

export async function getHomePageTeam(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "homepage_team"][0]{
      _id,
      title,
      subtitle,
    }`
  );
}

export async function getHomePageAboutUs(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "home_about_us"][0]{
      _id,
      title,
      subtitle,
    }`
  );
}
