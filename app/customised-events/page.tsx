import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CustomisedEvents() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23.JPG-jA9n5yXdZFcaLfjh8QjQ6WWKwfSfgm.jpeg"
          alt="Off-road vehicles in line"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">CUSTOMISED EVENTS</h1>
        </div>
      </div>

      {/* Customised Events Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg mb-12 text-center">
            Our domain knowledge and experience helps us to organise customised events for leading automobile
            manufacturers and organisations with a high level of professionalism and attention to detail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Corporate Events</h2>
              <p className="mb-4">
                We design and execute bespoke off-road experiences for corporate clients, tailored to meet specific
                objectives such as team building, product launches, or client engagement.
              </p>
              <p>
                Our corporate events combine adventure with luxury, creating memorable experiences that strengthen team
                bonds and leave lasting impressions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Automobile Launches</h2>
              <p className="mb-4">
                We work with leading automobile manufacturers to create immersive launch experiences that showcase the
                capabilities of their vehicles in real-world conditions.
              </p>
              <p>
                Our expertise in route planning and logistics ensures that every aspect of the launch event highlights
                the unique features of the vehicle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27.JPG-IW68lhvYPk7IIdik6VaQewPR4XUbDy.jpeg"
              alt="Muddy SUV"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-A6PsaG0OlOBwWbSo37u9gVn10t4CY3.jpeg"
              alt="Off-road trail"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-5GsIyUcN6w5kqdIyNBtbNz62TAMf7w.jpeg"
              alt="Jeep engine"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Customisation Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Consultation</h3>
                <p className="text-sm">
                  We understand your objectives, preferences, and requirements through detailed discussions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-sm">
                  Our team designs a tailored experience, including route planning, accommodation, and activities.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Execution</h3>
                <p className="text-sm">
                  We handle all logistics and ensure flawless execution of the event with attention to every detail.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Create Your Custom Event?</h2>
            <p className="mb-6">
              Contact us to discuss how we can design a bespoke off-road experience for your organization.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

