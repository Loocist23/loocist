// components/NeoCard.tsx
'use client'

import { Card } from "@heroui/react"
import { motion } from "framer-motion"

export default function NeoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card
        className={`bg-zinc-900 p-6 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.7),inset_-2px_-2px_4px_rgba(255,255,255,0.05),4px_4px_10px_rgba(0,0,0,0.6),-4px_-4px_10px_rgba(255,255,255,0.02)] transition-all duration-300 hover:scale-[1.01] ${className}`}
      >
        {children}
      </Card>
    </motion.div>
  )
}
