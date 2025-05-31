import AnimatedSection from "./animated-section"

interface QuoteSectionProps {
  quote: string
  author: string
  backgroundImage: string
}

export default function QuoteSection({ quote, author, backgroundImage }: QuoteSectionProps) {
  return (
    <section
      className="py-20 relative h-[30rem]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container-custom relative z-10 text-center">
        <AnimatedSection animation="fade-in">
          <blockquote className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-medium italic mb-4">
            "{quote}"
          </blockquote>
          <cite className="text-white text-lg md:text-xl not-italic flex justify-end items-center">
            <span className="mr-2">-</span> {author}
          </cite>
        </AnimatedSection>
      </div>
    </section>
  )
}
