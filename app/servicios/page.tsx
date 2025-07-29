'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, Zap, Shield, Headphones, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'
import GlassCard from '@/components/GlassCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxContainer from '@/components/ParallaxContainer'

export default function ServiciosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')

  const plans = [
    {
      id: 'basico',
      name: 'Plan Básico',
      subtitle: 'Perfecto para PyMES y locales comerciales',
      monthlyPrice: 45000,
      annualPrice: 500000,
      savings: '85K',
      popular: false,
      color: 'gray',
      features: {
        included: [
          '1 Proyector GOBO LED 50W',
          'Instalación profesional incluida',
          'Diseño de 3 plantillas personalizadas',
          'App móvil para cambios remotos',
          'Soporte técnico básico por email',
          'Garantía de equipo 1 año',
          'Capacitación inicial 2 horas'
        ],
        notIncluded: [
          'Cambios de diseño ilimitados',
          'Soporte telefónico prioritario',
          'Mantenimiento preventivo',
          'Backup de proyector'
        ]
      },
      ideal: 'Restaurantes, locales retail, consultorios, oficinas pequeñas'
    },
    {
      id: 'premium',
      name: 'Plan Premium',
      subtitle: 'La opción más popular para medianas empresas',
      monthlyPrice: 110000,
      annualPrice: 1200000,
      savings: '120K',
      popular: true,
      color: 'gold',
      features: {
        included: [
          '2 Proyectores GOBO LED 80W',
          'Instalación + configuración avanzada',
          'Diseños ilimitados personalizados',
          'App premium con programación automática',
          'Soporte técnico 24/7 por WhatsApp',
          'Garantía extendida 2 años',
          'Mantenimiento preventivo trimestral',
          'Capacitación del equipo (4 horas)',
          'Dashboard de analytics y métricas'
        ],
        notIncluded: [
          'Proyector de respaldo',
          'Instalación en múltiples ubicaciones'
        ]
      },
      ideal: 'Cadenas retail, restaurantes, concesionarias, centros médicos'
    },
    {
      id: 'enterprise',
      name: 'Plan Enterprise',
      subtitle: 'Solución completa para grandes empresas',
      monthlyPrice: 230000,
      annualPrice: 2500000,
      savings: '260K',
      popular: false,
      color: 'gradient',
      features: {
        included: [
          'Hasta 5 proyectores GOBO LED 120W',
          'Instalación en múltiples ubicaciones',
          'Diseños y campañas ilimitadas',
          'Sistema de gestión centralizado',
          'Soporte técnico dedicado 24/7',
          'Garantía premium 3 años',
          'Mantenimiento preventivo mensual',
          'Proyector de respaldo incluido',
          'Capacitación completa del equipo (8 horas)',
          'Reportes avanzados y ROI tracking',
          'Integración con sistemas existentes'
        ],
        notIncluded: []
      },
      ideal: 'Corporaciones, cadenas nacionales, centros comerciales, municipalidades'
    }
  ]

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-magic-dark via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <ParallaxContainer speed={0.2} direction="up">
          <div className="absolute top-20 right-20 w-64 h-64 bg-magic-gold/10 rounded-full blur-3xl"></div>
        </ParallaxContainer>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-magic-gold">Servicios y Precios</span>{' '}
                <span className="text-white">Transparentes</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Elimina <strong className="text-danger-red">100% de tus residuos publicitarios</strong> y 
                ahorra <strong className="text-magic-gold"> hasta 80% en costos anuales</strong> con 
                nuestros planes diseñados para cada tipo de empresa.
              </p>
              
              {/* Back to home */}
              <div className="mt-8">
                <a 
                  href="/" 
                  className="inline-flex items-center text-magic-gold hover:text-yellow-300 transition-colors font-medium"
                >
                  ← Volver a la página principal
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Billing Toggle */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center mb-16">
              <GlassCard variant="dark" className="p-2 inline-flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-magic-gold text-magic-dark'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                    billingCycle === 'annual'
                      ? 'bg-magic-gold text-magic-dark'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Anual
                  <span className="absolute -top-2 -right-2 bg-conversion-green text-white text-xs px-2 py-1 rounded-full">
                    Ahorra más
                  </span>
                </button>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal
                key={plan.id}
                direction="up"
                delay={index * 0.2}
              >
                <GlassCard
                  variant={plan.color === 'gold' ? 'gold' : plan.color === 'gradient' ? 'gradient' : 'dark'}
                  className={`relative p-8 h-full ${
                    plan.popular ? 'ring-2 ring-magic-gold scale-105 lg:scale-110' : ''
                  }`}
                  hover={true}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-magic-gold text-magic-dark px-6 py-2 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-6">{plan.subtitle}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-magic-gold">
                        {formatPrice(getPrice(plan))}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'mes' : 'año'}
                      </span>
                    </div>

                    {billingCycle === 'annual' && (
                      <div className="text-conversion-green text-sm font-medium">
                        ✓ Ahorras {plan.savings} CLP al año
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.included.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-conversion-green mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.features.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start opacity-60">
                        <X className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div className="mb-8 p-4 bg-magic-gold/10 rounded-lg border border-magic-gold/20">
                    <h4 className="text-magic-gold font-semibold text-sm mb-2">Ideal para:</h4>
                    <p className="text-gray-300 text-sm">{plan.ideal}</p>
                  </div>

                  {/* CTA Button */}
                  <MagneticButton
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-magic-gold text-magic-dark hover:bg-yellow-300 shadow-glow'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                    magneticStrength={0.2}
                  >
                    <span className="flex items-center justify-center">
                      Solicitar Demo Gratuita
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </MagneticButton>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Info */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="text-center mt-16 max-w-4xl mx-auto">
              <GlassCard variant="dark" className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  🎯 ¿No estás seguro cuál plan elegir?
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  Nuestro equipo técnico evalúa tu ubicación <strong className="text-magic-gold">gratuitamente</strong> y 
                  te recomienda la solución más eficiente para tu negocio.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Zap className="w-8 h-8 text-magic-gold mx-auto" />
                    <p className="text-white font-semibold">Demo en 2 horas</p>
                    <p className="text-gray-400 text-sm">Instalación temporal gratuita</p>
                  </div>
                  <div className="space-y-2">
                    <Shield className="w-8 h-8 text-magic-gold mx-auto" />
                    <p className="text-white font-semibold">Sin compromiso</p>
                    <p className="text-gray-400 text-sm">Evalúa resultados reales</p>
                  </div>
                  <div className="space-y-2">
                    <Headphones className="w-8 h-8 text-magic-gold mx-auto" />
                    <p className="text-white font-semibold">Asesoría personalizada</p>
                    <p className="text-gray-400 text-sm">Plan diseñado para ti</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}