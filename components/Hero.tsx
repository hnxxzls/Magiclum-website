'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

interface HeroProps {
  onOpenModal: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const scrollToServices = () => {
    const element = document.getElementById('servicios')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Haz visible</span>{' '}
          <span className="text-magic-gold">lo invisible</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Especialistas en proyección GOBO y iluminación arquitectónica. 
          Transformamos espacios con luz y arte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onOpenModal}
            className="bg-magic-gold text-magic-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
          >
            Cotizar Proyecto
          </button>
          
          <button
            onClick={scrollToServices}
            className="border-2 border-magic-gold text-magic-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-magic-gold hover:text-magic-dark transition-all duration-200 transform hover:scale-105"
          >
            Ver Servicios
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToServices}
          className="text-magic-gold hover:text-yellow-400 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}