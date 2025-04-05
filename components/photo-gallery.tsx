"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  src: string
  alt: string
}

interface PhotoGalleryProps {
  isOpen: boolean
  onClose: () => void
  photos: Photo[]
  initialIndex?: number
}

export default function PhotoGallery(props: PhotoGalleryProps) {
  // Destructure props at the top level to avoid nested destructuring
  const isOpen = props.isOpen
  const onClose = props.onClose
  const photos = props.photos || []
  const initialIndex = props.initialIndex || 0

  // State
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState("grid")

  // Set initial index when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)

      // Lock body scroll
      document.body.style.overflow = "hidden"

      // Handle back button
      function handlePopState() {
        onClose()
      }

      window.addEventListener("popstate", handlePopState)
      window.history.pushState({ gallery: true }, "")

      return () => {
        window.removeEventListener("popstate", handlePopState)
      }
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, initialIndex, onClose])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        goToNext()
      } else if (event.key === "Escape") {
        onClose()
      } else if (event.key === "g") {
        toggleViewMode()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Navigation functions
  function goToPrevious() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return photos.length - 1
      }
      return prevIndex - 1
    })
  }

  function goToNext() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === photos.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }

  function toggleViewMode() {
    setViewMode((current) => (current === "grid" ? "single" : "grid"))
  }

  // If not open or no photos, don't render anything
  if (!isOpen || photos.length === 0) {
    return null
  }

  // Render gallery
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-3 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white font-medium">
          {viewMode === "single" ? (photos[currentIndex] ? photos[currentIndex].alt : "") : "Gallery"}
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={toggleViewMode} className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
            {viewMode === "single" ? "Grid" : "Single"}
          </button>

          <button onClick={onClose} className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "single" ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="relative h-screen w-screen flex items-center justify-center p-8">
            {photos[currentIndex] && (
              <Image
                src={photos[currentIndex].src || "/placeholder.svg"}
                alt={photos[currentIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white hover:bg-black/50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white hover:bg-black/50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full pt-14 pb-4 px-2 overflow-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setViewMode("single")
                }}
                className={`relative aspect-square overflow-hidden cursor-pointer border-2 ${
                  index === currentIndex ? "border-red-600" : "border-transparent"
                }`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

