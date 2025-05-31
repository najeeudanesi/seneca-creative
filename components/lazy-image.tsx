"use client"

import Image from "next/image"
import { useState } from "react"

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function LazyImage({ src, alt, width, height, className = "", priority = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`bg-gray-200  ${
          isLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 rounded-lg ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
      />
    </div>
  )
}
