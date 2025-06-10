import Image from "next/image"
import HeroSection from "@/components/hero-section"
import PricingCard from "@/components/pricing-card"
import AnimatedSection from "@/components/animated-section"
import Link from "next/link"
import LazyImage from "@/components/lazy-image"

export default function Pricing() {
  return (
    <>
      <HeroSection
        title="Pricing"
        subtitle="We Offer the best prices at Seneca Creative"
        backgroundImage="https://i.ibb.co/twWCSnyK/image-2.png"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Pricing"
        secondaryButtonLink="/pricing"
      />

      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="slide-in-left">
              <LazyImage
                src="https://i.ibb.co/bjJwGW0M/Frame-22.png"
                alt="Design solutions"
                width={550}
                height={400}
                className="rounded-lg"
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gradient-text">Cutting-edge solutions</span> for your business needs
              </h2>
              <p className="text-gray-600 mb-6">
                Discover our expertise in graphic design, 3D visualization, interior design, and architecture. We also
                excel in UI/UX design, product development, and web solutions, providing a comprehensive approach to
                your projects.
              </p>
              <Link href="/contact-us" className="btn-primary">
                Contact Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
        
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Pricing built for businesses of all sizes.
          </h2>
          <p className="text-center text-gray-600 mb-10">Always know what you'll pay</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PricingCard
              title="Personal"
              subtitle="For individuals & freelancers"
              price="99"
              features={["Free domain", "Monthly Benchmark Test"]}
            />
            <PricingCard
              title="Business"
              subtitle="For small & medium businesses"
              price="179"
              features={["Free domain", "Monthly Benchmark Test", "SEO Storage 1TB"]}
            />
            <PricingCard
              title="Developer"
              subtitle="For agencies & developers"
              price="269"
              isPopular={true}
              features={["Free domain", "Monthly Benchmark Test", "SEO Storage 1TB", "SSL Certificate"]}
            />
            <PricingCard
              title="Agency"
              subtitle="For large teams & enterprise"
              price="349"
              features={["Free domain", "Monthly Benchmark Test", "SEO Storage 1TB", "SSL Certificate"]}
            />
          </div>
          </div>
          </section>
    </>
  )
}
