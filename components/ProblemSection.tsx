'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, X, Clock } from 'lucide-react'
import GlassCard from './GlassCard'
import ScrollReveal from './ScrollReveal'
import ParallaxContainer from './ParallaxContainer'

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      stat: '93%',
      title: 'del PVC no se recicla',
      description: 'Tu publicidad tradicional termina en vertederos, contribuyendo a la crisis ambiental.'
    },
    {
      icon: DollarSign,
      stat: '$17.500',
      title: 'CLP costo por m² de recambio',
      description: 'Cada actualización de campaña requiere nueva inversión en impresión y montaje.'
    },
    {
      icon: X,
      stat: 'CERO',
      title: 'flexibilidad de cambio',
      description: 'Una vez instalado, no puedes modificar el mensaje sin rehacer todo el proceso.'
    },
    {
      icon: Clock,
      stat: '72h+',
      title: 'tiempo de producción',
      description: 'Desde el diseño hasta la instalación, pierdes días valiosos de exposición.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-danger-red">La Publicidad Tradicional</span>{' '}
            <span className="text-white">es un Residuo</span>{' '}
            <span className="text-gray-400">Esperando a Ocurrir</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mientras tu competencia sigue contaminando con pendones y vallas, 
            tú podrías estar <strong className="text-magic-gold">proyectando el futuro</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <ScrollReveal
                key={problem.title}
                direction="up"
                delay={index * 0.2}
              >
                <GlassCard
                  variant="dark"
                  className="p-8 group hover:border-danger-red/50 transition-all duration-300"
                  hover={true}
                >
                  {/* Problem icon */}
                  <div className="w-16 h-16 bg-danger-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-danger-red/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-danger-red" />
                  </div>
                  
                  {/* Statistic */}
                  <div className="text-4xl font-bold text-danger-red mb-2">
                    {problem.stat}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-danger-red transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {problem.description}
                  </p>

                </GlassCard>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Call to action transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-magic-dark to-gray-900 rounded-2xl border border-magic-gold/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Cuánto más vas a invertir en <span className="text-danger-red">contaminar</span>?
          </h3>
          <p className="text-gray-300 text-lg">
            Existe una alternativa que <strong className="text-magic-gold">reduce costos</strong>, 
            <strong className="text-conversion-green"> elimina residuos</strong> y 
            <strong className="text-white"> multiplica el impacto</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}