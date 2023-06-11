import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getSEO(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "seo"]{
      _id,
      pathname,
      title,
      description,
    }`
  );
}
