"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  name: string
  avatar: string
}

export default function TestimonialSlider() {
  // Testimonial data with avatar images
  const testimonials: Testimonial[] = [
    {
      quote:
        "Experience and excitement beyond our expectations. At 60 years, it was my first off-roading, Adarsh and his team made our off-roading a Life Time Experience. Meena and I thank them for that.",
      name: "Raveen",
      avatar: "/placeholder.svg?height=100&width=100&text=R",
    },
    {
      quote:
        "Had a great time with southern experience enjoyed it a lot. Adarsh had arranged things to good. Had a wonderful weekend with memories.",
      name: "Sujay S Reddy",
      avatar: "/placeholder.svg?height=100&width=100&text=S",
    },
    {
      quote: "Thank you for the wonderful hosting and experience!! Our team thoroughly enjoyed your hospitality.😊",
      name: "Narasimha",
      avatar: "/placeholder.svg?height=100&width=100&text=N",
    },
    {
      quote:
        "Hi Adarsh. Thank you and team for organising this so well. The experience was thrilling. Look forward to future events.",
      name: "Alpha Kumar",
      avatar: "/placeholder.svg?height=100&width=100&text=A",
    },
    {
      quote:
        "Thanks Adarsh for conducting such a event. It was a wonderful experience for me and my vehicle. Enjoyed the company of all the co participants. Thanks again.",
      name: "Anoop Kumar",
      avatar: "/placeholder.svg?height=100&width=100&text=A",
    },
    {
      quote:
        "It was amazing, this was my first ever experience and you and your team were thoroughly professional and got the things done timely and as per commitment. Travelling with family thought could be tricky but even they enjoyed every part of it. Kudos to you and your team.👍",
      name: "Ranjith",
      avatar: "/placeholder.svg?height=100&width=100&text=R",
    },
    {
      quote:
        "We went on the Delhi – Leh – Srinagar trip with Southern Experience as a pre 50th B'day party. Apart from the views and terrain that nature turned on. The team at Southern Experience turned on a superb display of efficiency, safety and hospitality to make the trip truly memorable.",
      name: "Arun Kapur",
      avatar: "/placeholder.svg?height=100&width=100&text=A",
    },
    {
      quote:
        "A few years ago my friend and I went for a Rally through Rajasthan organized by Southern Experience. I must say without hesitation, that their planning of routes, detailed information about everything during the rally, amazing arrangements for the Hotels and each and every one of the participants were made to feel special!",
      name: "Harish Krishnamachar",
      avatar: "/placeholder.svg?height=100&width=100&text=H",
    },
    {
      quote:
        "What struck us about the team at Southern Experience was that they didn't seem to run it as a business. The attention to detail was something to learn from- in making sure that the every member of the group was taken care of, was comfortable and was enjoying the trip.",
      name: "Gayatri Venugopalan",
      avatar: "/placeholder.svg?height=100&width=100&text=G",
    },
  ]

  // State for current testimonial
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 7000) // Longer interval for better reading experience

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  // Navigation functions
  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [testimonials.length])

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true)
  }, [])

  // Animation variants - smoother transitions
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  // Avatar animation variants
  const avatarVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Quote animation variants
  const quoteVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  return (
    <div className="relative max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className="w-full"
          >
            <div className="bg-white p-8 rounded-lg shadow-md relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl mx-4">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
                "
              </div>
              <motion.p
                className="text-gray-700 italic mb-6 min-h-[100px]"
                variants={quoteVariants}
                initial="initial"
                animate="animate"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>
              <div className="flex items-center">
                <motion.div
                  className="w-12 h-12 rounded-full mr-4 overflow-hidden relative bg-gradient-to-br from-red-500 to-amber-500"
                  variants={avatarVariants}
                  initial="initial"
                  animate="animate"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                </motion.div>
                <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <motion.button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous testimonial"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6 text-red-600" />
      </motion.button>
      <motion.button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Next testimonial"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6 text-red-600" />
      </motion.button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-red-600 w-6" : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

