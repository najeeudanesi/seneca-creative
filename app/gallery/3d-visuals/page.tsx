import HeroSection from "@/components/hero-section"
import GallerySlideshow from "@/components/gallery-slideshow"
import ProjectShowcase from "@/components/project-showcase"
import AnimatedSection from "@/components/animated-section"

const galleryImages = [
  {
    src: "https://i.ibb.co/rWDwZLB/Whats-App-Image-2025-05-26-at-20-48-01-1.jpg",
    alt: "Desert Sunset Scene - A breathtaking 3D render of a desert landscape at golden hour",
  },
  {
    src: "https://i.ibb.co/CswfkJsf/Whats-App-Image-2025-05-26-at-20-48-01-2.jpg",
    alt: "Futuristic Architecture - Modern architectural visualization with clean lines",
  },
  {
    src: "https://i.ibb.co/pDwghnK/Whats-App-Image-2025-05-26-at-20-48-01-3.jpg",
    alt: "Abstract Sculpture - Contemporary 3D art piece with flowing forms",
  },
  {
    src: "https://i.ibb.co/4ZVSsqJy/Whats-App-Image-2025-05-26-at-20-48-01.jpg",
    alt: "Product Visualization - Photorealistic rendering of luxury items",
  },
  {
    src: "https://i.ibb.co/tM4DxKbg/Whats-App-Image-2025-05-26-at-20-48-02-1.jpg",
    alt: "Character Design - Detailed 3D character modeling and texturing",
  },
  { src: "https://i.ibb.co/tMN8wnYf/Whats-App-Image-2025-05-26-at-20-48-02.jpg", alt: "Environment Design - Immersive 3D world creation" },
  {
    src: "/placeholder.svg?height=600&width=1000",
    alt: "Laneige Product Render - Elegant cosmetic product visualization",
  },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Suits Collection - Fashion visualization with fabric detail" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Weapon Design - Fantasy weapon with intricate details" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Interior Scene - Luxurious interior space rendering" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Concept Art - Creative conceptual 3D artwork" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Lighting Study - Advanced lighting and shadow work" },
]

export default function ThreeDVisualsGallery() {
  return (
    <>
    

      <GallerySlideshow images={galleryImages} autoPlayInterval={5000} />

      <AnimatedSection animation="fade-up" className="py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 gradient-text">Gallery/3D VISUALS</h1>
        </div>
      </AnimatedSection>

      <ProjectShowcase
        title="SUNSET"
        description="Immerse yourself in the breathtaking beauty of our sunset visualization. This stunning 3D render captures the golden hour's magic, where warm hues dance across the sky and cast long shadows across the landscape. Every detail has been meticulously crafted to create a sense of tranquility and wonder. The interplay of light and shadow creates depth and atmosphere, while the careful attention to environmental details brings this virtual world to life. This piece demonstrates our ability to create emotionally resonant scenes that transport viewers to another place and time."
        image="/placeholder.svg?height=500&width=400"
        imagePosition="right"
        delay={100}
      />

      <ProjectShowcase
        title="LANEIGE"
        description="A sophisticated product visualization that showcases the elegance and precision of modern design. This 3D render demonstrates our expertise in creating photorealistic product presentations that highlight every curve, texture, and detail. The careful lighting setup emphasizes the product's premium quality while the minimalist composition draws focus to the essential elements. Our team's attention to material properties and surface interactions creates a compelling visual narrative that speaks to the brand's values of innovation and excellence."
        image="https://i.ibb.co/rWDwZLB/Whats-App-Image-2025-05-26-at-20-48-01-1.jpg"
        imagePosition="right"
        delay={200}
      />

      <ProjectShowcase
        title="SUITS"
        description="Step into a world of refined elegance with our suits visualization. This project showcases our ability to render fabric textures, lighting, and atmospheric elements with incredible precision. The composition tells a story of sophistication and style, where every fold of fabric and play of light has been carefully considered. The environmental setting complements the subject matter, creating a cohesive visual experience that speaks to luxury and attention to detail. This render demonstrates our capability to bring fashion and lifestyle concepts to life through 3D visualization."
        image="https://i.ibb.co/tM4DxKbg/Whats-App-Image-2025-05-26-at-20-48-02-1.jpg"
        imagePosition="right"
        delay={300}
      />

      <ProjectShowcase
        title="SUITS"
        description="Another perspective on our suits collection, this visualization explores different lighting conditions and environmental contexts. The warm, atmospheric lighting creates an intimate setting that emphasizes the craftsmanship and attention to detail in both the garments and the 3D rendering process. This piece showcases our ability to create multiple variations and perspectives of the same subject matter, each telling its own unique story while maintaining consistency in quality and artistic vision."
        image="https://i.ibb.co/tMN8wnYf/Whats-App-Image-2025-05-26-at-20-48-02.jpg"
        imagePosition="right"
        delay={400}
      />

      <ProjectShowcase
        title="SUITS"
        description="The final piece in our suits trilogy demonstrates our mastery of material rendering and environmental storytelling. This visualization combines technical precision with artistic flair, creating a scene that feels both realistic and aspirational. The careful balance of textures, from the smooth fabric surfaces to the rough environmental elements, creates visual interest and depth. This project exemplifies our commitment to pushing the boundaries of what's possible in 3D visualization while maintaining the highest standards of quality and attention to detail."
        image="/placeholder.svg?height=500&width=400"
        imagePosition="right"
        delay={500}
      />
    </>
  )
}
