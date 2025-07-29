'use client'

import { motion } from 'framer-motion'
import { Eye, Leaf, Palette } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Eye,
      title: 'Impacto Visual',
      description: 'Proyecciones GOBO que transforman cualquier superficie en una obra de arte luminosa, creando experiencias visuales únicas e inolvidables.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidad',
      description: 'Tecnología LED de bajo consumo y proyecciones reutilizables que minimizan el impacto ambiental sin comprometer la calidad visual.'
    },
    {
      icon: Palette,
      title: 'Arte Urbano',
      description: 'Iluminación arquitectónica que convierte edificios y espacios públicos en lienzos artísticos, revitalizando el entorno urbano.'
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-magic-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">No imprimimos,</span>{' '}
            <span className="text-magic-gold">iluminamos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos espacios con tecnología de proyección GOBO de vanguardia, 
            creando experiencias visuales que van más allá de lo convencional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-magic-gold transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-magic-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-magic-dark" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-magic-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}