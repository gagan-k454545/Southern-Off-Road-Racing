"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Reduce animation work for low-powered devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (prefersReducedMotion || isMobile) {
      document.documentElement.classList.add("reduce-animation")
    }

    // Optimize image loading with native lazy loading
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img:not([loading="eager"])')
      images.forEach((img) => {
        img.setAttribute("loading", "lazy")
        // Add decoding async for better performance
        img.setAttribute("decoding", "async")
      })
    } else {
      // Fallback lazy loading for browsers that don't support native lazy loading
      const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('img:not([loading="eager"])')

        if ("IntersectionObserver" in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                if (img.dataset.src) {
                  img.src = img.dataset.src
                  img.removeAttribute("data-src")
                }
                imageObserver.unobserve(img)
              }
            })
          })

          lazyImages.forEach((img) => imageObserver.observe(img))
        }
      }

      window.addEventListener("load", lazyLoadImages)
      return () => window.removeEventListener("load", lazyLoadImages)
    }

    // Optimize scroll and resize events with requestAnimationFrame
    let scrollTimer: NodeJS.Timeout
    let resizeTimer: NodeJS.Timeout
    let lastScrollTop = 0
    let ticking = false

    const optimizeScroll = () => {
      const currentScrollTop = window.scrollY

      // Only process scroll events at a reasonable rate using requestAnimationFrame
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Determine scroll direction
          const isScrollingDown = currentScrollTop > lastScrollTop

          // Apply different optimizations based on scroll direction
          if (isScrollingDown) {
            document.documentElement.classList.add("is-scrolling-down")
            document.documentElement.classList.remove("is-scrolling-up")
          } else {
            document.documentElement.classList.add("is-scrolling-up")
            document.documentElement.classList.remove("is-scrolling-down")
          }

          // Update last scroll position
          lastScrollTop = currentScrollTop
          ticking = false
        })

        ticking = true
      }

      // Cancel any pending timers
      clearTimeout(scrollTimer)

      // Add a class to manage animations during scroll
      document.documentElement.classList.add("is-scrolling")

      // Set a timeout to remove the class after scrolling stops
      scrollTimer = setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling")
        document.documentElement.classList.remove("is-scrolling-up")
        document.documentElement.classList.remove("is-scrolling-down")
      }, 100) // Shorter timeout for smoother feel
    }

    const optimizeResize = () => {
      // Cancel any pending timers
      clearTimeout(resizeTimer)

      // Add a class to manage animations during resize
      document.documentElement.classList.add("is-resizing")

      // Set a timeout to remove the class after resizing stops
      resizeTimer = setTimeout(() => {
        document.documentElement.classList.remove("is-resizing")
      }, 150) // Shorter timeout for smoother feel
    }

    // Only add these listeners if we're in a browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", optimizeScroll, { passive: true })
      window.addEventListener("resize", optimizeResize, { passive: true })

      // Preload critical images for smoother experience
      const preloadCriticalImages = () => {
        const criticalImages = document.querySelectorAll('img[data-priority="true"]')
        criticalImages.forEach((img: HTMLImageElement) => {
          if (img.dataset.src) {
            const preloadLink = document.createElement("link")
            preloadLink.rel = "preload"
            preloadLink.as = "image"
            preloadLink.href = img.dataset.src
            document.head.appendChild(preloadLink)

            img.src = img.dataset.src
            img.removeAttribute("data-src")
          }
        })
      }

      // Run preload after initial render
      setTimeout(preloadCriticalImages, 100)
    }

    // Preconnect to critical domains
    const preconnectToDomains = () => {
      const domains = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com",
        "https://i.ibb.co",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ]

      domains.forEach((domain) => {
        if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
          const link = document.createElement("link")
          link.rel = "preconnect"
          link.href = domain
          link.crossOrigin = "anonymous"
          document.head.appendChild(link)
        }
      })
    }

    preconnectToDomains()

    // Add performance optimization CSS
    const style = document.createElement("style")
    style.textContent = `
      .reduce-animation * {
        animation-duration: 0.001ms !important;
        transition-duration: 0.001ms !important;
      }
      
      .is-scrolling .parallax-element {
        transition: transform 0.1s linear !important;
        will-change: transform;
      }
      
      .is-scrolling .animation-pause {
        animation-play-state: paused !important;
      }
      
      .is-scrolling-down .hide-on-scroll-down {
        transform: translateY(-100%);
        transition: transform 0.3s ease-out !important;
      }
      
      .is-scrolling-up .hide-on-scroll-down {
        transform: translateY(0);
        transition: transform 0.3s ease-out !important;
      }
      
      .is-resizing .resize-transition {
        transition: all 0.1s linear !important;
      }
      
      /* Optimize image rendering */
      img {
        will-change: transform, opacity;
        backface-visibility: hidden;
      }
      
      /* Optimize transitions */
      .smooth-transition {
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
      }

      /* Optimize touch targets for mobile */
      @media (max-width: 768px) {
        button, a, .touch-target {
          min-height: 44px;
          min-width: 44px;
        }
      }

      /* Optimize content visibility for better LCP */
      .optimize-lcp {
        content-visibility: auto;
        contain-intrinsic-size: 1px 1000px;
      }

      /* Optimize for mobile devices */
      @media (max-width: 768px) {
        .mobile-optimize {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      }
    `
    document.head.appendChild(style)

    // Add intersection observer for animations to improve performance
    const setupIntersectionObserver = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll")

      if ("IntersectionObserver" in window && animatedElements.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible")
                observer.unobserve(entry.target)
              }
            })
          },
          {
            rootMargin: "0px 0px -100px 0px",
            threshold: 0.1,
          },
        )

        animatedElements.forEach((el) => observer.observe(el))
      }
    }

    // Run after initial render
    setTimeout(setupIntersectionObserver, 200)

    // Clean up on unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", optimizeScroll)
        window.removeEventListener("resize", optimizeResize)
      }
      document.head.removeChild(style)
    }
  }, [])

  return null
}

