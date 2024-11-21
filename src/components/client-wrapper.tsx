"use client"

import { useRef } from "react"
import { CustomCursor } from "@/components/custom-cursor"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      <CustomCursor />
      {children}
    </div>
  )
}

