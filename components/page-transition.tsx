"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Animation variants for the dots
  const dotVariants = {
    initial: { opacity: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        delay: i * 0.2,
      },
    }),
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3 w-3 rounded-full bg-white"
                  variants={dotVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-white text-sm font-medium text-center"
            >
              Edward Gaibor
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 1 : 0 }}
      >
        {children}
      </motion.div>
    </>
  )
}
