import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/api/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="bg-card dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group relative">
      <div className="relative overflow-hidden">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.title}
          width={320}
          height={320}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay with Link - Full Cover */}
        <Link href={`/project/${projectSlug}`} legacyBehavior>
          <a className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">View Project</span>
          </a>
        </Link>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>

        {/* Menampilkan Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-secondary/50 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

