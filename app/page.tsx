import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import PortfolioCard from "@/components/portfolio-card"
import QuoteSection from "@/components/quote-section"
import ContactInfo from "@/components/contact-info"
import AnimatedSection from "@/components/animated-section"
import LazyImage from "@/components/lazy-image"
import shaded from "../assets/shaded.png"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <HeroSection
        title="Comprehensive design services for your business"
        subtitle="We bring life to great design through visual, tactile, audio, and architectural elements that create memorable experiences."
        backgroundImage="https://i.ibb.co/ZRCTbfqD/heroimage.png"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Learn"
        secondaryButtonLink="/about-us"
      />

      <AnimatedSection animation="fade-up" className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center gradient-text">Our Services</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15rem] mb-12">
            <div className="flex flex-col space-y-5">
            <AnimatedSection animation="slide-in-left" delay={100}>
              <ServiceCard
                number={1}
                title="UI/UX Design"
                description="We create intuitive, user-friendly interfaces that enhance user experience and drive engagement."
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-left" delay={200}>
              <ServiceCard
                number={2}
                title="Web Development"
                description="Our team builds responsive websites optimized for speed and performance."
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-left" delay={300}>
              <ServiceCard
                number={3}
                title="Architecture & Interior Design"
                description="We design beautiful, functional spaces that reflect your brand identity."
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-left" delay={400}>
              <ServiceCard
                number={4}
                title="3D Visualization & Rendering"
                description="Bringing ideas to life with photorealistic 3D visualizations and animations."
              />
            </AnimatedSection>
            </div>
          

           <AnimatedSection animation="slide-in-right" className="hidden lg:block mt-4">
              <Image
              src={shaded}
              alt="Seneca Creative"
              width={600}
              height={700}
              className="object-fill "
            />
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

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

    <AnimatedSection animation="fade-up" className="py-[16rem]">
  <div className="w-full max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center gradient-text">
      Our Portfolio
    </h2>
    <p className="text-center text-gray-600 mb-10">
      View Our Galleries Of What We Can Offer You
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[5rem] justify-items-center w-full">
      <AnimatedSection animation="zoom-in" delay={100}>
        <PortfolioCard
          title="3D Models and Visuals"
          category="3D VISUALS"
          description="View our gallery of 3d models and visuals"
          image="/placeholder.svg?height=300&width=300"
          link="/gallery/3d-visuals"
        />
      </AnimatedSection>
      <AnimatedSection animation="zoom-in" delay={200}>
        <PortfolioCard
          title="Web Solutions and Development"
          category="WEB & APP DEVELOPMENT"
          description="View our web solutions and development process"
          image="/placeholder.svg?height=300&width=300"
          link="/gallery/web-development"
        />
      </AnimatedSection>
      <AnimatedSection animation="zoom-in" delay={300}>
        <PortfolioCard
          title="Architectural Designs"
          category="ARCHITECTURE"
          description="View Examples of our Architectural Designs"
          image="/placeholder.svg?height=300&width=300"
          link="/gallery/architecture"
        />
      </AnimatedSection>
    </div>
  </div>
</AnimatedSection>


      <AnimatedSection animation="fade-up" className="py-16 bg-black text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">SENECA CREATIVE</h2>
              <p className="text-orange-500 italic mb-6">"Begin at once to live"</p>
              <p className="text-gray-300 mb-6">
                We are a multidisciplinary design studio passionate about creating visually striking, functional, and
                immersive experiences. With a foundation in both traditional and digital design principles, our team of
                experts offer a comprehensive suite of creative services tailored to meet the evolving needs of modern
                brands, businesses, and spaces.
              </p>
              <div className="flex space-x-4">
                <Link href="/contact-us" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/about-us" className="btn-outline">
                  About Us
                </Link>
              </div>
            </AnimatedSection>
          
              <img
                src="https://i.ibb.co/Rkm6ztR4/Frame-12.png"
                alt="Seneca Creative Studio"
                width={600}
                height={400}
                className="rounded-lg"
              />
         
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center gradient-text">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            We believe great design is more than aesthetics — it's intention made visible. At Seneca Creative, every
            detail is considered, every concept refined. Our work is driven by purpose, crafted with care, and built to
            endure — visually, functionally, and emotionally.
          </p>

          <AnimatedSection animation="zoom-in">
            <div className="aspect-video relative max-w-3xl mx-auto">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
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
          </AnimatedSection>
        </div>
      </AnimatedSection>

      <QuoteSection
        quote="Luck is when preparation meets opportunity"
        author="Seneca"
        backgroundImage="https://i.ibb.co/Vppj0PgR/Philosophy-stuff.png"
      />

      <AnimatedSection animation="fade-up" className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center gradient-text">Connect With Our Team</h2>
          <p className="text-center text-gray-600 mb-10">Reach Out to Us</p>

          <div className="grid md:grid-cols-2 gap-24 items-center">
            <AnimatedSection animation="slide-in-left">
              <ContactInfo email="Seneca-creative@gmail.com" phone="000-000-000-0989" />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <img
                src="https://i.ibb.co/3yhm2Hdc/freepik-a-powerful-beam-projects-an-orange-senecacreative-62277.png"
                alt="Contact Seneca Creative"
                width={550}
                height={300}
                className="rounded-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
