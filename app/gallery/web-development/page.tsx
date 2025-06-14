import HeroSection from "@/components/hero-section"
import GallerySlideshow from "@/components/gallery-slideshow"
import ProjectShowcase2 from "@/components/project-showcase2"
import AnimatedSection from "@/components/animated-section"

const galleryImages = [
  { src: "https://i.ibb.co/MDTFhrRp/Screenshot-2025-06-14-at-16-46-48.png", alt: "E-commerce Platform - Modern online shopping experience" },
  { src: "https://i.ibb.co/twDS7GWF/Screenshot-2025-06-14-at-16-47-14.png", alt: "Corporate Dashboard - Business intelligence interface" },
  { src: "https://i.ibb.co/JWK5p3LN/Screenshot-2025-06-14-at-17-19-55.png", alt: "Mobile App Interface - Responsive design showcase" },
  { src: "https://i.ibb.co/MkM8TTqL/Screenshot-2025-06-14-at-17-20-30.png", alt: "SaaS Platform - Cloud-based application interface" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Portfolio Website - Creative showcase platform" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Blog Platform - Content management system" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Landing Page - Conversion-optimized design" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Web Application - Full-stack development" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Admin Panel - Backend management interface" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Progressive Web App - Modern web technology" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Component Library - Reusable UI elements" },
  { src: "/placeholder.svg?height=600&width=1000", alt: "Design System - Comprehensive style guide" },
]

export default function WebDevelopmentGallery() {
  return (
    <>
  

      <GallerySlideshow images={galleryImages} autoPlayInterval={5000} />

      <AnimatedSection animation="fade-up" className="py-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 gradient-text">Gallery/WEB DEVELOPMENT</h1>
        </div>
      </AnimatedSection>

      <ProjectShowcase2
        title="Cotige Inventory Management System"
        description="A comprehensive e-commerce solution built with modern web technologies. This platform features a responsive design that adapts seamlessly across all devices, ensuring optimal user experience whether customers are shopping on desktop, tablet, or mobile. The intuitive interface guides users through their shopping journey with clear navigation, detailed product pages, and a streamlined checkout process. Advanced features include real-time inventory management, personalized recommendations, and integrated payment processing. The backend is powered by robust APIs that ensure fast loading times and secure transactions."
        image="https://i.ibb.co/MDTFhrRp/Screenshot-2025-06-14-at-16-46-48.png"
        imagePosition="right"
        delay={100}
      />

      <ProjectShowcase2
        title="ENTERPRISE RESOURCE PLANNING"
        description="An enterprise-grade dashboard application designed to provide comprehensive business insights at a glance. This sophisticated web application features real-time data visualization, interactive charts, and customizable widgets that allow users to monitor key performance indicators effectively. The clean, professional interface prioritizes usability while maintaining the flexibility to handle complex data sets. Built with scalability in mind, the platform can accommodate growing businesses and evolving data requirements. Advanced filtering and reporting capabilities empower decision-makers with the tools they need to drive business success."
        image="https://i.ibb.co/JWK5p3LN/Screenshot-2025-06-14-at-17-19-55.png"
        imagePosition="right"
        delay={200}
      />

      <ProjectShowcase2
        title="SAAS PLATFORM"
        description="A cutting-edge Software as a Service platform that demonstrates our expertise in building scalable, cloud-based applications. This comprehensive solution features user authentication, subscription management, and a modular architecture that supports multiple service tiers. The responsive design ensures consistent functionality across all devices, while the intuitive user interface makes complex features accessible to users of all technical levels. Advanced security measures protect user data, and the platform's API-first approach enables seamless integrations with third-party services."
        image="/placeholder.svg?height=500&width=400"
        imagePosition="right"
        delay={300}
      />

      <ProjectShowcase2
        title="PORTFOLIO SHOWCASE"
        description="A stunning portfolio website that showcases creative work through an immersive digital experience. This project demonstrates our ability to balance aesthetic appeal with functional design, creating a platform that not only looks beautiful but also effectively communicates the artist's vision and capabilities. The site features smooth animations, optimized image galleries, and an intuitive navigation system that guides visitors through the creative journey. Performance optimization ensures fast loading times, while SEO best practices help the portfolio reach its intended audience."
        image="/placeholder.svg?height=500&width=400"
        imagePosition="right"
        delay={400}
      />

      <ProjectShowcase2
        title="PROGRESSIVE WEB APP"
        description="A progressive web application designed with mobile users as the primary focus. This project showcases our expertise in creating responsive, touch-friendly interfaces that provide native app-like experiences through web browsers. The application features offline functionality, push notifications, and optimized performance for mobile networks. The design prioritizes thumb-friendly navigation and clear visual hierarchy, ensuring excellent usability on smaller screens while scaling beautifully to larger displays."
        image="/placeholder.svg?height=500&width=400"
        imagePosition="right"
        delay={500}
      />
    </>
  )
}
