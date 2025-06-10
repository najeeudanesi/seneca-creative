import Image from "next/image"
import HeroSection from "@/components/hero-section"
import ContactInfo from "@/components/contact-info"

export default function ContactUs() {
  return (
    <>
      {/* <HeroSection
        title="Contact Us"
        subtitle="Speak too our Experts"
        backgroundImage="/placeholder.svg?height=600&width=1200"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Pricing"
        secondaryButtonLink="/pricing"
      /> */}

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Connect With Our Team</h2>
          <p className="text-center text-gray-600 mb-10">Reach Out to Us</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ContactInfo email="Seneca-creative@gmail.com" phone="000-000-000-0989" />
            <div>
              <Image
              src="https://i.ibb.co/3yhm2Hdc/freepik-a-powerful-beam-projects-an-orange-senecacreative-62277.png"
                alt="Contact Seneca Creative"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-600 mb-10">
              We believe great design is more than aesthetics — it's intention made visible. At Seneca Creative, every
              detail is considered, every concept refined. Our work is driven by purpose, crafted with care, and built
              to endure — visually, functionally, and emotionally.
            </p>
          </div>

          <div className="aspect-video relative max-w-3xl mx-auto">
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6B00] flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
