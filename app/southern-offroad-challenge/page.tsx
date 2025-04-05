"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import EventModal from "@/components/event-modal"
import { motion } from "framer-motion"
import { Instagram, Loader2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import PhotoGallery from "@/components/photo-gallery"

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

export default function SouthernOffroadChallenge() {
  // Modal state
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean
    title: string
    imageUrl?: string
    videoUrl?: string
    description?: string
  }>({
    isOpen: false,
    title: "",
  })

  // Loading state
  const [isLoading, setIsLoading] = useState(true)

  // Load all photos from the Southern Offroad Challenge folder
  const [southernOffroadPhotos, setSouthernOffroadPhotos] = useState<{ src: string; alt: string }[]>([
    { src: southernOffroad[0], alt: "Southern Offroad Challenge" },
  ])

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Add the galleryState if it doesn't exist
  // Add this near the other state declarations:
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    photos: [] as { src: string; alt: string }[],
    initialIndex: 0,
  })

  // Load additional photos from the folder
  useEffect(() => {
    // Load Southern Offroad Challenge photos
    const southernPhotos = southernOffroad.map((src, i) => ({
      src,
      alt: `Southern Offroad Challenge - Photo ${i + 1}`,
    }))
    setSouthernOffroadPhotos(southernPhotos)

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const openModal = (content: Omit<typeof modalContent, "isOpen">) => {
    setModalContent({ ...content, isOpen: true })
  }

  const closeModal = () => {
    setModalContent({ ...modalContent, isOpen: false })
  }

  // Also add the openGallery function if it doesn't exist
  // Add this near the other state functions if it doesn't exist:
  const openGallery = useCallback((photos: { src: string; alt: string }[], initialIndex = 0) => {
    setGalleryState({
      isOpen: true,
      photos,
      initialIndex,
    })
  }, [])

  // Add the closeGallery function if it doesn't exist
  const closeGallery = useCallback(() => {
    setGalleryState({
      ...galleryState,
      isOpen: false,
    })
  }, [galleryState])

  // Animation variants (simplified for better performance)
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-white justify-center items-center">
        <Loader2 className="h-12 w-12 text-red-600 animate-spin mb-4" />
        <p className="text-gray-600">Loading Southern Offroad Challenge...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[250px] md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Southern%20Offroad%20Challenge.jpg-aXejaDYKXn65nnTAxMVZCAcKnIovfZ.jpeg"
          alt="Southern Offroad Challenge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-900/50 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SOUTHERN OFFROAD CHALLENGE
            <span className="block text-lg md:text-2xl mt-2 font-normal text-white">Season 1 & 2</span>
          </motion.h1>
        </div>
      </div>

      {/* Season 3 Announcement */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Southern Offroad Challenge – Season 3 is Here!
              </motion.h2>
              <motion.p
                className="text-lg mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Get ready for the most thrilling offroad action! Southern Offroad Challenge – Season 3 kicks off on June
                7 & 8, 2025!
              </motion.p>
              <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                After two successful seasons, we're bringing back the adrenaline-pumping competition, tougher obstacles,
                and even more intense offroad battles!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSeNfi_VcijRKvotkZml3AIZVO3OEo2radxxTLv8wvVeFfrrTw/viewform?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  Register Now
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-23%20at%2023.40.38_2eec3363.jpg-Iwew37YvkVgoFYhSgtnEzv5fQSaiKa.jpeg"
                alt="Southern Offroad Challenge Season 3"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="mb-8 md:mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
              Experience the ultimate off-road adventure with our Southern Offroad Challenge. Now in its second season,
              this premier event tests the skills and endurance of off-road enthusiasts across challenging terrains.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-l-4 border-red-600 pl-4">
                About the Challenge
              </h2>
              <p className="mb-4 text-gray-700">
                The Southern Offroad Challenge is our flagship competition that brings together off-road enthusiasts
                from across the region. Participants navigate through custom-designed obstacles and trails that push
                both vehicles and drivers to their limits.
              </p>
              <p className="text-gray-700">
                From muddy terrain and steep inclines to water crossings, this challenge offers a comprehensive test of
                skill, strategy, and vehicle capability in a competitive yet friendly environment.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-l-4 border-red-600 pl-4">
                Event Highlights
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Custom-designed obstacles and challenging trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Multiple vehicle categories for different skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Professional safety measures and support staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Exciting prizes and recognition for winners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Networking opportunities with fellow off-road enthusiasts</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Registration Section */}
          <motion.div
            className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-sm overflow-hidden text-white p-6 md:p-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Join the Next Challenge</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Ready to test your off-road skills? Register now for the upcoming Southern Offroad Challenge and be part
                of this thrilling adventure. Limited spots available!
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  size={isMobile ? "default" : "lg"}
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSeNfi_VcijRKvotkZml3AIZVO3OEo2radxxTLv8wvVeFfrrTw/viewform?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  Register Now
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Gallery Section */}
          <motion.div
            className="mt-10 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800">Event Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {southernOffroadPhotos.slice(0, 8).map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    openModal({
                      title: "Southern Offroad Challenge",
                      imageUrl: photo.src,
                      description:
                        "Experience the thrill of our Southern Offroad Challenge events featuring challenging obstacles and intense off-road battles.",
                    })
                  }
                >
                  <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                onClick={() => openGallery(southernOffroadPhotos, 0)}
              >
                View Full Gallery
              </Button>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="mt-10 md:mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-800 text-center">
              What Participants Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm relative transform transition-all duration-300 hover:shadow-md"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  "
                </div>
                <p className="text-gray-700 italic mb-6 pt-4 text-sm md:text-base">
                  "The Southern Offroad Challenge was an incredible experience! The obstacles were challenging but fun,
                  and the organization was top-notch. Can't wait for the next season!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full mr-4"></div>
                  <h3 className="font-bold text-sm md:text-base">Rahul Sharma</h3>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm relative transform transition-all duration-300 hover:shadow-md"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  "
                </div>
                <p className="text-gray-700 italic mb-6 pt-4 text-sm md:text-base">
                  "As a first-time participant, I was amazed by how welcoming everyone was. The event pushed my driving
                  skills to the limit while ensuring safety throughout. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full mr-4"></div>
                  <h3 className="font-bold text-sm md:text-base">Priya Patel</h3>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm relative transform transition-all duration-300 hover:shadow-md"
                variants={fadeIn}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                  "
                </div>
                <p className="text-gray-700 italic mb-6 pt-4 text-sm md:text-base">
                  "The Southern Offroad Challenge is more than just a competition—it's a community. Made great friends
                  and memories while testing my vehicle's capabilities. Looking forward to Season 3!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full mr-4"></div>
                  <h3 className="font-bold text-sm md:text-base">Vikram Singh</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Follow Us Section */}
          <motion.div
            className="mt-10 md:mt-16 text-center bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Follow Us on Instagram</h2>
            <p className="mb-6 text-gray-700">
              Stay updated with the latest news, event announcements, and behind-the-scenes content.
            </p>
            <a
              href="https://www.instagram.com/southern_offroader?igsh=MTJ5cDA4dTdicXFnbw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              @southern_offroader
            </a>
          </motion.div>
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

