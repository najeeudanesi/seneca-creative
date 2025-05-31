import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import QuoteSection from "@/components/quote-section"

export default function OurWork() {
  return (
    <>
      <HeroSection
        title="Our Work"
        subtitle="Have a peek at some of our work"
        backgroundImage="/placeholder.svg?height=600&width=1200"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Pricing"
        secondaryButtonLink="/pricing"
      />

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Our Portfolio</h2>
          <p className="text-center text-gray-600 mb-10">View Our Galleries Of What We Can Offer You</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <Link href="/gallery/3d-visuals">
                <div className="relative aspect-square">
                  <Image src="/placeholder.svg?height=400&width=400" alt="3D Visuals" fill className="object-cover" />
                </div>
              </Link>
              <div className="p-6 text-center">
                <h3 className="text-[#FF6B00] uppercase font-bold mb-1">3D VISUALS</h3>
                <p className="text-sm text-gray-600 mb-4">View our gallery of 3d models and visuals</p>
                <Link href="/gallery/3d-visuals" className="text-sm font-medium text-gray-900 hover:text-[#FF6B00]">
                  View Gallery →
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <Link href="/gallery/web-development">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6 text-center">
                <h3 className="text-[#FF6B00] uppercase font-bold mb-1">WEB & APP DEVELOPMENT</h3>
                <p className="text-sm text-gray-600 mb-4">View our web solutions and development process</p>
                <Link
                  href="/gallery/web-development"
                  className="text-sm font-medium text-gray-900 hover:text-[#FF6B00]"
                >
                  View Gallery →
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <Link href="/gallery/architecture">
                <div className="relative aspect-square">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Architecture" fill className="object-cover" />
                </div>
              </Link>
              <div className="p-6 text-center">
                <h3 className="text-[#FF6B00] uppercase font-bold mb-1">ARCHITECTURE</h3>
                <p className="text-sm text-gray-600 mb-4">View Examples of our Architectural Designs</p>
                <Link href="/gallery/architecture" className="text-sm font-medium text-gray-900 hover:text-[#FF6B00]">
                  View Gallery →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Luck is when preparation meets opportunity"
        author="Seneca"
        backgroundImage="/placeholder.svg?height=400&width=1200"
      />
    </>
  )
}
