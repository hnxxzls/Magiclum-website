'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gold' | 'gradient'
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  border?: boolean
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  blur = 'md',
  border = true,
  hover = true
}: GlassCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-black/20 text-white'
      case 'gold':
        return 'bg-magic-gold/10 text-white border-magic-gold/30'
      case 'gradient':
        return 'bg-gradient-to-br from-magic-gold/10 via-transparent to-black/20 text-white'
      default:
        return 'bg-white/10 text-white'
    }
  }

  const getBlurClass = () => {
    switch (blur) {
      case 'sm':
        return 'backdrop-blur-sm'
      case 'lg':
        return 'backdrop-blur-lg'
      case 'xl':
        return 'backdrop-blur-xl'
      default:
        return 'backdrop-blur-md'
    }
  }

  const borderClass = border ? 'border border-white/20' : ''
  const variantClasses = getVariantClasses()
  const blurClass = getBlurClass()

  return (
    <motion.div
      className={`
        ${variantClasses}
        ${blurClass}
        ${borderClass}
        rounded-xl shadow-glass
        ${hover ? 'hover:bg-white/20 transition-all duration-300' : ''}
        ${className}
      `}
      {...(hover && {
        whileHover: { 
          scale: 1.02,
          y: -5,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }
      })}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Additional glow effect for gold variant */}
      {variant === 'gold' && (
        <div className="absolute inset-0 rounded-xl bg-magic-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.div>
  )
}