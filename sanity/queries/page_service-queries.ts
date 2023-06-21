import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getServicePageContent(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "service_page"][0]{
      _id,
      title,
      subtitle,
      content,
    }`
  );
}
