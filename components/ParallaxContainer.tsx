'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
      default:
        return useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
    }
  }

  const transform = getTransform()
  const springTransform = useSpring(transform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const getStyleTransform = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: springTransform }
    }
    return { y: springTransform }
  }

  return (
    <div ref={containerRef} className={className}>
      <motion.div
        style={getStyleTransform()}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}