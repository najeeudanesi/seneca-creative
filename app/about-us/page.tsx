import HeroSection from "@/components/hero-section"
import TeamMemberCard from "@/components/team-member-card"
import QuoteSection from "@/components/quote-section"
import AnimatedSection from "@/components/animated-section"

export default function AboutUs() {
  return (
    <>
      <HeroSection
        title="About US"
        subtitle="Find out more About Seneca Studios"
        backgroundImage="https://upload.wikimedia.org/wikipedia/commons/f/f5/Boceto_para_La_muerte_de_S%C3%A9neca_-_Manuel_Dom%C3%ADnguez_S%C3%A1nchez.jpg"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Portfolio"
        secondaryButtonLink="/our-work"
      />

      <AnimatedSection animation="fade-up" className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">SENECA CREATIVE</h2>
            <p className="text-orange-500 text-center italic mb-8">"Begin at once to live"</p>

            <div className="prose prose-lg mx-auto">
              <p>
                At <strong>Seneca Creative</strong>, we are a multidisciplinary design studio passionate about creating
                visually striking, functional, and immersive experiences. With a foundation in both traditional and
                digital design principles, our team of experts offer a comprehensive suite of creative services tailored
                to meet the evolving needs of modern brands, businesses, and spaces.
              </p>
              <p>
                Founded in 2015, we've grown from a small team of passionate designers to a full-service creative studio
                with expertise across multiple disciplines. Our approach combines strategic thinking with creative
                execution, ensuring that every project we undertake not only looks beautiful but also achieves its
                intended purpose.
              </p>
              <p>
                We believe that great design has the power to transform businesses, spaces, and experiences. That's why
                we work closely with our clients to understand their unique challenges and objectives, crafting tailored
                solutions that drive results and create lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center gradient-text">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <AnimatedSection animation="zoom-in" delay={100}>
              <TeamMemberCard
                name="Elena Moreau"
                position="Creative Director"
                bio="An exceptional creative leader with over a decade of experience guiding design teams to create visually stunning and effective solutions."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={200}>
              <TeamMemberCard
                name="Tobias Schmidt"
                position="Lead Developer"
                bio="Passionate about creating seamless digital interfaces. Tobias oversees our web development team and ensures technical excellence."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={300}>
              <TeamMemberCard
                name="Amara Chen"
                position="Senior Designer"
                bio="Amara brings a unique perspective to our design team, blending form and function to create memorable experiences."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={400}>
              <TeamMemberCard
                name="Julian Reyes"
                position="3D Artist"
                bio="Julian creates imaginative 3D universes. His keen eye for detail brings digital worlds to life."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={500}>
              <TeamMemberCard
                name="Sofia Ivanova"
                position="Project Manager"
                bio="With expertise in her field, Sofia streamlines our workflow and ensures projects stay on track."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={600}>
              <TeamMemberCard
                name="Miles Carter"
                position="UX Strategist"
                bio="Miles brings vision and precision, aligning strategy, design, and purpose into one."
                image="/placeholder.svg?height=128&width=128"
                socialLinks={{
                  facebook: "#",
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

   
         <QuoteSection
               quote="Luck is when preparation meets opportunity"
               author="Seneca"
               backgroundImage="https://i.ibb.co/Vppj0PgR/Philosophy-stuff.png"
             />
    </>
  )
}
