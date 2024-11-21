"use client"

import { motion } from "framer-motion"
import { Icon } from "@/components/icon"

const technologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Git", icon: "git" },
  { name: "Vercel", icon: "vercel" },
  { name: "Supabase", icon: "supabase" },
  { name: "Payload", icon: "payload" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
]

export function TechStack() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-400 animate-gradient-x"></div>
      <div className="z-10 grid grid-cols-3 gap-8 p-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <Icon name={tech.icon as keyof typeof Icon} className="w-16 h-16 mb-2" />
            <span className="text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
