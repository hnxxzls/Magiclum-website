'use client'

import { motion } from 'framer-motion'
import { Check, X, AlertTriangle } from 'lucide-react'

export default function ComparisonTable() {
  const comparisons = [
    {
      criteria: 'Residuos Generados',
      magiclum: { value: 'CERO', icon: Check, color: 'text-conversion-green' },
      traditional: { value: '100% PVC', icon: X, color: 'text-danger-red' },
      led: { value: 'Componentes', icon: AlertTriangle, color: 'text-yellow-500' }
    },
    {
      criteria: 'Costo de Cambio',
      magiclum: { value: '$0', icon: Check, color: 'text-conversion-green' },
      traditional: { value: '$17.500/m²', icon: X, color: 'text-danger-red' },
      led: { value: 'Programación', icon: AlertTriangle, color: 'text-yellow-500' }
    },
    {
      criteria: 'Flexibilidad',
      magiclum: { value: 'Instantánea', icon: Check, color: 'text-conversion-green' },
      traditional: { value: 'Reimprimir todo', icon: X, color: 'text-danger-red' },
      led: { value: 'Limitada', icon: AlertTriangle, color: 'text-yellow-500' }
    },
    {
      criteria: 'Consumo Energético',
      magiclum: { value: '50W LED', icon: Check, color: 'text-conversion-green' },
      traditional: { value: 'Solo producción', icon: AlertTriangle, color: 'text-yellow-500' },
      led: { value: '200W+', icon: X, color: 'text-danger-red' }
    },
    {
      criteria: 'Instalación',
      magiclum: { value: '< 2 horas', icon: Check, color: 'text-conversion-green' },
      traditional: { value: '1-2 días', icon: X, color: 'text-danger-red' },
      led: { value: 'Compleja', icon: AlertTriangle, color: 'text-yellow-500' }
    },
    {
      criteria: 'Visibilidad Nocturna',
      magiclum: { value: 'Excelente', icon: Check, color: 'text-conversion-green' },
      traditional: { value: 'Requiere luz', icon: X, color: 'text-danger-red' },
      led: { value: 'Buena', icon: AlertTriangle, color: 'text-yellow-500' }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-magic-dark to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">La Diferencia es</span>{' '}
            <span className="text-magic-gold">la Luz</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comparación directa: <strong className="text-magic-gold">Magic-Lum GOBO</strong> vs. 
            métodos tradicionales de publicidad exterior.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-full bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gradient-to-r from-magic-dark to-gray-800">
              <div className="p-6 text-gray-400 font-semibold uppercase tracking-wider text-sm">
                Criterio
              </div>
              <div className="p-6 text-center bg-magic-gold/10 border-l border-magic-gold/20">
                <div className="text-magic-gold font-bold text-lg">Magic-Lum</div>
                <div className="text-magic-gold/80 text-sm">(GOBO)</div>
              </div>
              <div className="p-6 text-center border-l border-gray-700">
                <div className="text-white font-bold text-lg">Impresión</div>
                <div className="text-gray-400 text-sm">Tradicional</div>
              </div>
              <div className="p-6 text-center border-l border-gray-700">
                <div className="text-white font-bold text-lg">Pantallas</div>
                <div className="text-gray-400 text-sm">LED</div>
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.criteria}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-4 border-t border-gray-700 hover:bg-gray-700/30 transition-colors duration-300"
              >
                {/* Criteria */}
                <div className="p-6 text-white font-medium">
                  {row.criteria}
                </div>

                {/* Magic-Lum Column - Highlighted */}
                <div className="p-6 text-center bg-magic-gold/5 border-l border-magic-gold/20">
                  <div className={`flex items-center justify-center space-x-2 ${row.magiclum.color}`}>
                    <row.magiclum.icon className="w-5 h-5" />
                    <span className="font-bold">{row.magiclum.value}</span>
                  </div>
                </div>

                {/* Traditional Column */}
                <div className="p-6 text-center border-l border-gray-700">
                  <div className={`flex items-center justify-center space-x-2 ${row.traditional.color}`}>
                    <row.traditional.icon className="w-5 h-5" />
                    <span className="font-medium">{row.traditional.value}</span>
                  </div>
                </div>

                {/* LED Column */}
                <div className="p-6 text-center border-l border-gray-700">
                  <div className={`flex items-center justify-center space-x-2 ${row.led.color}`}>
                    <row.led.icon className="w-5 h-5" />
                    <span className="font-medium">{row.led.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-8 bg-gradient-to-br from-conversion-green/10 to-conversion-green/5 rounded-2xl border border-conversion-green/20">
            <div className="w-16 h-16 bg-conversion-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-conversion-green mb-2">Impacto Ambiental</h3>
            <p className="text-gray-300">100% libre de residuos plásticos</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-magic-gold/10 to-magic-gold/5 rounded-2xl border border-magic-gold/20">
            <div className="w-16 h-16 bg-magic-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-magic-dark font-bold text-xl">$</span>
            </div>
            <h3 className="text-xl font-bold text-magic-gold mb-2">Ahorro Total</h3>
            <p className="text-gray-300">Hasta 80% menos costo operativo</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl border border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-500 mb-2">Flexibilidad</h3>
            <p className="text-gray-300">Cambios instantáneos, 24/7</p>
          </div>
        </motion.div>

        {/* CTA Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-2">¿Convencido de la superioridad técnica?</p>
          <p className="text-2xl font-bold text-white">
            Ahora ve los <span className="text-magic-gold">resultados reales</span> en acción.
          </p>
        </motion.div>
      </div>
    </section>
  )
}