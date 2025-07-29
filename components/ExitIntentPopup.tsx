'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calculator, Gift, Clock, ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'
import GlassCard from './GlassCard'

interface ExitIntentPopupProps {
  onOpenDemo: () => void
}

export default function ExitIntentPopup({ onOpenDemo }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let hasTriggered = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered && !hasShown) {
        hasTriggered = true
        setIsVisible(true)
        setHasShown(true)
      }
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > 70 && !hasTriggered && !hasShown) {
        hasTriggered = true
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // Show after 45 seconds if no interaction
    timeoutId = setTimeout(() => {
      if (!hasTriggered && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 45000)

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleCTA = () => {
    setIsVisible(false)
    onOpenDemo()
  }

  const benefits = [
    {
      icon: Calculator,
      title: 'Análisis Gratuito',
      description: 'Calculamos tu ahorro exacto vs publicidad tradicional'
    },
    {
      icon: Gift,
      title: '30% Descuento',
      description: 'Solo por solicitar demo hoy (oferta limitada)'
    },
    {
      icon: Clock,
      title: 'Demo en 48h',
      description: 'Instalación temporal para que veas resultados reales'
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full"
          >
            <GlassCard variant="gradient" className="p-8 relative overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic-gold/20 via-transparent to-magic-gold/10"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-magic-gold/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-magic-gold/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-16 h-16 bg-magic-gold rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Gift className="w-8 h-8 text-magic-dark" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ¡Espera! <span className="text-magic-gold">Oferta Exclusiva</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Antes de irte... ¿quieres saber <strong className="text-magic-gold">cuánto puedes ahorrar</strong> 
                    eliminando tus residuos publicitarios?
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 bg-magic-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-6 h-6 text-magic-gold" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Urgency */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-danger-red/20 border border-danger-red/30 rounded-lg p-4 mb-8 text-center"
                >
                  <p className="text-danger-red font-bold mb-2">⚠️ Solo disponible HOY</p>
                  <p className="text-white text-sm">
                    El descuento del 30% expira a las 23:59. Solo quedan 3 demos disponibles esta semana.
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-center"
                >
                  <MagneticButton
                    onClick={handleCTA}
                    className="bg-magic-gold text-magic-dark text-xl font-bold px-12 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-glow inline-flex items-center mb-4"
                    magneticStrength={0.3}
                  >
                    <span className="mr-3">Sí, Quiero Mi Análisis + 30% OFF</span>
                    <ArrowRight className="w-6 h-6" />
                  </MagneticButton>

                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <span>✓ 100% Gratis</span>
                    <span>✓ Sin compromiso</span>
                    <span>✓ Respuesta en 24h</span>
                  </div>
                </motion.div>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-center mt-6 pt-6 border-t border-gray-700"
                >
                  <p className="text-gray-400 text-sm">
                    🔥 <strong className="text-magic-gold">847 empresas</strong> ya eliminaron sus residuos con nosotros
                  </p>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}