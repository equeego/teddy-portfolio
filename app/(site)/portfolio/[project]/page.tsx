import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl drop-shadow font-extrabold">{project.name.en}</h1>
      </header>

      <div style={{width: '100%', height: '300px', position: 'relative', objectFit: 'cover'}} className="my-3 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.name.en}
          fill
        />
      </div>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content.en} />
      </div>
    </div>
  );
}