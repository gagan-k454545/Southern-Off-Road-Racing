"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Instagram } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import ParallaxSection from "@/components/parallax-section"
import Image from "next/image"
import PhotoGallery from "@/components/photo-gallery"
import { motion } from "framer-motion"
import EventModal from "@/components/event-modal"
import TestimonialSlider from "@/components/testimonial-slider"

// Import the Southern Offroad Challenge images
const southernOffroad = [
  "https://i.ibb.co/hxj6Gr6w/1.jpg",
  "https://i.ibb.co/0jbwPDMg/2.jpg",
  "https://i.ibb.co/fYWpp3WN/3.jpg",
  "https://i.ibb.co/TBb4Dvjt/4.jpg",
  "https://i.ibb.co/JFyB5vnN/5.jpg",
  "https://i.ibb.co/dsrqkc7x/6.jpg",
  "https://i.ibb.co/KzKTVdHg/7.jpg",
  "https://i.ibb.co/Mkrxv10T/8.jpg",
  "https://i.ibb.co/rGyGXbG5/9.jpg",
  "https://i.ibb.co/84dtpFry/10.jpg",
  "https://i.ibb.co/gLCWfH2m/11.jpg",
  "https://i.ibb.co/DHrYm0xz/12.jpg",
  "https://i.ibb.co/21DGtxwh/13.jpg",
  "https://i.ibb.co/MDGWcxXX/14.jpg",
  "https://i.ibb.co/r2FYzszm/15.jpg",
  "https://i.ibb.co/V0nf6YS6/16.jpg",
  "https://i.ibb.co/TDbNJDFF/17.jpg",
  "https://i.ibb.co/Nd62n7FF/18.jpg",
  "https://i.ibb.co/9kwqpkQZ/19.jpg",
  "https://i.ibb.co/tpktMXz1/20.jpg",
  "https://i.ibb.co/5WpfKfv1/21.jpg",
  "https://i.ibb.co/21dFQHTY/22.jpg",
  "https://i.ibb.co/3mfdMsk4/23.jpg",
  "https://i.ibb.co/LzSX8dF0/24.jpg",
  "https://i.ibb.co/rKf41yZ4/25.jpg",
  "https://i.ibb.co/YFkrzXfN/26.jpg",
  "https://i.ibb.co/VYWfZ08C/27.jpg",
  "https://i.ibb.co/d03dSxX6/28.jpg",
  "https://i.ibb.co/ZR2G81Pd/29.jpg",
  "https://i.ibb.co/Z60h44D8/30.jpg",
]

export default function Home() {
  // Hero slider images - updated with the new off-road action images
  const heroImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo70.jpg-y4ROXfx7YVKECW9dbKaC9EkrvGX9GI.jpeg", // White Jeep in mud
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo83.jpg-X1D7PoymFRP0AqH6Ko9Jd2K3V1CRqh.jpeg", // Yellow Jeep in mud
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo6.jpg-7s6bjfTJhTDFOztGvxW9wajEbdrql2.jpeg", // Rambo vehicle climbing
  ]

  // Gallery state
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    photos: [] as { src: string; alt: string }[],
    initialIndex: 0,
  })

  // Southern Offroad Challenge photos
  const [southernOffroadPhotos, setSouthernOffroadPhotos] = useState<{ src: string; alt: string }[]>([
    { src: southernOffroad[0], alt: "Southern Offroad Challenge" },
  ])

  // Monsoon Mudventure photos - will show all 24 images
  const [mudventurePhotos, setMudventurePhotos] = useState<{ src: string; alt: string }[]>([
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04255.jpg-uTburtkg1Pm2MdhAR0bfU3aAszHwMw.jpeg",
      alt: "Monsoon Mudventure Somwerpet",
    },
  ])

  // Camp in experience coorg & Sakleshpur photos - will show all 17 images
  const [campExperiencePhotos, setCampExperiencePhotos] = useState<{ src: string; alt: string }[]>([
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04247.jpg-5ymHt094ixWDuK3F9qe8O7E3dwrfbk.jpeg",
      alt: "Camp in experience coorg & Sakleshpur",
    },
  ])

  // Load all photos from the folders
  useEffect(() => {
    // Load Southern Offroad Challenge photos
    const southernPhotos = southernOffroad.map((src, i) => ({
      src,
      alt: `Southern Offroad Challenge - Photo ${i + 1}`,
    }))
    setSouthernOffroadPhotos(southernPhotos)

    // Load Monsoon Mudventure photos with the correct images
    const mudventureImages = [
      "https://i.ibb.co/N68WQ4HQ/1.jpg",
      "https://i.ibb.co/ds4gwwdX/2.jpg",
      "https://i.ibb.co/ds4gwwdX/2.jpg",
      "https://i.ibb.co/Fb1BTwTW/4.jpg",
      "https://i.ibb.co/pjL6PLfG/5.jpg",
      "https://i.ibb.co/HfsW3RMV/6.jpg",
      "https://i.ibb.co/RkQymJkH/7.jpg",
      "https://i.ibb.co/YB3hMp52/8.jpg",
      "https://i.ibb.co/MkZyhwJ0/9.jpg",
      "https://i.ibb.co/rfyffFqx/10.jpg",
      "https://i.ibb.co/PvJP3LSH/11.jpg",
      "https://i.ibb.co/dSrZWqH/12.jpg",
      "https://i.ibb.co/QjcpT9cG/13.jpg",
      "https://i.ibb.co/60ykR6g2/14.jpg",
      "https://i.ibb.co/p6yJnp00/15.jpg",
      "https://i.ibb.co/HTk8N584/16.jpg",
      "https://i.ibb.co/wZtwrT6Y/17.jpg",
      "https://i.ibb.co/R4bRq5Vc/18.jpg",
      "https://i.ibb.co/ZzrT8Nhh/19.jpg",
      "https://i.ibb.co/TMyLWVyF/20.jpg",
      "https://i.ibb.co/9kWgCVBt/21.jpg",
      "https://i.ibb.co/LdzFRzX1/22.jpg",
      "https://i.ibb.co/JwnvFZd3/23.jpg",
      "https://i.ibb.co/99WYKT3L/24.jpg",
    ].map((src, i) => ({
      src,
      alt: `Monsoon Mudventure Somwerpet - Photo ${i + 1}`,
    }))
    setMudventurePhotos(mudventureImages)

    // Load Camp Experience photos with the correct images
    const campExperienceImages = [
      "https://i.ibb.co/d4zks8wN/1.jpg",
      "https://i.ibb.co/XkkDdVRg/2.jpg",
      "https://i.ibb.co/wFjDDMX8/3.jpg",
      "https://i.ibb.co/Pd0Dy5Z/4.jpg",
      "https://i.ibb.co/yMCyBm9/5.jpg",
      "https://i.ibb.co/svmKYnXm/6.jpg",
      "https://i.ibb.co/gbSWf66Z/7.jpg",
      "https://i.ibb.co/F4W99yWf/8.jpg",
      "https://i.ibb.co/ZRFxfKwN/9.jpg",
      "https://i.ibb.co/XxfH82w3/10.jpg",
      "https://i.ibb.co/q34pngzj/11.jpg",
      "https://i.ibb.co/8nCNw8m3/12.jpg",
      "https://i.ibb.co/8LcCqP3d/13.jpg",
      "https://i.ibb.co/wZQx6xkk/14.jpg",
      "https://i.ibb.co/xKvyXx7Q/15.jpg",
      "https://i.ibb.co/V02LW2kn/16.jpg",
      "https://i.ibb.co/wZsNqmnG/17.jpg",
      "https://i.ibb.co/35BQtjNj/18.jpg",
      "https://i.ibb.co/vvvWVX3X/19.jpg",
      "https://i.ibb.co/F4TDyTnN/20.jpg",
      "https://i.ibb.co/PGqXpthq/21.jpg",
      "https://i.ibb.co/jv1ynbXh/22.jpg",
      "https://i.ibb.co/SX4vKmyX/23.jpg",
      "https://i.ibb.co/yFdNyFrF/24.jpg",
      "https://i.ibb.co/6cw3STVg/25.jpg",
      "https://i.ibb.co/xqXR3n5j/26.jpg",
    ].map((src, i) => ({
      src,
      alt: `Camp in experience coorg & Sakleshpur - Photo ${i + 1}`,
    }))
    setCampExperiencePhotos(campExperienceImages)
  }, [])

  const openGallery = useCallback((photos: { src: string; alt: string }[], initialIndex = 0) => {
    setGalleryState({
      isOpen: true,
      photos,
      initialIndex,
    })
  }, [])

  const closeGallery = useCallback(() => {
    setGalleryState({
      ...galleryState,
      isOpen: false,
    })
  }, [galleryState])

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")
        if (targetId) {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  // Sample video URLs (replace with your actual videos)
  const saklesphurVideoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  const coorgVideoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

  // Modal state
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: "",
    imageUrl: "",
    videoUrl: "",
    description: "",
  })

  const openModal = (content: Omit<typeof modalContent, "isOpen">) => {
    setModalContent({ ...content, isOpen: true })
  }

  const closeModal = () => {
    setModalContent({ ...modalContent, isOpen: false })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <section className="relative w-full h-[500px] md:h-[700px] hero-section">
        <HeroSlider images={heroImages} interval="4000">
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <AnimatedText animation="fade-up" delay={0}>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Adventure Awaits</h1>
                </AnimatedText>

                <AnimatedText animation="fade-up" delay={200}>
                  <p className="text-xl mb-8 text-white/90">Experience India's premier off-road expeditions</p>
                </AnimatedText>

                <AnimatedText animation="fade-up" delay={400}>
                  <a href="#events" className="inline-block">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md group transition-all duration-300 transform hover:translate-x-2">
                      Explore Our Events
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>
        </HeroSlider>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <SectionHeading title="About Us" underlineColor="bg-red-600" />

          <AnimatedText animation="fade-up" delay={200}>
            <p className="text-lg mb-8 leading-relaxed text-gray-800">
              Southern Experience India is a premier event management company specializing in motorsports, off-roading,
              expeditions, and adventure experiences. With a passion for extreme driving and outdoor challenges, we
              curate high-adrenaline events that test skill, endurance, and machine capability across some of India's
              most rugged terrains.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Explore Our Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Explore Our Events" underlineColor="bg-red-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Southern offroad challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <Link href="/southern-offroad-challenge">
                  <div className="relative h-64 overflow-hidden cursor-pointer">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Southern%20Offroad%20Challenge.jpg-aXejaDYKXn65nnTAxMVZCAcKnIovfZ.jpeg"
                      alt="Southern offroad challenge"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-4">Southern Offroad Challenge</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Experience the thrill of our Southern Offroad Challenge 1 and 2! Join us for the most
                    adrenaline-pumping off-road competition with challenging obstacles and intense battles.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                      onClick={() => openGallery(southernOffroadPhotos)}
                    >
                      View Gallery
                    </Button>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSeNfi_VcijRKvotkZml3AIZVO3OEo2radxxTLv8wvVeFfrrTw/viewform?usp=sharing",
                          "_blank",
                        )
                      }
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Monsoon mudventure Somwerpet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <Link href="/signature-events#mudventure">
                  <div className="relative h-64 overflow-hidden cursor-pointer">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsoon%20Mudventure%20Somwerpet.jpg-lA2ybzmSy8Ki4E8SFc2kuk4PlC4mG4.jpeg"
                      alt="Monsoon mudventure Somwerpet"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-4">Monsoon Mudventure Somwerpet</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Experience the thrill of monsoon off-roading in Somwerpet. Navigate through challenging muddy
                    terrain and enjoy the lush green landscapes of the Western Ghats.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() => openGallery(mudventurePhotos)}
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Camp in experience coorg & Sakleshpur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <Link href="/signature-events#camp-experience">
                  <div className="relative h-64 overflow-hidden cursor-pointer">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg"
                      alt="Camp in experience coorg & Sakleshpur"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-4">Camp in experience coorg & Sakleshpur</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Immerse yourself in nature with our camp-in experience at Coorg and Sakleshpur. Enjoy off-road
                    driving during the day and comfortable camping at night in these beautiful regions.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                    onClick={() => openGallery(campExperiencePhotos)}
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-20IKjqyF95gFj2demDznHTf2htqXBn.jpeg"
        height="h-[400px]"
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <AnimatedText animation="zoom-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience The Ultimate Off-Road Adventure</h2>
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={200}>
              <p className="text-lg mb-6">Join us for thrilling expeditions across India's most challenging terrains</p>
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={400}>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-md transform transition-all duration-300 hover:scale-105">
                <Link href="/southern-offroad-challenge">View Upcoming Events</Link>
              </Button>
            </AnimatedText>
          </div>
        </div>
      </ParallaxSection>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Experience The Thrill" underlineColor="bg-red-600" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <>
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04255.jpg-uTburtkg1Pm2MdhAR0bfU3aAszHwMw.jpeg"
                  alt="Off-road vehicle crossing water"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  onLoad={(e) => {
                    // Remove animation once image is loaded
                    const target = e.target as HTMLImageElement
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector(".animate-pulse")
                      if (loadingDiv) loadingDiv.classList.add("opacity-0")
                    }
                  }}
                />
              </>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <>
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04247.jpg-5ymHt094ixWDuK3F9qe8O7E3dwrfbk.jpeg"
                  alt="SUV crossing river"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  onLoad={(e) => {
                    // Remove animation once image is loaded
                    const target = e.target as HTMLImageElement
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector(".animate-pulse")
                      if (loadingDiv) loadingDiv.classList.add("opacity-0")
                    }
                  }}
                />
              </>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <>
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04261.jpg-tlaxOOzd10QNKc9cdPzJS2Zflndl8J.jpeg"
                  alt="Jeep crossing water"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  onLoad={(e) => {
                    // Remove animation once image is loaded
                    const target = e.target as HTMLImageElement
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector(".animate-pulse")
                      if (loadingDiv) loadingDiv.classList.add("opacity-0")
                    }
                  }}
                />
              </>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <>
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RIC04286.jpg-6wRV8B8sWHZt0lXkMr02xWMVy1UjYf.jpeg"
                  alt="Jeep in night water crossing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  onLoad={(e) => {
                    // Remove animation once image is loaded
                    const target = e.target as HTMLImageElement
                    if (target.parentElement) {
                      const loadingDiv = target.parentElement.querySelector(".animate-pulse")
                      if (loadingDiv) loadingDiv.classList.add("opacity-0")
                    }
                  }}
                />
              </>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50 optimize-rendering">
        <div className="container mx-auto">
          <SectionHeading title="Testimonials" underlineColor="bg-red-600" />
          <TestimonialSlider />
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 px-4 bg-white optimize-rendering">
        <div className="container mx-auto">
          <SectionHeading title="Our Partners" underlineColor="bg-red-600" />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* MOTUL */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250326-WA0015.jpg-pfpEvbY3HhOGkSueeClyBWOQoYeFet.jpeg"
                alt="MOTUL"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* BMC Air Filter */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250326-WA0017.jpg-WWAiyQo2HxYG315QVm1kNNgJNG0vCs.jpeg"
                alt="BMC Air Filter"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* IRD */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand%201.jpg-L3aasK5PIiMKFfH2aUkqyxAPl4nhHd.jpeg"
                alt="IRD"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* Apollo Tyres */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250326-WA0016.jpg-l82DYZsqf8YwN03Y7X8QiDzlCJG3Nm.jpeg"
                alt="Apollo Tyres"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* Poptopia */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand%202.jpg-b3k1AEicpcSsW7IyKFjfQvED7FtVhU.jpeg"
                alt="Poptopia"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* JK Tyre */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250326-WA0018.jpg-bI0IAhTlBDgX8ILpee2o6tK8r1Ngiz.jpeg"
                alt="JK Tyre"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>

            {/* HELLA */}
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250326-WA0019.jpg-JnBvg6jT8KHqnofyPlLgGFfq95MdIe.jpeg"
                alt="HELLA"
                width={200}
                height={100}
                className="object-contain h-16 md:h-20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Brand Philosophy" underlineColor="bg-red-600" />

          <div className="text-center">
            <AnimatedText animation="fade-up" delay={0}>
              <p className="text-lg mb-4 leading-relaxed text-gray-800">
                Southern Experience India embodies the spirit of adventure and exploration, bringing together motorsport
                enthusiasts and thrill-seekers.
              </p>
            </AnimatedText>

            <AnimatedText animation="fade-up" delay={200}>
              <p className="text-lg mb-4 leading-relaxed text-gray-800">
                Our philosophy centers on creating memorable experiences that challenge participants while ensuring
                safety and environmental responsibility.
              </p>
            </AnimatedText>

            <AnimatedText animation="fade-up" delay={400}>
              <p className="text-lg leading-relaxed text-gray-800">
                We believe in pushing boundaries, fostering community, and showcasing the incredible diversity of
                India's landscapes through our events.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Stay updated with the latest events, behind-the-scenes content, and off-road adventures.
            </p>
            <a
              href="https://www.instagram.com/southern_offroader?igsh=MTJ5cDA4dTdicXFnbw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              @southern_offroader
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto text-center">
          <AnimatedText animation="zoom-in">
            <h2 className="text-3xl font-bold mb-4">Ready for your next adventure?</h2>
          </AnimatedText>

          <AnimatedText animation="fade-up" delay={200}>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Join us for an unforgettable experience on one of our upcoming expeditions.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={400}>
            <Button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-6 text-lg rounded-md transform transition-all duration-300 hover:scale-105">
              <Link href="/southern-offroad-challenge">Join Our Next Event</Link>
            </Button>
          </AnimatedText>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        imageUrl={modalContent.imageUrl}
        videoUrl={modalContent.videoUrl}
        description={modalContent.description}
      />

      {/* Photo Gallery */}
      <PhotoGallery
        isOpen={galleryState.isOpen}
        onClose={closeGallery}
        photos={galleryState.photos}
        initialIndex={galleryState.initialIndex}
      />
    </div>
  )
}

