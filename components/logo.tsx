"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Logo() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Simulate loading delay for smoother transition
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Link href="/" className="inline-block relative">
      <div
        className={cn(
          "relative h-14 md:h-16 w-40 md:w-48 transition-all duration-500",
          isHovered && "scale-105",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>}
        <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-amber-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ss%20logo-8NJwAYlugnsXP3STGvbxW0xjoPF59j.png"
          alt="Southern Experience Logo"
          fill
          className={cn(
            "object-contain transition-all duration-500 rounded-xl",
            isLoaded ? "opacity-100" : "opacity-0",
            isHovered && "shadow-lg shadow-red-200",
          )}
          priority
          fetchPriority="high"
          onLoad={() => setIsLoaded(true)}
        />
        <div
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 transition-all duration-500 rounded-full",
            isHovered ? "w-full" : "w-0",
          )}
        ></div>
        {isHovered && (
          <div className="absolute -bottom-6 left-0 w-full text-center text-xs font-semibold text-red-600 opacity-0 animate-fade-in-up">
            SOUTHERN EXPERIENCE
          </div>
        )}
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Link>
  )
}

