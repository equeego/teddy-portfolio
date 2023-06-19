import { getServices } from "@/sanity/sanity-utils";
import Services from "./index";

export default async function SSRService() {
  const services = await getServices();

  
  return <Services services={services} />
}