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
