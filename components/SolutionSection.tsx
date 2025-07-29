'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Leaf, Target, Play } from 'lucide-react'

export default function SolutionSection() {
  const features = [
    {
      icon: Leaf,
      title: 'Cero Residuos',
      description: 'Solo luz. Sin plásticos, sin papel, sin desperdicios.'
    },
    {
      icon: Zap,
      title: 'Cambio Instantáneo',
      description: 'Modifica tu mensaje en segundos, no en días.'
    },
    {
      icon: Target,
      title: 'Precisión Milimétrica',
      description: 'Proyección exacta donde necesitas el máximo impacto.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-magic-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-magic-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-magic-gold rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">No Imprimimos,</span>{' '}
            <span className="text-magic-gold">Iluminamos.</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Con tecnología de <strong className="text-magic-gold">proyección GOBO LED</strong>, 
            transformamos cualquier superficie en tu canal publicitario más poderoso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual demonstration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl border border-gray-700 overflow-hidden relative shadow-2xl">
              {/* Simulated projection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic-gold/20 via-transparent to-magic-gold/10"></div>
              
              {/* Placeholder for video/diagram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-magic-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-10 h-10 text-magic-gold ml-1" />
                  </div>
                  <p className="text-gray-300 text-sm">Video demostrativo</p>
                  <p className="text-gray-500 text-xs">Ver proyección en vivo</p>
                </div>
              </div>

              {/* Animated light beam */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-magic-gold rounded-full animate-pulse-slow"></div>
              <div className="absolute top-6 right-6 w-32 h-0.5 bg-gradient-to-r from-magic-gold to-transparent opacity-60"></div>
            </div>

            {/* Technical specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-magic-gold font-bold text-lg">LED</div>
                <div className="text-gray-400 text-sm">Tecnología</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-magic-gold font-bold text-lg">50W</div>
                <div className="text-gray-400 text-sm">Consumo</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-magic-gold font-bold text-lg">24/7</div>
                <div className="text-gray-400 text-sm">Operación</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-magic-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-magic-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-magic-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-8 p-6 bg-gradient-to-r from-magic-gold/10 to-transparent rounded-xl border border-magic-gold/20"
            >
              <h4 className="text-lg font-bold text-magic-gold mb-3 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                ¿Cómo Funciona?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Un proyector LED especializado utiliza <strong>plantillas GOBO</strong> personalizadas 
                para crear imágenes nítidas y brillantes sobre cualquier superficie. 
                <strong className="text-white"> Sin contacto físico, sin residuos, máximo impacto</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Transition to next section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-400 mb-2">¿Suena demasiado bueno para ser verdad?</p>
          <p className="text-2xl font-bold text-white">
            Los <span className="text-magic-gold">números</span> hablan por sí solos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}