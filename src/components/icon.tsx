"use client"

import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

// Define a type for valid icon names
type ValidIconNames = "discord" | "twitter" | "facebook" | "instagram" | "youtube" | "dribbble" | "behance" | "figma" | "tiktok";

interface IconProps extends LucideProps {
  name: ValidIconNames
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name as keyof typeof dynamicIconImports])

  return <LucideIcon {...props} />
}

