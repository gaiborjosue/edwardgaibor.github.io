import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"

import { SmoothCursor } from "@/components/ui/smooth-cursor";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edward Gaibor | Portfolio",
  description: "Personal web portfolio of Edward Gaibor showcasing projects and photography",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <SmoothCursor />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
