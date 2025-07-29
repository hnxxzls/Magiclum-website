'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  magneticStrength?: number
  disabled?: boolean
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  magneticStrength = 0.3,
  disabled = false
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * magneticStrength
    const deltaY = (e.clientY - centerY) * magneticStrength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      data-cursor="hover"
    >
      <motion.div
        className="relative z-10"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.1
        }}
      >
        {children}
      </motion.div>

      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-magic-gold/20 to-transparent opacity-0"
        whileHover={disabled ? {} : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit"
        whileTap={disabled ? {} : {
          scale: [1, 1.2],
          opacity: [0.5, 0],
        }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 216, 0, 0.3) 0%, transparent 70%)',
        }}
      />
    </motion.button>
  )
}