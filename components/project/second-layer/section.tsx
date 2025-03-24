"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { getProjects, getCategories } from "@/lib/api/projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

export function SecondLayer() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const projects = getProjects()
  const categories = getCategories()
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const [projectVisibility, setProjectVisibility] = useState<boolean[]>([])
  const [areAnimationsReady, setAreAnimationsReady] = useState(false)

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory, projects])

  useEffect(() => {
    setProjectVisibility(filteredProjects.map(() => false))
    setAreAnimationsReady(true)

    const observers: IntersectionObserver[] = []
    
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setProjectVisibility(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
              observer.disconnect()
            }
          },
          { threshold: 0.1 }
        )
        
        observer.observe(ref)
        observers.push(observer)
      }
    })
    
    // Cleanup observers
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [filteredProjects])

  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 mt-24 sm:mt-44" id="projects-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-4 mb-8"
      >
        <span className="text-lg font-semibold">⭐ Our Best&apos; Client Journey</span>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          // Create a slug from the project title
          const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-")

          return (
            <motion.div
              key={project.id}
              // FIX: Changed the ref callback to not return a value
              ref={(el: HTMLDivElement | null) => {
                projectRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={
                areAnimationsReady && projectVisibility[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group relative"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  width={320}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Link href={`/project/${projectSlug}`} legacyBehavior>
                  <a className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">View Project</span>
                  </a>
                </Link>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                {/* Display Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}