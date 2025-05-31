import Image from "next/image"
import HeroSection from "@/components/hero-section"

export default function WebDevelopmentGallery() {
  return (
    <>
      <HeroSection
        title="Gallery/Web Development"
        subtitle="Have a peek at some of our work"
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-16">
        <div className="container-custom">
          {/* This is a placeholder for web development projects */}
          <div className="grid grid-cols-1 gap-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Web Development Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Web Development Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Web Development Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
