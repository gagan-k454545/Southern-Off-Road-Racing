"use client"

import { useState } from "react"
import Image from "next/image"

interface LogoSliderProps {
  speed?: number
  pauseOnHover?: boolean
}

export default function LogoSlider({ speed = 30, pauseOnHover = true }: LogoSliderProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Sample partner logos
  const logos = [
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 1" },
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 2" },
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 3" },
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 4" },
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 5" },
    { src: "/placeholder.svg?height=64&width=128", alt: "Partner Logo 6" },
  ]

  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos]

  // Calculate animation duration based on speed
  const animationDuration = allLogos.length * (100 / speed)

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-slider {
          animation: scroll ${animationDuration}s linear infinite;
          animation-play-state: ${isPaused ? "paused" : "running"};
        }
      `}</style>

      <div className="logo-slider flex">
        {allLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8 transition-all duration-300">
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={128}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

