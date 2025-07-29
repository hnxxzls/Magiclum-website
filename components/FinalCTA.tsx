'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Shield, Gift } from 'lucide-react'

interface FinalCTAProps {
  onOpenDemo: () => void
}

export default function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  const guarantees = [
    {
      icon: Clock,
      title: 'Instalación en 2 horas',
      description: 'Setup rápido y profesional'
    },
    {
      icon: Shield,
      title: 'Sin compromiso',
      description: 'Demo completamente gratuita'
    },
    {
      icon: Gift,
      title: 'Bonus incluido',
      description: 'Análisis de ubicación gratis'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-magic-dark to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-magic-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-magic-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Agenda una</span>{' '}
            <span className="text-magic-gold">Demo Gratuita</span>
            <br />
            <span className="text-white">y Ve Tu Propio Logo</span>{' '}
            <span className="text-magic-gold">Proyectado</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nuestro equipo técnico instala un proyector en tu fachada o local 
            para que <strong className="text-white">veas el potencial en vivo</strong>. 
            <strong className="text-magic-gold"> Sin costo ni compromiso</strong>.
          </p>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-magic-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-magic-gold/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-magic-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-magic-gold transition-colors duration-300">
                  {guarantee.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {guarantee.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <button
            onClick={onOpenDemo}
            className="group relative bg-magic-gold text-magic-dark text-2xl font-bold px-16 py-6 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-cta hover:shadow-2xl inline-flex items-center"
          >
            <span className="mr-4">Solicitar Mi Demo Gratuita Ahora</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Multiple animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-magic-gold animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full border-2 border-magic-gold animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
          </button>
        </motion.div>

        {/* Urgency and Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-magic-gold font-semibold text-lg">
            ⚡ Últimas 5 demos del mes disponibles
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-conversion-green rounded-full mr-2 animate-pulse"></div>
              50+ empresas confían en nosotros
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-conversion-green rounded-full mr-2 animate-pulse"></div>
              Respuesta garantizada en 24h
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-conversion-green rounded-full mr-2 animate-pulse"></div>
              100% sin compromiso
            </span>
          </div>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 text-center"
        >
          <h3 className="text-lg font-bold text-white mb-3">
            ¿Aún tienes dudas? Te entendemos.
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Por eso ofrecemos una <strong className="text-magic-gold">demostración real</strong> en tu ubicación. 
            Ver es creer, y nosotros estamos seguros de que una vez veas la proyección en vivo, 
            <strong className="text-white"> entenderás por qué somos el futuro de la publicidad exterior</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}