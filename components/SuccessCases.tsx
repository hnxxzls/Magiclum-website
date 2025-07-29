'use client'

import { motion } from 'framer-motion'
import { Building, ShoppingBag, TrendingUp, Quote } from 'lucide-react'
import GlassCard from './GlassCard'
import ScrollReveal from './ScrollReveal'
import ParallaxContainer from './ParallaxContainer'

export default function SuccessCases() {
  const cases = [
    {
      id: 'retail-chain',
      icon: ShoppingBag,
      title: 'Cadena de Supermercados',
      category: 'Retail Chile',
      result: '$2.1M CLP ahorrados anualmente',
      detail: 'Eliminamos 847 pendones/año que costaban $2.8M CLP. Con GOBO gastamos solo $680K CLP total (equipo + electricidad).',
      metrics: '74% reducción de costos',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'restaurant',
      icon: Building,
      title: 'Cadena de Restaurantes',
      category: 'Gastronomía',
      result: '42% más ventas en promociones',
      detail: 'Al cambiar ofertas diarias al instante, las promociones generan 42% más ventas vs pendones estáticos.',
      metrics: '+18% flujo de clientes',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'automotive',
      icon: TrendingUp,
      title: 'Concesionaria Automotriz',
      category: 'Sector Automotriz',
      result: 'Eliminó 5.2 toneladas de residuos/año',
      detail: 'Dejó de imprimir 400 pendones promocionales anuales. Ahora actualiza precios y ofertas desde el celular.',
      metrics: '100% cero residuos',
      image: '/api/placeholder/400/300'
    }
  ]

  const testimonial = {
    quote: "En 8 meses ahorramos $1.8M CLP que gastábamos en pendones. Pero lo mejor es la flexibilidad: cambiamos ofertas 3 veces por semana y las ventas aumentaron 28%. Magic-Lum nos dio ventaja competitiva real.",
    author: "Roberto Sánchez", 
    position: "Gerente de Operaciones",
    company: "Cadena de Supermercados Regional"
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-magic-gold">Resultados que Iluminan:</span>{' '}
            <span className="text-white">Nuestros Proyectos</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Organizaciones líderes ya están <strong className="text-magic-gold">ahorrando costos</strong>, 
            <strong className="text-conversion-green"> eliminando residuos</strong> y 
            <strong className="text-white"> maximizando impacto</strong> con Magic-Lum.
          </p>
        </motion.div>

        {/* Success Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <ScrollReveal
                key={caseItem.id}
                direction="up"
                delay={index * 0.2}
              >
                <GlassCard
                  variant="gradient"
                  className="group relative overflow-hidden"
                  hover={true}
                >
                {/* Case Image/Visual */}
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-magic-gold/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-magic-gold/60" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-magic-gold/90 text-magic-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {caseItem.category}
                  </div>

                  {/* Metrics Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-magic-gold px-3 py-1 rounded-full text-sm font-bold border border-magic-gold/30">
                    {caseItem.metrics}
                  </div>
                </div>

                {/* Case Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-magic-gold transition-colors duration-300">
                    {caseItem.title}
                  </h3>
                  
                  {/* Main Result */}
                  <div className="bg-magic-gold/10 rounded-lg p-4 mb-4 border border-magic-gold/20">
                    <div className="text-magic-gold font-bold text-lg mb-1">
                      {caseItem.result}
                    </div>
                  </div>
                  
                  {/* Details */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseItem.detail}
                  </p>
                </div>

                </GlassCard>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-r from-magic-dark via-gray-900 to-magic-dark p-8 md:p-12 rounded-2xl border border-magic-gold/20 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-4 right-4 text-magic-gold/10">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-magic-gold rounded-full flex items-center justify-center">
                <span className="text-magic-dark font-bold text-xl">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">{testimonial.author}</div>
                <div className="text-gray-300">{testimonial.position}</div>
                <div className="text-magic-gold font-semibold">{testimonial.company}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '50+', label: 'Proyectos Activos' },
            { number: '0kg', label: 'Residuos Generados' },
            { number: '80%', label: 'Ahorro Promedio' },
            { number: '24h', label: 'Tiempo de Instalación' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-bold text-magic-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-400 mb-2">
            ¿Listo para ser nuestro próximo caso de éxito?
          </p>
          <p className="text-2xl font-bold text-white">
            Tu <span className="text-magic-gold">demo gratuita</span> te está esperando.
          </p>
        </motion.div>
      </div>
    </section>
  )
}