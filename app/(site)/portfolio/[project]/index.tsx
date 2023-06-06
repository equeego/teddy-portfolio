"use client"
import { IProject } from '@/types/Project';
import { PortableText } from '@portabletext/react';
import Image from "next/image"

import useTranslation from "../../utils/useTranslation";

interface IProjectProps {
  project: IProject;
}

export default function Project({ project }: IProjectProps) {
  const { t } = useTranslation();

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl drop-shadow font-extrabold">{t(project.name)}</h1>
      </header>

      <div style={{width: '100%', height: '300px', position: 'relative', objectFit: 'cover'}} className="my-3 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={t(project.name)}
          fill
        />
      </div>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={t(project.content)} />
      </div>
    </div>
  );
}