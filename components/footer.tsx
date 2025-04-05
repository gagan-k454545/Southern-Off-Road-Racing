import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="uppercase text-sm font-semibold mb-6 border-b border-white pb-2 inline-block">Menu</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link href="/southern-offroad-challenge" className="hover:text-white transition-colors">
                  Southern Offroad Challenge Season 1 & 2
                </Link>
              </li>
              <li>
                <Link href="/customised-events" className="hover:text-white transition-colors">
                  Customised Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold mb-6 border-b border-white pb-2 inline-block">Info</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link href="/southern-offroad-challenge" className="hover:text-white transition-colors">
                  Southern Offroad Challenge
                </Link>
              </li>
              <li>
                <Link href="/signature-events#sakleshpur" className="hover:text-white transition-colors">
                  Camp in Experience at Sakleshpur
                </Link>
              </li>
              <li>
                <Link href="/signature-events#coorg" className="hover:text-white transition-colors">
                  Camp in Experience at Coorg
                </Link>
              </li>
              <li>
                <Link href="/signature-events#mudventure" className="hover:text-white transition-colors">
                  Monsoon Mudventure
                </Link>
              </li>
              <li>
                <Link href="/signature-events#spiti" className="hover:text-white transition-colors">
                  Winter Spiti Valley Expedition
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="uppercase text-sm font-semibold mb-4 border-b border-white pb-2 inline-block">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="bg-red-800 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/southern_offroader?igsh=MTJ5cDA4dTdicXFnbw%3D%3D&utm_source=qr"
                  aria-label="Instagram"
                  className="bg-red-800 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="bg-red-800 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="bg-red-800 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="uppercase text-sm font-semibold mb-6 border-b border-white pb-2 inline-block">Sign Up</h3>
            <p className="text-sm mb-4 text-gray-200">
              Are you a driving enthusiast? An intrepid explorer? A maverick off-roader?
            </p>
            <p className="text-sm mb-6 text-gray-200">Join the Southern Experience community now!</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="yourname@email.com"
                className="text-sm bg-red-700 border-red-600 focus:border-white transition-all duration-300"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px]">
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="uppercase text-sm font-semibold mb-4 border-b border-white pb-2 inline-block">Reach Us</h3>
              <div className="flex items-center space-x-2 text-gray-200 mb-2">
                <Phone className="h-4 w-4 text-white" />
                <p className="text-sm">Call: +91 77605 56117</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Mail className="h-4 w-4 text-white" />
                <p className="text-sm">Mail: Southernexperienceindia@gmail.com</p>
              </div>
            </div>
            <p className="text-xs text-gray-300">© Southern Experience India. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

