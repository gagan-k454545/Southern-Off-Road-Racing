"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ImageWithLoadingProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  containerClassName?: string
  sizes?: string
  quality?: number
  onLoad?: () => void
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
}

export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  containerClassName = "",
  sizes,
  quality = 85,
  onLoad,
  objectFit = "cover",
  objectPosition = "center",
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [isError, setIsError] = useState(false)
  const [src_, setSrc] = useState(src)

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(!priority)
    setIsError(false)
    setSrc(src)
  }, [src, priority])

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setIsError(true)
    setIsLoading(false)
    setSrc("/placeholder.svg") // Fallback image
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10">
          <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
        </div>
      )}

      <Image
        src={src_ || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes || (fill ? "100vw" : undefined)}
        quality={quality}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          fill && "object-cover",
          className,
        )}
        style={{
          objectFit,
          objectPosition,
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  )
}

