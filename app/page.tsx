"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, Twitter, Youtube, ExternalLink, Linkedin } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Navigation */}
        <nav className="flex justify-center space-x-6 mb-16">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            about
          </Link>
          <Link href="/work-experience" className="hover:text-gray-300 transition-colors">
            work experience
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors">
            projects
          </Link>
          <Link href="/gallery" className="hover:text-gray-300 transition-colors">
            gallery
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-10 w-10 border-1 border-gray-800 grayscale">
              <AvatarImage src="/avatar.png" alt="Edward Gaibor" />
              <AvatarFallback>EG</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">Edward Gaibor</h1>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Currently working at <a href="https://www.johnhancock.com/index.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">John Hancock - Manulife</a> GenAI team as a Software Engineer Part-time, focusing on full
            stack development. Studying Computer Science at <a href="https://www.umb.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">UMass Boston</a>. Research experience at MIT "NoBrainer" <a href="https://sensein.group/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Sensein Group</a> and UMB's <a href="https://mpsych.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Machine Psycology lab</a>. I like to travel, hike, run and learn about photography.
          </p>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">Featured Projects</h2>

          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-start">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-medium">QR Pigeon</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/leiDnedyA/qr-image-drop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    No-signup image-sharing tool: scan a QR code on your phone, upload, then refresh the desktop page to
                    grab the image. Built with Flask, Python, and HTML/CSS/JS.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-start">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-medium">Boostlet.js</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/FNNDSC/boostlet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                      <a
                        href="https://boostlet.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    Image processing plugins for the web via JavaScript injection. Enhanced integration with frameworks
                    like Xtk.js, Papaya.js, and Niivue.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-start">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-medium">Web-based Melanoma Detection</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/mpsych/melanoma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                      <a
                        href="https://mpsych.github.io/melanoma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    Browser-based CNN for skin-cancer detection using TensorFlow.js. Upload images or use your camera
                    for real-time detection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/projects" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 hover:opacity-80 transition-opacity">
              <Link href="/gallery">
                <Image
                  src="/gallery/waterfall-cave.jpeg"
                  alt="Waterfall viewed from inside a cave"
                  width={700}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
              </Link>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 hover:opacity-80 transition-opacity">
              <Link href="/gallery">
                <Image
                  src="/gallery/mountain-valley.jpeg"
                  alt="Mountain valley landscape"
                  width={700}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
              </Link>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 hover:opacity-80 transition-opacity">
              <Link href="/gallery">
                <Image
                  src="/gallery/green-valley.jpeg"
                  alt="Green valley with mountains"
                  width={700}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
              </Link>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 hover:opacity-80 transition-opacity">
              <Link href="/gallery">
                <Image
                  src="/gallery/trail-sign.jpeg"
                  alt="Trail sign in mountain landscape"
                  width={700}
                  height={400}
                  className="w-full h-full object-cover grayscale"
                />
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/gallery" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
              View full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to top
          </button>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-800">
          <div className="flex space-x-6 justify-center">
            <a
              href="https://github.com/gaiborjosue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/edwardgaibor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
