"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function NotFound() {
  const [lowercaseHref, setLowercaseHref] = useState<string | null>(null)

  useEffect(() => {
    const { origin, pathname, search, hash } = window.location
    const lowercasePath = pathname.toLowerCase()

    if (pathname !== lowercasePath) {
      const nextHref = `${origin}${lowercasePath}${search}${hash}`
      setLowercaseHref(nextHref)
      window.location.replace(nextHref)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 text-center">
        <p className="mb-2 text-sm uppercase text-gray-500">404</p>
        <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
        <p className="mb-6 text-gray-400">
          {lowercaseHref ? "Redirecting to the lowercase URL..." : "That page does not exist."}
        </p>
        <Link href="/" className="text-gray-400 transition-colors hover:text-white">
          Back to home
        </Link>
      </div>
    </main>
  )
}
