import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getTeamPageContent(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "team_page"][0]{
      _id,
      title,
      subtitle,
      content,
    }`
  );
}
