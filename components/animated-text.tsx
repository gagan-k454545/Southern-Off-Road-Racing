"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in"
  once?: boolean
}

export default function AnimatedText({
  children,
  delay = 0,
  animation = "fade-up",
  className,
  once = true,
  ...props
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-10 opacity-0"
      case "fade-down":
        return "-translate-y-10 opacity-0"
      case "fade-left":
        return "translate-x-10 opacity-0"
      case "fade-right":
        return "-translate-x-10 opacity-0"
      case "zoom-in":
        return "scale-95 opacity-0"
      default:
        return "opacity-0"
    }
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : getAnimationClass(),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

