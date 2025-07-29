'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Eye, X } from 'lucide-react'
import GlassCard from './GlassCard'
import MagneticButton from './MagneticButton'
import ScrollReveal from './ScrollReveal'

interface BeforeAfterGalleryProps {
  onOpenDemo: () => void
}

export default function BeforeAfterGallery({ onOpenDemo }: BeforeAfterGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const cases = [
    {
      id: 1,
      title: 'Restaurante Centro Histórico',
      location: 'Santiago Centro',
      industry: 'Gastronomía',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      beforeTitle: 'Pendones deteriorados',
      afterTitle: 'Proyección GOBO premium',
      results: {
        savings: '$1.2M CLP/año',
        wasteReduced: '2.3 toneladas',
        efficiency: '+45% visibilidad nocturna'
      },
      description: 'Eliminamos 8 pendones que se deterioraban cada 3 meses por proyección LED permanente.'
    },
    {
      id: 2,
      title: 'Concesionaria Automotriz',
      location: 'Las Condes',
      industry: 'Automotriz',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      beforeTitle: 'Vallas estáticas costosas',
      afterTitle: 'Promociones dinámicas LED',
      results: {
        savings: '$2.8M CLP/año',
        wasteReduced: '4.1 toneladas',
        efficiency: '+62% conversión ofertas'
      },
      description: 'Reemplazamos vallas promocionales por sistema que actualiza ofertas al instante.'
    },
    {
      id: 3,
      title: 'Cadena de Farmacias',
      location: 'Región Metropolitana',
      industry: 'Retail Salud',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      beforeTitle: 'Letreros múltiples locales',
      afterTitle: 'Sistema centralizado GOBO',
      results: {
        savings: '$3.5M CLP/año',
        wasteReduced: '6.8 toneladas',
        efficiency: '+38% reconocimiento marca'
      },
      description: 'Sistema unificado en 12 locales con control remoto centralizado.'
    },
    {
      id: 4,
      title: 'Centro Comercial',
      location: 'Providencia',
      industry: 'Retail',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      beforeTitle: 'Señalética tradicional',
      afterTitle: 'Wayfinding interactivo',
      results: {
        savings: '$4.2M CLP/año',
        wasteReduced: '8.9 toneladas',
        efficiency: '+55% flujo peatonal'
      },
      description: 'Señalización dinámica que se adapta a eventos y promociones especiales.'
    }
  ]

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % cases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, cases.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % cases.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + cases.length) % cases.length)
  }

  const currentCase = cases[currentSlide]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic-gold">Transformaciones Reales</span>{' '}
              <span className="text-white">Antes vs Después</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ve cómo empresas líderes <strong className="text-magic-gold">eliminaron residuos</strong> y 
              <strong className="text-white"> aumentaron su impacto visual</strong> con Magic-Lum.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Gallery */}
        <div className="max-w-7xl mx-auto">
          <GlassCard variant="dark" className="overflow-hidden">
            <div className="relative">
              {/* Header with controls */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {currentCase.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>📍 {currentCase.location}</span>
                      <span>🏢 {currentCase.industry}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* Auto-play toggle */}
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="flex items-center space-x-2 text-gray-400 hover:text-magic-gold transition-colors"
                    >
                      {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span className="text-sm">{isAutoPlay ? 'Pausar' : 'Reproducir'}</span>
                    </button>

                    {/* Navigation */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 text-gray-400 hover:text-magic-gold transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-gray-400 text-sm">
                        {currentSlide + 1} / {cases.length}
                      </span>
                      <button
                        onClick={nextSlide}
                        className="p-2 text-gray-400 hover:text-magic-gold transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Images */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Before */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-danger-red/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-danger-red/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <X className="w-10 h-10 text-danger-red" />
                        </div>
                        <p className="text-white font-semibold text-lg">ANTES</p>
                        <p className="text-gray-300 text-sm mt-2">{currentCase.beforeTitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-danger-red/90 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ ANTES
                  </div>
                </div>

                {/* After */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-magic-gold/20 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-magic-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Eye className="w-10 h-10 text-magic-gold" />
                        </div>
                        <p className="text-white font-semibold text-lg">DESPUÉS</p>
                        <p className="text-gray-300 text-sm mt-2">{currentCase.afterTitle}</p>
                      </div>
                    </div>
                    
                    {/* Animated light beam effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magic-gold/20 to-transparent animate-pulse"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-magic-gold/90 text-magic-dark px-3 py-1 rounded-full text-sm font-bold">
                    ✅ DESPUÉS
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <h4 className="text-white font-bold text-lg mb-2">Descripción</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {currentCase.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <h4 className="text-white font-bold text-lg mb-4">Resultados Medibles</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-magic-gold/10 rounded-lg p-4 border border-magic-gold/20">
                        <div className="text-magic-gold font-bold text-xl mb-1">
                          {currentCase.results.savings}
                        </div>
                        <div className="text-gray-300 text-sm">Ahorro anual</div>
                      </div>
                      
                      <div className="bg-conversion-green/10 rounded-lg p-4 border border-conversion-green/20">
                        <div className="text-conversion-green font-bold text-xl mb-1">
                          {currentCase.results.wasteReduced}
                        </div>
                        <div className="text-gray-300 text-sm">Residuos eliminados</div>
                      </div>
                      
                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                        <div className="text-blue-400 font-bold text-xl mb-1">
                          {currentCase.results.efficiency}
                        </div>
                        <div className="text-gray-300 text-sm">Mejora clave</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {cases.map((caseItem, index) => (
              <motion.button
                key={caseItem.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-magic-gold shadow-glow'
                    : 'border-gray-700 hover:border-magic-gold/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-magic-gold font-bold text-lg mb-1">
                      {caseItem.industry}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {caseItem.location}
                    </div>
                  </div>
                </div>
                
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-magic-gold/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-magic-gold rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-magic-dark" />
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal direction="up" delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-magic-gold/10 via-transparent to-magic-gold/10 p-8 rounded-2xl border border-magic-gold/20">
                <h3 className="text-3xl font-bold text-white mb-4">
                  ¿Quieres ser nuestro próximo <span className="text-magic-gold">caso de éxito</span>?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Instalaremos un sistema temporal en tu ubicación para que veas 
                  <strong className="text-magic-gold"> resultados reales</strong> antes de decidir.
                </p>
                
                <MagneticButton
                  onClick={onOpenDemo}
                  className="bg-magic-gold text-magic-dark text-xl font-bold px-12 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-glow inline-flex items-center"
                  magneticStrength={0.3}
                >
                  <span className="mr-3">Ver Mi Transformación</span>
                  <ArrowRight className="w-6 h-6" />
                </MagneticButton>
                
                <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-400">
                  <span>✓ Demo gratuita</span>
                  <span>✓ Instalación en 2 horas</span>
                  <span>✓ Sin compromiso</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}