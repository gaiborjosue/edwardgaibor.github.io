"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Create gallery images array with your actual photos
  const galleryImages = [
    {
      src: "/gallery/landscape-1.jpeg",
      alt: "Landscape view of a town with mountains",
      title: "Mountain Town Vista",
      location: "Ecuador · 2023",
    },
    {
      src: "/gallery/waterfall-cave.jpeg",
      alt: "Waterfall viewed from inside a cave",
      title: "Behind the Falls",
      location: "Iceland · 2023",
    },
    {
      src: "/gallery/canyon-waterfall.jpeg",
      alt: "Waterfall flowing through a rocky canyon",
      title: "Canyon Falls",
      location: "Iceland · 2023",
    },
    {
      src: "/gallery/mountain-valley.jpeg",
      alt: "Mountain valley landscape with clear blue sky",
      title: "Highland Valley",
      location: "Iceland · 2023",
    },
    {
      src: "/gallery/rocky-landscape.jpeg",
      alt: "Rocky volcanic landscape with bright sun",
      title: "Volcanic Terrain",
      location: "Iceland · 2023",
    },
    {
      src: "/gallery/green-valley.jpeg",
      alt: "Lush green valley with agricultural fields surrounded by mountains",
      title: "Emerald Valley",
      location: "Ecuador · 2022",
    },
    {
      src: "/gallery/trail-sign.jpeg",
      alt: "Trail sign in a barren landscape with mountains",
      title: "Crossroads",
      location: "Iceland · 2023",
    },
    {
      src: "/gallery/dark-glacier.jpeg",
      alt: "Dark landscape with glacier and volcanic rock",
      title: "Glacier's Edge",
      location: "Iceland · 2023",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Photography Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="overflow-hidden rounded-2xl bg-gray-900 aspect-[16/9]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={700}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{image.title}</h3>
                <p className="text-sm text-gray-400">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      <ImageLightbox
        images={galleryImages}
        initialIndex={selectedImageIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </div>
  )
}
