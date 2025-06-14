import Image from "next/image"
import AnimatedSection from "./animated-section"

interface ProjectShowcaseProps {
  title: string
  description: string
  image: string
  imagePosition?: "left" | "right"
  delay?: number
}

export default function ProjectShowcase({
  title,
  description,
  image,
  imagePosition = "right",
  delay = 0,
}: ProjectShowcaseProps) {
  const isImageLeft = imagePosition === "left"

  return (
    <AnimatedSection animation="fade-up" delay={delay} className="py-24 w-screen">
      <div className="container-custom">
        <div
          className={`flex flex-col md:flex-row items-center gap-8 lg:gap-[300px] ${
            isImageLeft ? "md:flex-row-reverse" : ""
          }`}
        >
        <div className={`flex flex-col md:flex-row items-stretch justify-between gap-8 lg:gap-[250px] ${isImageLeft ? "md:flex-row-reverse" : ""}`}>
  {/* Text */}
  <div className="md:w-1/2">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text uppercase tracking-wider">{title}</h2>
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>

  {/* Image */}
  <div className="md:w-1/2">
    <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover rounded-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </AnimatedSection>
  )
}
