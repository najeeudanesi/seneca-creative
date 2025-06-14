import Image from "next/image"
import AnimatedSection from "./animated-section"

interface ProjectShowcaseProps {
  title: string
  description: string
  image: string
  imagePosition?: "left" | "right"
  delay?: number
}

export default function ProjectShowcase2({
  title,
  description,
  image,
  imagePosition = "right", // no longer used, but left for compatibility
  delay = 0,
}: ProjectShowcaseProps) {
  return (
    <AnimatedSection animation="fade-up" delay={delay} className="py-24 w-screen">
      <div className="container-custom flex flex-col items-center text-center space-y-12">
        {/* Text Content */}
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text uppercase tracking-wider">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-[80rem] h-[450px] md:h-[550px] relative rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </AnimatedSection>
  )
}
