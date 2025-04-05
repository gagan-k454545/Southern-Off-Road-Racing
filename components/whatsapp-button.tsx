"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Show button after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Show button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Link
        href="https://wa.me/917760556117"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-500",
          "hover:scale-110",
          isVisible || hasScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0",
        )}
        style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative w-16 h-16 drop-shadow-lg">
          <Image src="/images/whatsapp-logo.png" alt="WhatsApp" fill className="object-contain" sizes="64px" />
        </div>
      </Link>

      {/* Attribution - hidden visually but present for proper attribution */}
      <div className="sr-only">
        <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">
          Whatsapp icons created by Ruslan Babkin - Flaticon
        </a>
      </div>
    </>
  )
}

