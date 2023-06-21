import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getAboutPageContent(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about_page"][0]{
      _id,
      title,
      subtitle,
      content,
    }`
  );
}
