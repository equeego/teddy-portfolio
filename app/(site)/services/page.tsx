import { getServices } from "@/sanity/sanity-utils";
import ServiceList from "../components/ServiceList";

export default async function SSRService() {
  const servicesTitle = {
    title: { en: "Services page title", fr: "Titre de la page Services" },
    subtitle: { en: "Services page subtitle", fr: "Sous-titre de la page Services" }
  };
  const services = await getServices();

  return <ServiceList titles={servicesTitle} services={services} />;
}
