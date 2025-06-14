import Image from "next/image"
import HeroSection from "@/components/hero-section"
import GallerySlideshow from "@/components/gallery-slideshow"

export default function ArchitectureGallery() {
  const galleryImages = [
    { src: "https://i.ibb.co/HfTQvR59/Whats-App-Image-2025-05-26-at-20-52-54-1.jpg", alt: "E-commerce Platform - Modern online shopping experience" },
    { src: "https://i.ibb.co/BDGqPjv/Whats-App-Image-2025-05-26-at-20-52-54-4.jpg", alt: "Corporate Dashboard - Business intelligence interface" },
    { src: "https://i.ibb.co/QvPXyQ38/Whats-App-Image-2025-05-26-at-20-52-53.jpg", alt: "Mobile App Interface - Responsive design showcase" },
    { src: "https://i.ibb.co/6cFdz86Q/Whats-App-Image-2025-05-26-at-20-52-54-2.jpg", alt: "SaaS Platform - Cloud-based application interface" },
    { src: "https://i.ibb.co/wZB2r5xg/Whats-App-Image-2025-05-26-at-20-52-32.jpg", alt: "Portfolio Website - Creative showcase platform" },
    { src: "https://i.ibb.co/bjjngqkq/Whats-App-Image-2025-05-26-at-20-52-32-3.jpg", alt: "Blog Platform - Content management system" },
    { src: "https://i.ibb.co/40Kvsy8/Whats-App-Image-2025-05-26-at-20-52-32-2.jpg", alt: "Landing Page - Conversion-optimized design" },
    { src: "https://i.ibb.co/gFcbHdR1/Whats-App-Image-2025-05-26-at-20-52-32-1.jpg", alt: "Web Application - Full-stack development" },
    { src: "https://i.ibb.co/4RRH007K/Whats-App-Image-2025-05-26-at-20-52-30.jpg", alt: "Admin Panel - Backend management interface" },
    { src: "https://i.ibb.co/xqvVfPYp/Whats-App-Image-2025-05-26-at-20-39-41-2.jpg", alt: "Progressive Web App - Modern web technology" },
    { src: "https://i.ibb.co/ynCD9Gs0/Whats-App-Image-2025-05-26-at-20-39-41-3.jpg", alt: "Component Library - Reusable UI elements" },
    { src: "https://i.ibb.co/k2n0PtB9/Whats-App-Image-2025-05-26-at-20-39-41-1.jpg", alt: "Design System - Comprehensive style guide" },
  ]

  return (
    <>
      <GallerySlideshow images={galleryImages} autoPlayInterval={5000} />

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div className="aspect-square relative rounded overflow-hidden" key={i}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
