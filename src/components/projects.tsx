"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

const mobileProjects = [
  { name: "Mobile App 1", description: "Short description", link: "#" },
  { name: "Mobile App 2", description: "Short description", link: "#" },
  { name: "Mobile App 3", description: "Short description", link: "#" },
]

const webProjects = [
  { name: "Web App 1", description: "Short description", link: "#" },
  { name: "Web App 2", description: "Short description", link: "#" },
  { name: "Web App 3", description: "Short description", link: "#" },
]

export function Projects() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 animate-gradient-x"></div>
      <div className="z-10 w-full h-full flex flex-col justify-between p-8">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-4"
        >
          {mobileProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-4"
        >
          {webProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

