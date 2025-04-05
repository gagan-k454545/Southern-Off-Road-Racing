"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children: React.ReactNode
  overlayOpacity?: number
}

export default function ParallaxSection({
  imageUrl,
  height = "h-[500px]",
  children,
  overlayOpacity = 0.5,
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the section is from the center of the viewport
      const distanceFromCenter = top - windowHeight / 2 + height / 2

      // Calculate parallax offset (adjust the divisor to control the parallax effect strength)
      const newOffset = distanceFromCenter / 5

      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${height}`}>
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ transform: `translateY(${offset}px)` }}>
        <Image src={imageUrl || "/placeholder.svg"} alt="Parallax background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

