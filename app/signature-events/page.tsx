"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import EventModal from "@/components/event-modal"
import { Loader2 } from "lucide-react"

export default function SignatureEvents() {
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

  // Initialize loading state
  useEffect(() => {
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

  // Sample video URLs (replace with your actual videos)
  const saklesphurVideoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  const coorgVideoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"

  // Photo galleries for each event
  const mudventurePhotos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsoon%20Mudventure%20Somwerpet.jpg-lA2ybzmSy8Ki4E8SFc2kuk4PlC4mG4.jpeg",
      alt: "Monsoon Mudventure Somwerpet",
    },
    { src: "https://i.ibb.co/ds4gwwdX/2.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 2" },
    { src: "https://i.ibb.co/Fb1BTwTW/4.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 3" },
    { src: "https://i.ibb.co/pjL6PLfG/5.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 4" },
    { src: "https://i.ibb.co/HfsW3RMV/6.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 5" },
    { src: "https://i.ibb.co/RkQymJkH/7.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 6" },
    { src: "https://i.ibb.co/YB3hMp52/8.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 7" },
    { src: "https://i.ibb.co/MkZyhwJ0/9.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 8" },
    { src: "https://i.ibb.co/rfyffFqx/10.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 9" },
    { src: "https://i.ibb.co/PvJP3LSH/11.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 10" },
    { src: "https://i.ibb.co/dSrZWqH/12.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 11" },
    { src: "https://i.ibb.co/QjcpT9cG/13.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 12" },
    { src: "https://i.ibb.co/60ykR6g2/14.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 13" },
    { src: "https://i.ibb.co/p6yJnp00/15.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 14" },
    { src: "https://i.ibb.co/HTk8N584/16.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 15" },
    { src: "https://i.ibb.co/wZtwrT6Y/17.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 16" },
    { src: "https://i.ibb.co/R4bRq5Vc/18.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 17" },
    { src: "https://i.ibb.co/ZzrT8Nhh/19.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 18" },
    { src: "https://i.ibb.co/TMyLWVyF/20.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 19" },
    { src: "https://i.ibb.co/9kWgCVBt/21.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 20" },
    { src: "https://i.ibb.co/LdzFRzX1/22.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 21" },
    { src: "https://i.ibb.co/JwnvFZd3/23.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 22" },
    { src: "https://i.ibb.co/99WYKT3L/24.jpg", alt: "Monsoon Mudventure Somwerpet - Photo 23" },
  ]

  const campExperiencePhotos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg",
      alt: "Camp in experience coorg & Sakleshpur",
    },
    { src: "https://i.ibb.co/XkkDdVRg/2.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 2" },
    { src: "https://i.ibb.co/wFjDDMX8/3.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 3" },
    { src: "https://i.ibb.co/Pd0Dy5Z/4.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 4" },
    { src: "https://i.ibb.co/yMCyBm9/5.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 5" },
    { src: "https://i.ibb.co/svmKYnXm/6.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 6" },
    { src: "https://i.ibb.co/gbSWf66Z/7.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 7" },
    { src: "https://i.ibb.co/F4W99yWf/8.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 8" },
    { src: "https://i.ibb.co/ZRFxfKwN/9.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 9" },
    { src: "https://i.ibb.co/XxfH82w3/10.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 10" },
    { src: "https://i.ibb.co/q34pngzj/11.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 11" },
    { src: "https://i.ibb.co/8nCNw8m3/12.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 12" },
    { src: "https://i.ibb.co/8LcCqP3d/13.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 13" },
    { src: "https://i.ibb.co/wZQx6xkk/14.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 14" },
    { src: "https://i.ibb.co/xKvyXx7Q/15.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 15" },
    { src: "https://i.ibb.co/V02LW2kn/16.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 16" },
    { src: "https://i.ibb.co/wZsNqmnG/17.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 17" },
    { src: "https://i.ibb.co/35BQtjNj/18.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 18" },
    { src: "https://i.ibb.co/vvvWVX3X/19.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 19" },
    { src: "https://i.ibb.co/F4TDyTnN/20.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 20" },
    { src: "https://i.ibb.co/PGqXpthq/21.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 21" },
    { src: "https://i.ibb.co/jv1ynbXh/22.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 22" },
    { src: "https://i.ibb.co/SX4vKmyX/23.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 23" },
    { src: "https://i.ibb.co/yFdNyFrF/24.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 24" },
    { src: "https://i.ibb.co/6cw3STVg/25.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 25" },
    { src: "https://i.ibb.co/xqXR3n5j/26.jpg", alt: "Camp in experience coorg & Sakleshpur - Photo 26" },
  ]

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 justify-center items-center">
        <Loader2 className="h-12 w-12 text-teal-600 animate-spin mb-4" />
        <p className="text-teal-800">Loading Signature Events...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Southern%20Offroad%20Challenge.jpg-aXejaDYKXn65nnTAxMVZCAcKnIovfZ.jpeg"
          alt="Off-road vehicles lined up"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">SIGNATURE EVENTS</h1>
        </div>
      </div>

      {/* Signature Events Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <p className="text-lg mb-12 text-center text-teal-800">
            Our signature events include a variety of off-road experiences, all carefully designed to give participants
            the thrill of driving off-the-beaten track with the best possible stays and highest standards of safety.
          </p>

          <div className="space-y-20">
            {/* Camp in Experience at Sakleshpur */}
            <div id="sakleshpur" className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-bold mb-4 text-teal-800">Camp in Experience at Sakleshpur</h2>
                    <p className="mb-4 text-gray-700">
                      Immerse yourself in nature with our camp-in experience at Sakleshpur. Enjoy off-road driving
                      during the day and comfortable camping at night in this beautiful region.
                    </p>
                    <p className="mb-6 text-gray-700">
                      Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping
                      under the stars at night. This experience includes guided off-road trails, campfire activities,
                      and local cuisine.
                    </p>
                    <Button
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() =>
                        openModal({
                          title: "Camp in Experience at Sakleshpur",
                          videoUrl: saklesphurVideoUrl,
                          description:
                            "Our Sakleshpur camp-in experience offers a perfect blend of adventure and relaxation in the beautiful Western Ghats. Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping under the stars at night. This experience includes guided off-road trails, campfire activities, and local cuisine.",
                        })
                      }
                    >
                      Watch Video
                    </Button>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg"
                      alt="Camp in Experience at Sakleshpur"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-[300px] cursor-pointer"
                      onClick={() =>
                        openModal({
                          title: "Camp in Experience at Sakleshpur",
                          videoUrl: saklesphurVideoUrl,
                          description:
                            "Our Sakleshpur camp-in experience offers a perfect blend of adventure and relaxation in the beautiful Western Ghats. Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping under the stars at night. This experience includes guided off-road trails, campfire activities, and local cuisine.",
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Camp in Experience at Coorg */}
              <div id="coorg" className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg"
                        alt="Camp in Experience at Coorg"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-[300px] cursor-pointer"
                        onClick={() =>
                          openModal({
                            title: "Camp in Experience at Coorg",
                            videoUrl: coorgVideoUrl,
                            description:
                              "Discover the beauty of Coorg with our exclusive camp-in experience. Known as the 'Scotland of India', Coorg offers lush landscapes, coffee plantations, and challenging off-road trails. Our guided expedition includes comfortable camping, traditional Kodava cuisine, and the opportunity to explore this unique region's natural beauty and culture.",
                          })
                        }
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-teal-800">Camp in Experience at Coorg</h2>
                      <p className="mb-4 text-gray-700">
                        Discover the beauty of Coorg with our exclusive camp-in experience. Drive through coffee
                        plantations and forests while enjoying the unique culture of this region.
                      </p>
                      <p className="mb-6 text-gray-700">
                        Known as the 'Scotland of India', Coorg offers lush landscapes, coffee plantations, and
                        challenging off-road trails. Our guided expedition includes comfortable camping and traditional
                        Kodava cuisine.
                      </p>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                        onClick={() =>
                          openModal({
                            title: "Camp in Experience at Coorg",
                            videoUrl: coorgVideoUrl,
                            description:
                              "Discover the beauty of Coorg with our exclusive camp-in experience. Known as the 'Scotland of India', Coorg offers lush landscapes, coffee plantations, and challenging off-road trails. Our guided expedition includes comfortable camping, traditional Kodava cuisine, and the opportunity to explore this unique region's natural beauty and culture.",
                          })
                        }
                      >
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monsoon Mudventure */}
              <div id="mudventure" className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="order-2 md:order-1">
                      <h2 className="text-2xl font-bold mb-4 text-teal-800">Monsoon Mudventure Somwerpet</h2>
                      <p className="mb-4 text-gray-700">
                        Experience the thrill of monsoon off-roading in Somwerpet. Navigate through challenging muddy
                        terrain and enjoy the lush green landscapes of the Western Ghats.
                      </p>
                      <p className="mb-6 text-gray-700">
                        This adventure offers the perfect opportunity to test your driving skills and your vehicle's
                        capabilities in wet conditions. Enjoy the beauty of the monsoon while tackling challenging
                        trails.
                      </p>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                        onClick={() =>
                          openModal({
                            title: "Monsoon Mudventure Somwerpet",
                            imageUrl:
                              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsoon%20Mudventure%20Somwerpet.jpg-lA2ybzmSy8Ki4E8SFc2kuk4PlC4mG4.jpeg",
                            description:
                              "Our Monsoon Mudventure in Somwerpet is designed for those who love the challenge of monsoon off-roading. Navigate through slippery trails, muddy terrain, and water crossings while surrounded by the lush green landscapes of the Western Ghats. This adventure offers the perfect opportunity to test your driving skills and your vehicle's capabilities in wet conditions.",
                          })
                        }
                      >
                        Learn More
                      </Button>
                    </div>
                    <div className="order-1 md:order-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsoon%20Mudventure%20Somwerpet.jpg-lA2ybzmSy8Ki4E8SFc2kuk4PlC4mG4.jpeg"
                        alt="Monsoon Mudventure Somwerpet"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-[300px] cursor-pointer"
                        onClick={() =>
                          openModal({
                            title: "Monsoon Mudventure Somwerpet",
                            imageUrl:
                              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monsoon%20Mudventure%20Somwerpet.jpg-lA2ybzmSy8Ki4E8SFc2kuk4PlC4mG4.jpeg",
                            description:
                              "Our Monsoon Mudventure in Somwerpet is designed for those who love the challenge of monsoon off-roading. Navigate through slippery trails, muddy terrain, and water crossings while surrounded by the lush green landscapes of the Western Ghats. This adventure offers the perfect opportunity to test your driving skills and your vehicle's capabilities in wet conditions.",
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* Gallery removed as requested */}
                </div>
              </div>

              {/* Camp in experience coorg & Sakleshpur */}
              <div id="camp-experience" className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg"
                        alt="Camp in experience coorg & Sakleshpur"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-[300px] cursor-pointer"
                        onClick={() =>
                          openModal({
                            title: "Camp in experience coorg & Sakleshpur",
                            imageUrl:
                              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg",
                            description:
                              "Immerse yourself in nature with our camp-in experience at Coorg and Sakleshpur. Enjoy off-road driving during the day and comfortable camping at night in these beautiful regions. Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping under the stars at night. This experience includes guided off-road trails, campfire activities, and local cuisine.",
                          })
                        }
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-teal-800">Camp in experience coorg & Sakleshpur</h2>
                      <p className="mb-4 text-gray-700">
                        Immerse yourself in nature with our camp-in experience at Coorg and Sakleshpur. Enjoy off-road
                        driving during the day and comfortable camping at night in these beautiful regions.
                      </p>
                      <p className="mb-6 text-gray-700">
                        Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping
                        under the stars at night. This experience includes guided off-road trails, campfire activities,
                        and local cuisine.
                      </p>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                        onClick={() =>
                          openModal({
                            title: "Camp in experience coorg & Sakleshpur",
                            imageUrl:
                              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camp%20in%20experience%20coorg%20%26%20Sakleshpur.jpg-4GxK72pip7dYcIMfK6YVAn1Rc65xK2.jpeg",
                            description:
                              "Immerse yourself in nature with our camp-in experience at Coorg and Sakleshpur. Enjoy off-road driving during the day and comfortable camping at night in these beautiful regions. Drive through coffee plantations and dense forests during the day, and enjoy comfortable camping under the stars at night. This experience includes guided off-road trails, campfire activities, and local cuisine.",
                          })
                        }
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Gallery removed as requested */}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6 text-teal-800">Join Our Next Expedition</h2>
              <p className="mb-6 text-gray-700">
                Experience the thrill of off-road driving with like-minded enthusiasts. Our signature events are
                designed to provide unforgettable adventures while ensuring the highest standards of safety and comfort.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">View Upcoming Events</Button>
            </div>
          </div>
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
    </div>
  )
}

