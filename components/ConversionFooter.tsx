'use client'

import { motion } from 'framer-motion'
import { Zap, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, Calculator } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

export default function ConversionFooter() {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios y Precios', href: '/servicios' },
    { name: 'Calculadora GOBO', href: '/calculadora' },
    { name: 'Contacto', href: '/contacto' }
  ]

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Política de Cookies', href: '/cookies' }
  ]

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/magiclumchile', 
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/magic-lum-chile', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      href: 'mailto:hola@magic-lum.cl', 
      icon: Mail,
      color: 'hover:text-magic-gold'
    }
  ]

  return (
    <footer className="bg-magic-dark border-t border-gray-800">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-magic-gold mr-3" />
                <span className="text-2xl font-bold text-white">Magic-Lum</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Eliminamos el 100% de residuos publicitarios con tecnología de proyección GOBO LED. 
                Ahorra hasta 80% en costos anuales de publicidad exterior.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-magic-gold" />
                  <a href="tel:+56912345678" className="hover:text-magic-gold transition-colors">
                    +56 9 1234 5678
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-magic-gold" />
                  <a href="mailto:hola@magic-lum.cl" className="hover:text-magic-gold transition-colors">
                    hola@magic-lum.cl
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 text-magic-gold" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-magic-gold transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-magic-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Recibe tips de sustentabilidad y ofertas exclusivas
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="bg-gray-800 border border-gray-700 rounded-l-lg px-3 py-2 text-white text-sm flex-1 focus:outline-none focus:border-magic-gold"
                  />
                  <button className="bg-magic-gold text-magic-dark px-4 py-2 rounded-r-lg font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300">
                    Suscribir
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social Media & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Síguenos</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <MagneticButton
                      key={index}
                      className={`p-3 bg-gray-800 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                      magneticStrength={0.1}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5" />
                      </a>
                    </MagneticButton>
                  )
                })}
              </div>

              {/* Footer CTA */}
              <div className="bg-gradient-to-r from-magic-gold/10 to-transparent p-6 rounded-xl border border-magic-gold/20">
                <h4 className="text-white font-bold mb-2">¿Listo para eliminar residuos?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Demo gratuita en tu ubicación
                </p>
                <MagneticButton
                  className="w-full bg-magic-gold text-magic-dark font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-300"
                  magneticStrength={0.2}
                >
                  <Link href="/contacto">
                    Solicitar Demo
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
          >
            <div className="mb-4 md:mb-0">
              © 2024 Magic-Lum Chile. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <span>🇨🇱 Hecho en Chile</span>
              <span>•</span>
              <span>🌱 100% Sustentable</span>
              <span>•</span>
              <span>⚡ Tecnología LED</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}