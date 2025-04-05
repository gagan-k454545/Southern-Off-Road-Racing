"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Home, Phone, Mail } from "lucide-react"
import Logo from "./logo"
import { useState, useEffect, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollThreshold = isMobile ? 10 : 50
    const currentScrollY = window.scrollY

    // Hide header on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    // Change header style when scrolled
    if (currentScrollY > scrollThreshold) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    setLastScrollY(currentScrollY)
  }, [isMobile, lastScrollY])

  // Throttled scroll event listener for better performance
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [handleScroll])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "w-full sticky z-50 transition-all duration-300 hardware-accelerated",
        isScrolled ? "bg-white shadow-md backdrop-blur-md py-1" : "bg-white py-2",
        isVisible ? "top-0" : "-top-full",
      )}
    >
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-1 px-2 md:px-4 flex flex-wrap justify-between items-center text-xs">
        <div className="flex items-center space-x-4">
          <a href="tel:+917760556117" className="flex items-center hover:text-amber-300 transition-colors">
            <Phone className="h-3 w-3 mr-1" />
            <span className="hidden md:inline">+91 77605 56117</span>
          </a>
          <a
            href="mailto:Southernexperienceindia@gmail.com"
            className="hidden md:flex items-center hover:text-amber-300 transition-colors"
          >
            <Mail className="h-3 w-3 mr-1" />
            <span>Southernexperienceindia@gmail.com</span>
          </a>
        </div>
        <div className="flex space-x-2 ml-auto">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-amber-300 transition-colors touch-target flex items-center justify-center"
          >
            <Facebook className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
          <Link
            href="https://www.instagram.com/southern_offroader?igsh=MTJ5cDA4dTdicXFnbw%3D%3D&utm_source=qr"
            aria-label="Instagram"
            className="hover:text-amber-300 transition-colors touch-target flex items-center justify-center"
          >
            <Instagram className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-amber-300 transition-colors touch-target flex items-center justify-center"
          >
            <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-amber-300 transition-colors touch-target flex items-center justify-center"
          >
            <Twitter className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="transition-all duration-300 relative z-10 transform hover:translate-y-[-2px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500/5 via-amber-500/5 to-red-500/5 rounded-lg blur-md"></div>
            <Logo />
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 touch-target menu-toggle focus:outline-none relative z-60"
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1",
                )}
              ></span>
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-gray-800 top-3 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100",
                )}
              ></span>
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5",
                )}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6 text-sm uppercase font-medium">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "relative py-2 px-1 hover:text-red-600 transition-colors group flex items-center",
                    pathname === "/" && "text-red-600",
                  )}
                >
                  <Home className="h-4 w-4 mr-1" />
                  Home
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      pathname === "/" ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/southern-offroad-challenge"
                  className={cn(
                    "relative py-2 px-1 hover:text-red-600 transition-colors group",
                    pathname === "/southern-offroad-challenge" && "text-red-600",
                  )}
                >
                  Southern Offroad Challenge
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      pathname === "/southern-offroad-challenge" ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/customised-events"
                  className={cn(
                    "relative py-2 px-1 hover:text-red-600 transition-colors group",
                    pathname === "/customised-events" && "text-red-600",
                  )}
                >
                  Customised Events
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      pathname === "/customised-events" ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={cn(
                    "relative py-2 px-1 hover:text-red-600 transition-colors group",
                    pathname === "/about-us" && "text-red-600",
                  )}
                >
                  About Us
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      pathname === "/about-us" ? "w-full" : "w-0",
                    )}
                  ></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={cn(
          "md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] border-b border-gray-200" : "max-h-0",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-between items-center p-4 bg-red-50">
          <Link href="/" className="flex items-center text-red-600" onClick={() => setIsMobileMenuOpen(false)}>
            <Home className="h-5 w-5 mr-2" />
            <span className="font-medium">HOME</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-red-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-4">
          <ul className="flex flex-col space-y-0 text-sm uppercase font-medium border-t border-gray-100">
            <li className="border-b border-gray-100">
              <Link
                href="/southern-offroad-challenge"
                className={cn(
                  "block py-4 px-2 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors touch-target",
                  pathname === "/southern-offroad-challenge" && "text-red-600 bg-red-50",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Southern Offroad Challenge
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <Link
                href="/customised-events"
                className={cn(
                  "block py-4 px-2 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors touch-target",
                  pathname === "/customised-events" && "text-red-600 bg-red-50",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customised Events
              </Link>
            </li>
            <li className="border-b border-gray-100">
              <Link
                href="/about-us"
                className={cn(
                  "block py-4 px-2 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors touch-target",
                  pathname === "/about-us" && "text-red-600 bg-red-50",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-gray-800">Contact Us</h3>
              <a
                href="tel:+917760556117"
                className="flex items-center py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2 text-red-600" />
                +91 77605 56117
              </a>
              <a
                href="mailto:Southernexperienceindia@gmail.com"
                className="flex items-center py-2 text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-4 w-4 mr-2 text-red-600" />
                Southernexperienceindia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

