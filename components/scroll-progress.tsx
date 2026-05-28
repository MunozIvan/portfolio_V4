"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export function CursorGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300">
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        style={{
          left: 'var(--mouse-x, 50%)',
          top: 'var(--mouse-y, 50%)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
}
