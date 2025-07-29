'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calculator } from 'lucide-react'
import Link from 'next/link'

export default function ConversionFooter() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-magic-gold">Magic-Lum</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas en proyección GOBO LED. 
              <strong className="text-white"> Cero residuos, máximo impacto</strong>.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contacto Directo</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-magic-gold flex-shrink-0" />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-magic-gold flex-shrink-0" />
                <a href="mailto:hola@magic-lum.cl" className="hover:text-magic-gold transition-colors">
                  hola@magic-lum.cl
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-magic-gold flex-shrink-0" />
                <a href="tel:+56912345678" className="hover:text-magic-gold transition-colors">
                  +56 9 1234 5678
                </a>
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Herramientas</h4>
            <div className="space-y-3">
              <Link 
                href="/calculadora"
                className="flex items-center space-x-3 text-gray-300 text-sm hover:text-magic-gold transition-colors group"
              >
                <Calculator className="w-4 h-4 text-magic-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Calculadora Técnica GOBO</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; 2024 Magic-Lum. Todos los derechos reservados. 
            <span className="text-magic-gold"> Tecnología sustentable para un futuro sin residuos</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}