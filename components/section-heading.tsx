"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  className?: string
  center?: boolean
  underlineColor?: string
}

export default function SectionHeading({
  title,
  className,
  center = true,
  underlineColor = "bg-red-600",
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn("mb-12", center && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl font-bold uppercase tracking-wider transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        {title}
      </h2>
      <div className="relative h-1 mt-4">
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 h-1 transition-all duration-1000 ease-out",
            underlineColor,
            isVisible ? "w-24 opacity-100" : "w-0 opacity-0",
          )}
        ></div>
      </div>
    </div>
  )
}

