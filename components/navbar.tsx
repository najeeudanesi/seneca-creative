"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import senecaCreativeLogo from "../assets/seneca-logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/our-work", label: "Our Work" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container-custom h-12 md:16 flex justify-between items-center">
        <Link href="/" className="flex items-center top-1">
          <div className="h-16 w-16 md:h-20 md:w-20">
            <Image
              src={senecaCreativeLogo}
              alt="Seneca Creative"
              width={90}
              height={50}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-[#FF6B00] ${
                pathname === href ? "text-[#FF6B00]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className={`btn-primary ${
              pathname === "/contact-us" ? "bg-[#FF6B00] text-white" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors py-2 hover:text-[#FF6B00] ${
                  pathname === href ? "text-[#FF6B00]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className={`btn-primary inline-block text-center ${
                pathname === "/contact-us" ? "bg-[#FF6B00] text-white" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
