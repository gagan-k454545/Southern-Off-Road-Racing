"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import PhotoGallery from "./photo-gallery"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Grid, Loader2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Photo {
  src: string
  alt: string
}

interface EventGalleryProps {
  title: string
  photos: Photo[]
}

export default function EventGallery({ title, photos }: EventGalleryProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [initialIndex, setInitialIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({})
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Open the gallery at specific index
  const openGallery = (index: number) => {
    setInitialIndex(index)
    setIsGalleryOpen(true)
  }

  // Check if we can scroll and update state
  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setScrollPosition(scrollLeft)
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Initialize and attach listeners
  useEffect(() => {
    checkScrollability()
    window.addEventListener("resize", checkScrollability)

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollability)
    }

    // Set loading state
    if (photos.length > 0) {
      setIsLoading(true)
      // Simulate minimum loading time for better UX
      const timer = setTimeout(() => {
        if (Object.keys(imagesLoaded).length > 0) {
          setIsLoading(false)
        }
      }, 800)
      return () => clearTimeout(timer)
    }

    return () => {
      window.removeEventListener("resize", checkScrollability)
      if (container) {
        container.removeEventListener("scroll", checkScrollability)
      }
    }
  }, [photos])

  // Handle scroll buttons
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current
      const scrollAmount = Math.max(clientWidth * 0.75, 250)
      const newPosition =
        direction === "left" ? Math.max(scrollPosition - scrollAmount, 0) : scrollPosition + scrollAmount

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }
  }

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = { ...prev, [index]: true }
      // Check if all visible images are loaded
      if (Object.keys(newState).length >= Math.min(photos.length, 6)) {
        setIsLoading(false)
      }
      return newState
    })
  }

  // Show a grid preview of images
  const renderGridPreview = () => {
    // Show only first 6 images in preview
    const previewPhotos = photos.slice(0, 6)
    const remainingCount = photos.length - previewPhotos.length

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
        {previewPhotos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.03]"
            onClick={() => openGallery(index)}
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <>
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <div className="w-6 h-6 border-3 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  imagesLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                loading="lazy"
              />
            </>
            {index === previewPhotos.length - 1 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{remainingCount} more</span>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 bg-white p-4 md:p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-medium text-indigo-900">{title}</h3>
        <Button
          variant="outline"
          size={isMobile ? "sm" : "default"}
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors flex items-center gap-1"
          onClick={() => openGallery(0)}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="hidden sm:inline">Loading...</span>
            </>
          ) : (
            <>
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline">View All</span>
            </>
          )}
        </Button>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-red-600 animate-spin mb-2" />
            <p className="text-sm text-gray-500">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Mobile-friendly grid preview */}
      {!isLoading && isMobile ? (
        renderGridPreview()
      ) : (
        <div className={`relative ${isLoading ? "hidden" : "block"}`}>
          {/* Left scroll button - only show if we can scroll left */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-indigo-900" />
            </button>
          )}

          {/* Gallery container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto pb-1 gap-2 no-scrollbar snap-x scroll-px-4"
            style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
          >
            <style jsx global>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {photos.map((photo, index) => (
              <div
                key={index}
                className="flex-none w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-md overflow-hidden cursor-pointer snap-start transform transition-transform duration-300 hover:scale-[1.03]"
                onClick={() => openGallery(index)}
              >
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <>
                  {!imagesLoaded[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                      <div className="w-8 h-8 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className={`object-cover transition-opacity duration-500 ease-in-out ${
                      imagesLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                    loading="lazy"
                  />
                </>
              </div>
            ))}
          </div>

          {/* Right scroll button - only show if we can scroll right */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-indigo-900" />
            </button>
          )}
        </div>
      )}

      {/* Photo Gallery Modal */}
      <PhotoGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        photos={photos}
        initialIndex={initialIndex}
      />
    </div>
  )
}

