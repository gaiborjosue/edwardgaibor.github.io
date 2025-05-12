"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: {
    src: string
    alt: string
    title: string
    location: string
  }[]
  initialIndex: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageLightbox({ images, initialIndex, open, onOpenChange }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  const currentImage = images[currentIndex]

  const handlePrevious = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      switch (e.key) {
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          break
        case "Escape":
          onOpenChange(false)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, onOpenChange])

  // Reset current index when dialog opens
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex)
      setIsLoading(true)
    }
  }, [initialIndex, open])

  if (!currentImage) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95 sm:rounded-lg overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-50 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Image container */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                width={1200}
                height={675}
                className="max-h-[80vh] w-auto object-contain"
                priority
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full border-4 border-t-transparent border-white animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Image info */}
          <div className="p-4 bg-black text-white">
            <h2 className="text-xl font-medium">{currentImage.title}</h2>
            <p className="text-gray-400">{currentImage.location}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
