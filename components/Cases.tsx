'use client'

import { motion } from 'framer-motion'
import { Building, ShoppingBag, Calendar, MapPin } from 'lucide-react'

export default function Cases() {
  const cases = [
    {
      icon: Building,
      title: 'Municipalidad de Renca',
      category: 'Sector Público',
      description: 'Iluminación arquitectónica para eventos municipales y festividades locales.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: ShoppingBag,
      title: 'Marcas Premium',
      category: 'CCU & Falabella',
      description: 'Proyecciones corporativas para lanzamientos de productos y eventos VIP.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: Calendar,
      title: 'Eventos Masivos',
      category: 'Entretenimiento',
      description: 'Espectáculos de luz sincronizados para conciertos y festivales.',
      image: '/api/placeholder/400/300'
    },
    {
      icon: MapPin,
      title: 'Espacios Comerciales',
      category: 'Retail & Hospitalidad',
      description: 'Ambientación lumínica para centros comerciales y hoteles.',
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <section id="casos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-magic-gold">Casos de Éxito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hemos trabajado con organizaciones líderes, transformando sus espacios 
            y eventos con soluciones de iluminación innovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-magic-gold transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-magic-gold/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-magic-gold/50" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-magic-gold bg-magic-gold/10 px-3 py-1 rounded-full">
                      {caseItem.category}
                    </span>
                    <Icon className="w-6 h-6 text-magic-gold" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-magic-gold transition-colors duration-300">
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <button className="bg-magic-gold text-magic-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200">
            Ver Más Proyectos
          </button>
        </motion.div>
      </div>
    </section>
  )
}