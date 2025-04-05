"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  imageUrl?: string
  videoUrl?: string
  description?: string
}

export default function EventModal({ isOpen, onClose, title, imageUrl, videoUrl, description }: EventModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setIsMounted(true)

    // Reset loading state when modal opens
    if (isOpen) {
      setIsLoading(true)

      // Lock body scroll
      document.body.style.overflow = "hidden"

      // Handle back button (mobile)
      const handlePopState = () => {
        onClose()
      }

      window.addEventListener("popstate", handlePopState)

      // Add history entry when opening modal (mobile)
      if (isMobile) {
        window.history.pushState({ modal: true }, "")
      }

      return () => {
        window.removeEventListener("popstate", handlePopState)
      }
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose, isMobile])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isMounted) return null
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overscroll-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-lg bg-white shadow-lg max-h-[90vh] overflow-auto hardware-accelerated"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <div className="p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4 pr-8">{title}</h2>

          {imageUrl && (
            <div className="relative mb-4 w-full aspect-video overflow-hidden rounded-lg">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-amber-500 animate-spin"></div>
                </div>
              )}
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
                onLoad={() => setIsLoading(false)}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {videoUrl && (
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-black">
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
                onLoadedData={() => setIsLoading(false)}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {description && (
            <div className="prose max-w-none text-sm md:text-base">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

