'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Falabella',
      position: 'Directora de Marketing',
      content: 'Magic-Lum transformó completamente nuestro evento de lanzamiento. Las proyecciones GOBO crearon una atmósfera única que nuestros invitados aún recuerdan.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Municipalidad de Renca',
      position: 'Coordinador de Eventos',
      content: 'Profesionalismo excepcional y resultados impresionantes. La iluminación arquitectónica que implementaron elevó significativamente la calidad de nuestras celebraciones municipales.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Ana Martínez',
      company: 'CCU',
      position: 'Gerente de Experiencias',
      content: 'La atención al detalle y la innovación técnica de Magic-Lum superó nuestras expectativas. Cada proyección fue ejecutada a la perfección.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Lo que dicen</span>{' '}
            <span className="text-magic-gold">nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Descubre por qué eligen Magic-Lum para sus proyectos más importantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-magic-gold transition-all duration-300 group relative"
            >
              <div className="absolute top-4 right-4 text-magic-gold/20 group-hover:text-magic-gold/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-magic-gold rounded-full flex items-center justify-center">
                  <span className="text-magic-dark font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-magic-gold font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-magic-gold fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-magic-gold fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold ml-2">5.0</span>
            <span className="text-gray-400">• Basado en +50 proyectos</span>
          </div>
          <p className="text-gray-300">
            Únete a nuestros clientes satisfechos y transforma tu próximo evento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}