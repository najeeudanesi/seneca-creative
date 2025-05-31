import Image from "next/image"
import HeroSection from "@/components/hero-section"

export default function ArchitectureGallery() {
  return (
    <>
      <HeroSection
        title="Gallery/Architecture"
        subtitle="Have a peek at some of our work"
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2 aspect-video relative">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Architecture Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-2 aspect-video relative">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Architecture Project"
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
