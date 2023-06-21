import { getServices, getServicePageContent } from "@/sanity/sanity-utils";
import ServiceList from "../components/ServiceList";

export default async function SSRService() {
  const servicesTitle = await getServicePageContent();
  const services = await getServices();

  return <ServiceList titles={servicesTitle} services={services} />;
}
