'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import GlassCard from './GlassCard'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Qué es exactamente la proyección GOBO y cómo funciona?",
      answer: "GOBO (Goes Before Optics) es una tecnología de proyección LED que utiliza lentes especializadas para mostrar logotipos, textos e imágenes de alta definición en cualquier superficie. Nuestros proyectores LED de 50W pueden proyectar hasta 10 metros de distancia con resolución 4K, visible incluso en pleno día."
    },
    {
      question: "¿Realmente elimina el 100% de los residuos publicitarios?",
      answer: "Sí, completamente. No usamos tinta, papel, PVC, vinilo ni ningún material físico. Solo luz LED proyectada. Una instalación GOBO reemplaza cientos de pendones al año sin generar un solo gramo de residuo. Además, el consumo energético es 90% menor que vallas LED tradicionales."
    },
    {
      question: "¿Cuánto ahorro real puedo esperar vs publicidad tradicional?",
      answer: "Nuestros clientes ahorran entre 60-80% anualmente. Un negocio que gasta $3M CLP/año en pendones, con GOBO gasta $600K CLP/año (equipo + electricidad). Sin costos de impresión, instalación repetitiva, ni reposición por deterioro."
    },
    {
      question: "¿La proyección se ve bien durante el día y en diferentes climas?",
      answer: "Nuestros proyectores LED de alta potencia (5,000-15,000 lúmenes) son perfectamente visibles en el día. Resistentes al agua IP65, funcionan con lluvia, viento y temperaturas extremas. La imagen mantiene nitidez y color en cualquier condición climática."
    },
    {
      question: "¿Qué tan rápido puedo cambiar el contenido publicitario?",
      answer: "Instantáneo desde tu celular. Nuestra app permite cambiar logos, textos, colores y animaciones en tiempo real. Error de precio? Corrígelo en 30 segundos. Nueva promoción? Actívala al instante. Sin esperar impresiones ni instaladores."
    },
    {
      question: "¿La instalación requiere obras o modificaciones en mi local?",
      answer: "No. La instalación es no-invasiva, similar a instalar una cámara de seguridad. Solo necesitamos acceso eléctrico 220V y un punto de montaje. El proceso toma 1-2 horas sin interrumpir tu operación comercial."
    },
    {
      question: "¿Qué pasa si se rompe o necesita mantenimiento?",
      answer: "Incluimos garantía de 3 años y mantenimiento preventivo cada 6 meses. Los LED duran +50,000 horas (6 años 24/7). Si hay algún problema, nuestro equipo técnico responde en máximo 24 horas."
    },
    {
      question: "¿Funciona en cualquier tipo de superficie o pared?",
      answer: "Sí, proyectamos en concreto, vidrio, metal, madera, incluso superficies irregulares. Nuestro sistema auto-ajusta la imagen según la distancia y ángulo. Funciona en paredes blancas, grises o de colores claros."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-magic-gold">Preguntas Frecuentes</span>{' '}
              <span className="text-white">sobre Proyección GOBO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes de empresarios que quieren 
              <strong className="text-magic-gold"> eliminar residuos publicitarios</strong> y 
              <strong className="text-white"> reducir costos operativos</strong>.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <GlassCard
                variant="dark"
                className="overflow-hidden"
                hover={false}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  data-cursor="hover"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-magic-gold" />
                    ) : (
                      <Plus className="w-6 h-6 text-magic-gold" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-magic-gold/30 to-transparent mb-4"></div>
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-6">
              ¿Tienes otra pregunta? <strong className="text-magic-gold">Hablemos directamente</strong>.
            </p>
            <p className="text-gray-400">
              📞 WhatsApp: +56 9 XXXX XXXX | 📧 Email: hola@magic-lum.cl
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}