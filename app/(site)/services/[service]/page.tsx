import { getService } from "@/sanity/sanity-utils";
import Service from "./index";

type Props = {
  params: { service: string }
}

export default async function SSRService({ params }: Props) {
  const slug = params.service;
  const service = await getService(slug);

  return <Service service={service} />
}