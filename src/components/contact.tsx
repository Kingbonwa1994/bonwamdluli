"use client"

import { motion } from "framer-motion"
import { Icon } from "@/components/icon"

// Define a type for valid icon names

// Update the socialLinks array to use the IconName type
const socialLinks  = [
  { name: "Discord", icon: "discord", url: "#" },
  { name: "Twitter", icon: "twitter", url: "#" },
  { name: "Facebook", icon: "facebook", url: "#" },
  { name: "Instagram", icon: "instagram", url: "#" },
  { name: "YouTube", icon: "youtube", url: "#" },
  { name: "Dribbble", icon: "dribbble", url: "#" },
  { name: "Behance", icon: "behance", url: "#" },
  { name: "Figma", icon: "figma", url: "#" },
  { name: "TikTok", icon: "tiktok", url: "#" },
]

export function Contact() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden snap-start">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-400 animate-gradient-x"></div>
      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.cos((index / socialLinks.length) * Math.PI * 2) * 100,
                y: Math.sin((index / socialLinks.length) * Math.PI * 2) * 100,
              }}
              whileHover={{ scale: 1.2 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Icon name={link.icon as keyof typeof Icon} className="w-8 h-8" />
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 font-bold py-2 px-4 rounded-full"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

