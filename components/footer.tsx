import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import senecaCreativeLogo from "../assets/seneca-logo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo - stays left */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-32">
                <Image
                  src={senecaCreativeLogo}
                  alt="Seneca Creative"
                  width={128}
                  height={48}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-[#FF6B00] font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-work" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-gray-400 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-gray-400 hover:text-white transition-colors">
                  3D Visuals
                </Link>
              </li>
              {/* <li>
                <Link href="/services/product-design" className="text-gray-400 hover:text-white transition-colors">
                  Product Design
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-[#FF6B00] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Galleries */}
          <div className="text-center md:text-left">
            <h3 className="text-[#FF6B00] font-bold mb-4">Galleries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/gallery/3d-visuals" className="text-gray-400 hover:text-white transition-colors">
                  3D Visuals
                </Link>
              </li>
              <li>
                <Link href="/gallery/architecture" className="text-gray-400 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-800 pt-4 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#FF6B00]" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#FF6B00]" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#FF6B00]" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#FF6B00]" />
            </Link>
          </div>

          <p className="text-sm text-gray-400">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
