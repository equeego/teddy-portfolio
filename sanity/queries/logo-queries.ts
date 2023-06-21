import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getLogo(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "logo"][0]{
      _id,
      title,
      "logo_lg": logo_lg.asset->url,
      "logo_sm": logo_sm.asset->url,
    }`
  );
}
