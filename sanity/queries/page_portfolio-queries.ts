import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getPortfolioPageContent(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio_page"][0]{
      _id,
      title,
      subtitle,
      content,
    }`
  );
}
