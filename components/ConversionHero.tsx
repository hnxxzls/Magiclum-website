'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'
import ParallaxContainer from './ParallaxContainer'

interface ConversionHeroProps {
  onOpenDemo: () => void
}

export default function ConversionHero({ onOpenDemo }: ConversionHeroProps) {
  const clientLogos = [
    { name: 'CCU', src: '/api/placeholder/120/40' },
    { name: 'Falabella', src: '/api/placeholder/120/40' },
    { name: 'WOM', src: '/api/placeholder/120/40' },
    { name: 'Municipalidad de Renca', src: '/api/placeholder/120/40' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-magic-dark via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <ParallaxContainer speed={0.2} direction="up">
          <div className="absolute top-20 left-20 w-32 h-32 border border-magic-gold rotate-45"></div>
        </ParallaxContainer>
        <ParallaxContainer speed={0.3} direction="down">
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-magic-gold rotate-12"></div>
        </ParallaxContainer>
        <ParallaxContainer speed={0.1} direction="left">
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-magic-gold/20 blur-sm"></div>
        </ParallaxContainer>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Tu Publicidad Genera</span>{' '}
            <span className="text-danger-red">5,000 Toneladas</span>{' '}
            <span className="text-white">de Plástico al Año.</span>
            <br />
            <span className="text-magic-gold">La Nuestra, Cero.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Reemplaza pendones por <strong className="text-magic-gold">proyecciones de luz de alto impacto</strong>. 
            Sin residuos, sin instalación compleja y con <strong className="text-white">resultados medibles</strong>.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <MagneticButton
              onClick={onOpenDemo}
              className="group relative bg-magic-gold text-magic-dark text-xl font-bold px-12 py-6 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-cta hover:shadow-2xl inline-flex items-center"
              magneticStrength={0.2}
            >
              <span className="mr-3">Solicitar Demo Gratuita</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-magic-gold animate-ping opacity-20"></div>
            </MagneticButton>
            
            {/* Urgency text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-sm text-gray-400 mt-4"
            >
              ⚡ Instalación en menos de 2 horas • Sin compromiso
            </motion.p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
              TECNOLOGÍA PROBADA POR LÍDERES:
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-semibold text-sm">{logo.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-magic-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-magic-gold rounded-full mt-2 animate-bounce-gentle"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}