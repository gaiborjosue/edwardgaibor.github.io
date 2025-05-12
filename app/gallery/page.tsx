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
      location: "Ecuador · 2024",
    },
    {
      src: "/gallery/waterfall-cave.jpeg",
      alt: "Waterfall viewed from inside a cave",
      title: "Behind the Falls",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/canyon-waterfall.jpeg",
      alt: "Waterfall flowing through a rocky canyon",
      title: "Canyon Falls",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/mountain-valley.jpeg",
      alt: "Mountain valley landscape with clear blue sky",
      title: "Highland Valley",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/rocky-landscape.jpeg",
      alt: "Rocky volcanic landscape with bright sun",
      title: "Volcanic Terrain",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/green-valley.jpeg",
      alt: "Lush green valley with agricultural fields surrounded by mountains",
      title: "Emerald Valley",
      location: "Quito, Ecuador · 2024",
    },
    {
      src: "/gallery/trail-sign.jpeg",
      alt: "Trail sign in a barren landscape with mountains",
      title: "Crossroads",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_0745.jpg",
      alt: "Blue water lagoon with a rocky walls.",
      title: "Blue Lagoon Retreat Spa",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_1221.JPEG",
      alt: "Waterfall with snow and ice",
      title: "Gullfoss Waterfall",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_1320.JPEG",
      alt: "Industrial hall with a door.",
      title: "Blue Lagoon Retreat Spa",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_1576.JPG",
      alt: "Engraved rock sitting in snow with the ocean and mountains in the background.",
      title: "Hvammsvik",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_1599.JPG",
      alt: "Mountain view covered in snow",
      title: "Reykjavik - Kjalarn-dreifb",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_2140.JPEG",
      alt: "Mountain view and road covered in snow",
      title: "Kjosarhreppur",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_2146.JPEG",
      alt: "Winter ocean view from a wooden deck and a mountain in the background.",
      title: "Hvammsvik",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_2471.JPEG",
      alt: "Glass cabin with a mountain view.",
      title: "Glass Cabin - Borgarnes",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_3690.JPEG",
      alt: "Glacier view from down-up perspective.",
      title: "Myrdalsjokull Glacier",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_3790.JPEG",
      alt: "Glacier view and horizon.",
      title: "Myrdalsjokull Glacier",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_3913.JPEG",
      alt: "Waterfall view with a bird flying.",
      title: "Skogafoss Waterfall",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_4076.JPEG",
      alt: "Highland valley with a mountain view.",
      title: "Rangarping Ytra",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_4120.JPEG",
      alt: "Sunny highland mountainv iew.",
      title: "Rangarping Ytra",
      location: "Iceland · 2024",
    },
    {
      src: "/gallery/IMG_5433.JPEG",
      alt: "Mountain view with a lake.",
      title: "Waterville Valley",
      location: "New Hampshire · 2024",
    },
    {
      src: "/gallery/IMG_5560.JPEG",
      alt: "Road view with mountain and sky in the background.",
      title: "Grindavik",
      location: "Iceland · 2025",
    },
    {
      src: "/gallery/IMG_5574.JPEG",
      alt: "Snowy mountain view with a car and human.",
      title: "Reykjanesfolkvangur",
      location: "Iceland · 2025"
    },
    {
      src: "/gallery/IMG_8756.JPEG",
      alt: "Moss-covered mountain view.",
      title: "National Park Cajas",
      location: "Ecuador · 2024",
    },
    {
      src: "/gallery/IMG_9793.JPEG",
      alt: "Cambridge skyline view during sunset.",
      title: "Cambridge",
      location: "Massachusetts · 2024",
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
