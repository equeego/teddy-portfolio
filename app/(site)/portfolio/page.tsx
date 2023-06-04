import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            href={`/portfolio/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-6 m-3 hover:scale-105 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.image_alt}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            {project.name}
          </a>
        ))}
      </div>
    </div>
  )
}
