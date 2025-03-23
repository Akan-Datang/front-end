"use client"

import type React from "react"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"
import type { Technology } from "@/lib/api/projects"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import * as LuIcons from "react-icons/lu"

interface TechCategoryProps {
  title: string
  technologies: Technology[]
  delay: number
}

type IconLibrary = Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>

function TechCategory({ title, technologies, delay }: TechCategoryProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech) => {
          const [library, iconName] = tech.icon.split(":")
          

          let IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | null = null

            if (library === "fa") {
                IconComponent = (FaIcons as IconLibrary)[`Fa${iconName}`];
            } else if (library === "si") {
                IconComponent = (SiIcons as IconLibrary)[`Si${iconName}`];
            } else if (library === "lu") {
                IconComponent = (LuIcons as IconLibrary)[`Lu${iconName}`];
            }

          return (
            <div key={tech.name} className="flex items-center gap-2">
              {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
              <span>{tech.name}</span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

interface ProjectTechStackProps {
  technologies: {
    frontend?: Technology[]
    backend?: Technology[]
    database?: Technology[]
    hosting?: Technology[]
  }
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  const categories = [
    { key: "frontend", title: "Frontend", techs: technologies.frontend || [] },
    { key: "backend", title: "Backend", techs: technologies.backend || [] },
    { key: "database", title: "Database", techs: technologies.database || [] },
    { key: "hosting", title: "Hosting", techs: technologies.hosting || [] },
  ].filter((category) => category.techs.length > 0)

  return (
    <Container className="py-12">
      <div className="flex flex-col gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Badge variant="outline" className="mr-2">
            🛠️ Technology Used
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
          The tech stack that powered the website.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <TechCategory
              key={category.key}
              title={category.title}
              technologies={category.techs}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}