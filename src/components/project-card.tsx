import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectCardProps {
  project: {
    name: string
    description: string
    link: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 cursor-pointer"
    >
      <h3 className="text-lg font-bold mb-2">{project.name}</h3>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-300 hover:underline">
              View Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

