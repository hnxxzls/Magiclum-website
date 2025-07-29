'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    ubicacion: '',
    fechas: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviará a tu endpoint de formulario
    console.log('Form data:', formData)
    onClose()
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-magic-dark border border-gray-800 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-magic-gold">Cotizar Proyecto</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form 
              onSubmit={handleSubmit}
              action="TU_ENDPOINT_DE_FORMULARIO"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-300 mb-1">
                  Tipo de Evento
                </label>
                <select
                  id="tipoEvento"
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="matrimonio">Matrimonio</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="inauguracion">Inauguración</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-300 mb-1">
                  Ubicación
                </label>
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="fechas" className="block text-sm font-medium text-gray-300 mb-1">
                  Fechas
                </label>
                <input
                  type="text"
                  id="fechas"
                  name="fechas"
                  value={formData.fechas}
                  onChange={handleChange}
                  placeholder="Ej: 15-20 de marzo, 2024"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos más detalles sobre tu proyecto..."
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-magic-gold text-magic-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Enviar Cotización
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}