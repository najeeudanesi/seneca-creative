import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import QuoteSection from "@/components/quote-section"
import AnimatedSection from "@/components/animated-section"
import PortfolioCard from "@/components/portfolio-card"

export default function OurWork() {
  return (
    <>
      <HeroSection
        title="Our Work"
        subtitle="Have a peek at some of our work"
        backgroundImage="https://i.ibb.co/F4rWHwMg/image-3.png"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Pricing"
        secondaryButtonLink="/pricing"
      />

      <section className="py-16">
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
                 image="https://i.ibb.co/FLftStQn/image6.png"
                 link="/gallery/3d-visuals"
               />
             </AnimatedSection>
             <AnimatedSection animation="zoom-in" delay={200}>
               <PortfolioCard
                 title="Web Solutions and Development"
                 category="WEB & APP DEVELOPMENT"
                 description="View our web solutions and development process"
                 image="https://i.ibb.co/BH9TmzkW/image-2.png"
                 link="/gallery/web-development"
               />
             </AnimatedSection>
             <AnimatedSection animation="zoom-in" delay={300}>
               <PortfolioCard
                 title="Architectural Designs"
                 category="ARCHITECTURE"
                 description="View Examples of our Architectural Designs"
                 image="https://i.ibb.co/21gxrkQ1/image.png"
                 link="/gallery/architecture"
               />
             </AnimatedSection>
           </div>
         </div>
       </AnimatedSection>
      </section>

      <QuoteSection
            quote="Luck is when preparation meets opportunity"
            author="Seneca"
            backgroundImage="https://i.ibb.co/Vppj0PgR/Philosophy-stuff.png"
          />
    </>
  )
}
