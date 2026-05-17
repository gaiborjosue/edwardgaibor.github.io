"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, ExternalLink, Linkedin, Crown } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type LatestProject = {
  title: string
  description: string
  image: string
  imageAlt: string
  live: string
  githubLinks: {
    href: string
    label: string
  }[]
  award?: boolean
  status?: string
}

const latestProjects: LatestProject[] = [
  {
    title: "Salomon Transcribe",
    description:
      "Live stream or microphone transcription and Spanish-to-English translation with RTMP or direct livestream sources through Mux. Built with Next.js and Qwen transcription/translation models.",
    image: "/projects/salomon.gif",
    imageAlt: "Salomon Transcribe live transcription app preview",
    githubLinks: [
      {
        href: "https://github.com/gaiborjosue/salomon-transcribe",
        label: "Salomon Transcribe GitHub",
      },
    ],
    live: "https://salomon-gamma.vercel.app/",
    status: "in progress",
  },
  {
    title: "SliceDrop Reloaded",
    description:
      "Niivue-based medical image viewer fork with client-side WebSocket/WebRTC sharing, plus slicedrop-cli for sharing NIfTI files from terminal-only cluster environments through Dropbox-backed URLs.",
    image: "/projects/slicedrop.gif",
    imageAlt: "SliceDrop Reloaded medical image viewer preview",
    githubLinks: [
      {
        href: "https://github.com/gaiborjosue/slicedrop.github.com",
        label: "SliceDrop Reloaded fork GitHub",
      },
      {
        href: "https://github.com/gaiborjosue/slicedrop-cli",
        label: "slicedrop-cli GitHub",
      },
    ],
    live: "https://gaiborjosue.github.io/slicedrop.github.com/reloaded/",
  },
  {
    title: "Elara AI",
    description:
      "AI chat that recommends herbal remedies and recipes. Winner of the Google Cloud x MongoDB hackathon, 3rd place among 7k participants.",
    image: "/projects/elara.jpg",
    imageAlt: "Elara AI app preview",
    githubLinks: [
      {
        href: "https://github.com/gaiborjosue/elaraFrontend",
        label: "Elara AI GitHub",
      },
    ],
    live: "https://elarafrontend-114195159699.us-east1.run.app/",
    award: true,
  },
  {
    title: "QR Pigeon",
    description:
      "No-signup image-sharing tool: scan a QR code, upload from your phone, and grab the image on desktop.",
    image: "/projects/qrpigeon.gif",
    imageAlt: "QR Pigeon image-sharing app preview",
    githubLinks: [
      {
        href: "https://github.com/leiDnedyA/qr-image-drop",
        label: "QR Pigeon GitHub",
      },
    ],
    live: "https://www.qrpigeon.pics",
  },
  {
    title: "Boostlet.js",
    description:
      "Image processing plugins for the web via JavaScript injection, with integrations for medical imaging viewers.",
    image: "/projects/boostlet.gif",
    imageAlt: "Boostlet.js web image-processing demo",
    githubLinks: [
      {
        href: "https://github.com/FNNDSC/boostlet",
        label: "Boostlet.js GitHub",
      },
    ],
    live: "https://boostlet.org/",
  },
  {
    title: "Web-based Melanoma Detection",
    description:
      "Browser-based CNN for skin-cancer detection using TensorFlow.js with image upload and camera input.",
    image: "/projects/melanoma.gif",
    imageAlt: "Web-based melanoma detection demo",
    githubLinks: [
      {
        href: "https://github.com/mpsych/melanoma",
        label: "Web-based Melanoma Detection GitHub",
      },
    ],
    live: "https://mpsych.github.io/melanoma/",
  },
]

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
          <Link href="/work-experience" className="hover:text-gray-300 transition-colors text-center">
            experience
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
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10 border-1 border-gray-800 grayscale">
                <AvatarImage src="/avatar.png" alt="Edward Gaibor" />
                <AvatarFallback>EG</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold">Edward Gaibor</h1>
            </div>
            <div className="flex shrink-0 items-center gap-4">
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
          </div>
          <p className="text-gray-300 leading-relaxed">
            Currently working at <a href="https://www.johnhancock.com/index.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">John Hancock - Manulife</a> on the GenAI team as a part-time Software Engineer, focusing on full
            stack development. Graduating with a Computer Science degree from <a href="https://www.umb.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">UMass Boston</a> in Spring 2026. I am also currently a LINC Research Fellow at Harvard & MGH. Research experience at MIT "NoBrainer" <a href="https://sensein.group/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Sensein Group</a> and UMB's <a href="https://mpsych.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Machine Psycology lab</a>. I like to travel, hike, run and learn about photography.
          </p>
        </header>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">Latest Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestProjects.map((project) => (
              <article key={project.title} className="group">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/9] overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-colors group-hover:border-gray-700"
                  aria-label={`Open ${project.title}`}
                >
                  {project.status && (
                    <Badge
                      variant="outline"
                      className="absolute left-2 top-2 z-10 border-gray-700 bg-black/70 px-2 py-0.5 text-[10px] font-medium uppercase text-gray-200 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  )}
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={700}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover grayscale transition duration-300 group-hover:opacity-80"
                  />
                </Link>
                <div className="mt-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      {project.title}
                      {project.award && <Crown className="h-4 w-4 text-yellow-400" aria-label="Awarded project" />}
                    </h3>
                    <div className="flex shrink-0 gap-3 pt-1">
                      {project.githubLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label={link.label}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      ))}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
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
