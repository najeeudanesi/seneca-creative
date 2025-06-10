import Link from "next/link"
import AnimatedSection from "./animated-section"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
}: HeroSectionProps) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content h-full flex items-center  text-white mt-16 w-full"> 
        <AnimatedSection animation="fade-up" className="w-full">
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}

          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {primaryButtonText && (
                <AnimatedSection animation="slide-in-left" delay={200}>
                  <Link href={primaryButtonLink} className="btn-primary">
                    {primaryButtonText}
                  </Link>
                </AnimatedSection>
              )}
              {secondaryButtonText && (
                <AnimatedSection animation="slide-in-right" delay={300}>
                  <Link href={secondaryButtonLink} className="btn-outline">
                    {secondaryButtonText}
                  </Link>
                </AnimatedSection>
              )}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
