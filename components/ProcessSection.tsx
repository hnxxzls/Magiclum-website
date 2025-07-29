'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Wrench, GraduationCap, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'
import MagneticButton from './MagneticButton'

interface ProcessSectionProps {
  onOpenDemo: () => void
}

export default function ProcessSection({ onOpenDemo }: ProcessSectionProps) {
  const steps = [
    {
      id: 1,
      icon: Phone,
      title: 'Consulta Gratuita',
      duration: '30 minutos',
      description: 'Analizamos tu negocio, ubicación y necesidades publicitarias actuales.',
      details: [
        'Evaluación de tu publicidad actual',
        'Cálculo de costos y residuos generados',
        'Identificación de oportunidades de ahorro',
        'Recomendación de plan personalizado'
      ],
      deliverable: 'Plan de implementación personalizado'
    },
    {
      id: 2,
      icon: MapPin,
      title: 'Demo In-Situ',
      duration: '2 horas',
      description: 'Instalamos temporalmente un proyector para que veas el resultado real en tu ubicación.',
      details: [
        'Instalación temporal del proyector GOBO',
        'Proyección de tu logo actual',
        'Test de visibilidad diurna y nocturna',
        'Prueba de diferentes diseños y colores'
      ],
      deliverable: 'Experiencia visual real de tu publicidad proyectada'
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Instalación Profesional',
      duration: '1-2 horas',
      description: 'Nuestros técnicos instalan el sistema definitivo con garantía completa.',
      details: [
        'Instalación no-invasiva del equipo',
        'Configuración y calibración profesional',
        'Conexión a la app móvil',
        'Pruebas de funcionamiento completas'
      ],
      deliverable: 'Sistema GOBO funcionando al 100%'
    },
    {
      id: 4,
      icon: GraduationCap,
      title: 'Capacitación y Soporte',
      duration: '1 hora + soporte continuo',
      description: 'Te enseñamos a usar el sistema y te acompañamos durante todo el proceso.',
      details: [
        'Tutorial completo de la app móvil',
        'Creación de tus primeros diseños',
        'Configuración de horarios automáticos',
        'Contacto directo para soporte 24/7'
      ],
      deliverable: 'Equipo capacitado + soporte permanente'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic-gold">Proceso Simple</span>{' '}
              <span className="text-white">en 4 Pasos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desde la primera llamada hasta ver tu logo proyectado, 
              te acompañamos en cada paso para garantizar <strong className="text-magic-gold">resultados perfectos</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            
            return (
              <div key={step.id} className="relative">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-magic-gold to-magic-gold/30 z-0"></div>
                )}
                
                <ScrollReveal direction="up" delay={index * 0.2}>
                  <div className="flex items-start space-x-8 mb-16">
                    {/* Step Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-magic-gold rounded-full flex items-center justify-center z-10 relative">
                        <Icon className="w-8 h-8 text-magic-dark" />
                      </div>
                      <div className="absolute inset-0 bg-magic-gold rounded-full animate-ping opacity-20 z-0"></div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <GlassCard
                        variant="dark"
                        className="p-8"
                        hover={true}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Main Info */}
                          <div className="lg:col-span-1">
                            <div className="flex items-center mb-4">
                              <span className="text-magic-gold font-bold text-lg mr-3">
                                Paso {step.id}
                              </span>
                              <div className="flex items-center text-gray-400 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                {step.duration}
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {step.title}
                            </h3>
                            
                            <p className="text-gray-300 leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {/* Deliverable */}
                            <div className="bg-magic-gold/10 rounded-lg p-4 border border-magic-gold/20">
                              <div className="flex items-center mb-2">
                                <CheckCircle className="w-5 h-5 text-magic-gold mr-2" />
                                <span className="text-magic-gold font-semibold text-sm">
                                  Entregable:
                                </span>
                              </div>
                              <p className="text-white text-sm">
                                {step.deliverable}
                              </p>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="lg:col-span-2">
                            <h4 className="text-white font-semibold mb-4">
                              ¿Qué incluye este paso?
                            </h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start">
                                  <ArrowRight className="w-4 h-4 text-magic-gold mt-1 mr-3 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">
                                    {detail}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-16">
            <GlassCard variant="gold" className="max-w-4xl mx-auto p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                ¿Listo para Comenzar? <span className="text-magic-gold">El Paso 1 es Gratis</span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                La consulta inicial no tiene costo y te damos un <strong className="text-white">análisis completo</strong> 
                de tu situación actual + <strong className="text-magic-gold">plan personalizado</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <MagneticButton
                  onClick={onOpenDemo}
                  className="bg-magic-gold text-magic-dark text-xl font-bold px-12 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-glow"
                  magneticStrength={0.3}
                >
                  <span className="flex items-center">
                    Iniciar Proceso Ahora
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </span>
                </MagneticButton>

                <div className="text-gray-400 text-sm">
                  <div className="flex items-center justify-center space-x-4">
                    <span>✓ Sin compromiso</span>
                    <span>✓ Evaluación gratuita</span>
                    <span>✓ Respuesta en 24h</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}