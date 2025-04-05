import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-U3ywdJDxvYFGBiExYlJrLvMKnl4ICt.jpeg"
          alt="Off-road vehicle in mud"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      {/* About Us Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Southern Experience India</h2>

          <p className="text-xl mb-12 text-center leading-relaxed">
            Southern Experience India is a premier event management company specializing in motorsports, off-roading,
            expeditions, and adventure experiences. With a passion for extreme driving and outdoor challenges, we curate
            high-adrenaline events that test skill, endurance, and machine capability across some of India's most rugged
            terrains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-VITR9BrpNROQTu7eWAuVsUXhQUQCGB.jpeg"
                alt="Off-road vehicle in action"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[300px] shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-red-600">Our Journey</h2>
              <p className="mb-4 leading-relaxed">
                Founded by passionate off-roaders and motorsport enthusiasts, Southern Experience India has grown into a
                recognized name in the adventure and motorsports community. From organizing off-road challenges to
                high-altitude expeditions, our events bring together thrill-seekers, vehicle enthusiasts, and brands
                looking to engage with a dynamic audience.
              </p>
              <p className="leading-relaxed">
                We strive to showcase the diverse landscapes of India through carefully curated expeditions that
                challenge and inspire our participants.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Our Expertise</h2>
              <p className="mb-4 leading-relaxed">
                With years of experience in organizing off-road events, we have developed unmatched expertise in route
                planning, logistics management, and safety protocols.
              </p>
              <p className="leading-relaxed">
                Our team consists of passionate off-road enthusiasts who are committed to delivering exceptional
                experiences tailored to the needs and preferences of our clients.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-gji7ot7EsVWKk29spu7oXPExkGmSJE.jpeg"
                alt="Off-road vehicle in mud"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[300px] shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-red-600">Our Fleet</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-q4vzqhIqAkW0RZVD8fiKViZEP6FTDV.jpeg"
                  alt="Off-road vehicle in competition"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[200px] hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-frSEWDZQwalCs2j4hBADqLA2xY84t7.jpeg"
                  alt="Suzuki in mud"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[200px] hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-B5fujKO8DxhhrpkHpLdIFmTVgihd9t.jpeg"
                  alt="Off-road vehicle in competition"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[200px] hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

