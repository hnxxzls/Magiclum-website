'use client'

import { motion } from 'framer-motion'
import { Calculator, Palette, Wrench, Lightbulb } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Calculator,
      title: 'Cotiza',
      description: 'Analizamos tu proyecto y te proporcionamos una cotización detallada con especificaciones técnicas.',
      color: 'from-magic-gold to-yellow-400'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseño GOBO',
      description: 'Creamos diseños personalizados que se adaptan perfectamente a tu visión y espacio.',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Instalación',
      description: 'Nuestro equipo técnico especializado instala y calibra el sistema con precisión profesional.',
      color: 'from-orange-400 to-red-400'
    },
    {
      number: '04',
      icon: Lightbulb,
      title: 'Proyecta',
      description: 'Tu visión cobra vida con proyecciones que transforman espacios y crean experiencias únicas.',
      color: 'from-red-400 to-magic-gold'
    }
  ]

  return (
    <section id="proceso" className="py-20 bg-magic-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Nuestro</span>{' '}
            <span className="text-magic-gold">Proceso</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso estructurado y probado que garantiza resultados excepcionales 
            en cada proyecto de iluminación GOBO.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-magic-gold via-yellow-400 via-orange-400 to-magic-gold transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-24 w-0.5 h-16 bg-gradient-to-b from-magic-gold to-transparent transform -translate-x-1/2" />
                  )}
                  
                  <div className="relative bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-magic-gold transition-all duration-300 group text-center">
                    {/* Step number with gradient background */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mx-auto mb-4 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg font-bold text-magic-dark">
                        {step.number}
                      </span>
                    </div>
                    
                    <div className="w-12 h-12 bg-magic-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-magic-dark" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-magic-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-300 mb-6">
            Contáctanos hoy y descubre cómo podemos transformar tu espacio con luz.
          </p>
          <button className="bg-magic-gold text-magic-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200">
            Iniciar Proyecto
          </button>
        </motion.div>
      </div>
    </section>
  )
}