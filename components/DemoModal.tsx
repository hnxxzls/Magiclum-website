'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const isFormValid = formData.nombre && formData.empresa && formData.email && formData.telefono

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-gradient-to-br from-magic-dark via-gray-900 to-black border border-magic-gold/30 rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {!submitted ? (
              <>
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-magic-gold mb-1">
                      Demo Gratuita
                    </h2>
                    <p className="text-gray-300 text-sm">
                      Ve tu logo proyectado en vivo
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Benefits reminder */}
                <div className="bg-magic-gold/10 border border-magic-gold/20 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-magic-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        ¿Qué incluye tu demo?
                      </h3>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Instalación temporal en tu fachada</li>
                        <li>• Proyección de tu logo real</li>
                        <li>• Asesoría técnica personalizada</li>
                        <li>• Cotización sin compromiso</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form 
                  onSubmit={handleSubmit}
                  action="TU_ENDPOINT_DE_FORMULARIO"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-magic-gold focus:border-transparent transition-all duration-200"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-magic-gold focus:border-transparent transition-all duration-200"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-magic-gold focus:border-transparent transition-all duration-200"
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-magic-gold focus:border-transparent transition-all duration-200"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje (Opcional)
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-magic-gold focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Cuéntanos sobre tu proyecto o ubicación preferida para la demo..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                      isFormValid && !isSubmitting
                        ? 'bg-magic-gold text-magic-dark hover:bg-yellow-300 shadow-cta hover:shadow-2xl transform hover:scale-[1.02]'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-magic-dark border-t-transparent rounded-full animate-spin mr-2" />
                        Procesando...
                      </span>
                    ) : (
                      'Solicitar Mi Demo Gratuita'
                    )}
                  </button>

                  {/* Trust indicators */}
                  <div className="text-center text-xs text-gray-400 mt-4">
                    <p className="flex items-center justify-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>Sin compromiso • Respuesta en 24h • Gratis</span>
                    </p>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-conversion-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-conversion-green mb-4">
                  ¡Demo Solicitada!
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Nuestro equipo técnico se pondrá en contacto contigo en las próximas 
                  <strong className="text-white"> 24 horas</strong> para coordinar tu 
                  <strong className="text-magic-gold"> demo gratuita</strong>.
                </p>
                
                <div className="bg-magic-gold/10 border border-magic-gold/20 rounded-lg p-4">
                  <p className="text-magic-gold text-sm font-semibold">
                    🚀 Próximos pasos:
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    Te contactaremos para confirmar la ubicación y horario ideal para tu demostración.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}