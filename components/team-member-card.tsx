import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import LazyImage from "./lazy-image"

interface TeamMemberCardProps {
  name: string
  position: string
  bio: string
  image: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export default function TeamMemberCard({ name, position, bio, image, socialLinks = {} }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
        <LazyImage src={image || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="gradient-text mb-2">{position}</p>
      <p className="text-sm text-gray-600 mb-4">{bio}</p>

      <div className="flex space-x-3">
        {socialLinks.facebook && (
          <Link href={socialLinks.facebook} aria-label={`${name}'s Facebook`}>
            <Facebook className="h-4 w-4 text-gray-600 hover:text-orange-500 transition-colors" />
          </Link>
        )}
        {socialLinks.twitter && (
          <Link href={socialLinks.twitter} aria-label={`${name}'s Twitter`}>
            <Twitter className="h-4 w-4 text-gray-600 hover:text-orange-500 transition-colors" />
          </Link>
        )}
        {socialLinks.instagram && (
          <Link href={socialLinks.instagram} aria-label={`${name}'s Instagram`}>
            <Instagram className="h-4 w-4 text-gray-600 hover:text-orange-500 transition-colors" />
          </Link>
        )}
        {socialLinks.linkedin && (
          <Link href={socialLinks.linkedin} aria-label={`${name}'s LinkedIn`}>
            <Linkedin className="h-4 w-4 text-gray-600 hover:text-orange-500 transition-colors" />
          </Link>
        )}
      </div>
    </div>
  )
}
