import Image from "next/image"
import HeroSection from "@/components/hero-section"
import PricingCard from "@/components/pricing-card"

export default function Pricing() {
  return (
    <>
      <HeroSection
        title="Pricing"
        subtitle="We Offer the best prices at Seneca Creative"
        backgroundImage="/placeholder.svg?height=600&width=1200"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Pricing"
        secondaryButtonLink="/pricing"
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Seneca Creative Services"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Cutting-edge solutions for your business needs</h2>
              <p className="text-gray-600">
                Discover our expertise in graphic design, 3D visualization, interior design, and architecture. We also
                excel in UI/UX design, product development, and web solutions, providing a comprehensive approach to
                your projects.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Pricing built for businesses of all sizes.
          </h2>
          <p className="text-center text-gray-600 mb-10">Always know what you'll pay</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
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
