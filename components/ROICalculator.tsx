'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Leaf, DollarSign, ArrowRight, Zap } from 'lucide-react'
import MagneticButton from './MagneticButton'
import GlassCard from './GlassCard'

interface ROICalculatorProps {
  onOpenDemo: () => void
}

export default function ROICalculator({ onOpenDemo }: ROICalculatorProps) {
  const [businessType, setBusinessType] = useState('retail')
  const [monthlySpend, setMonthlySpend] = useState(250000)
  const [results, setResults] = useState({
    annualSavings: 0,
    wasteReduced: 0,
    roiPercentage: 0,
    paybackMonths: 0
  })

  const businessTypes = [
    { id: 'retail', name: 'Retail/Tienda', multiplier: 1.0 },
    { id: 'restaurant', name: 'Restaurante', multiplier: 1.2 },
    { id: 'automotive', name: 'Automotriz', multiplier: 0.8 },
    { id: 'services', name: 'Servicios', multiplier: 1.1 },
    { id: 'healthcare', name: 'Salud', multiplier: 0.9 }
  ]

  useEffect(() => {
    calculateROI()
  }, [businessType, monthlySpend])

  const calculateROI = () => {
    const selectedBusiness = businessTypes.find(b => b.id === businessType)
    const multiplier = selectedBusiness?.multiplier || 1.0
    
    // Traditional advertising annual cost
    const annualTraditional = monthlySpend * 12

    // GOBO cost (equipment + electricity)
    const goboAnnualCost = monthlySpend * 2.4 // ~20% of traditional cost
    
    // Savings calculation
    const annualSavings = Math.round((annualTraditional - goboAnnualCost) * multiplier)
    
    // Waste calculation (estimate based on spending)
    const wasteReduced = Math.round((monthlySpend / 50000) * 0.8 * 10) / 10 // tons per year
    
    // ROI calculation
    const roiPercentage = Math.round(((annualSavings / goboAnnualCost) * 100))
    
    // Payback period
    const paybackMonths = Math.round(goboAnnualCost / (annualSavings / 12))

    setResults({
      annualSavings,
      wasteReduced,
      roiPercentage,
      paybackMonths
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-magic-gold">Calcula tu Ahorro</span>{' '}
            <span className="text-white">en 30 Segundos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre cuánto puedes <strong className="text-magic-gold">ahorrar</strong> y 
            qué <strong className="text-conversion-green">impacto ambiental</strong> tendrías 
            con proyección GOBO.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Calculator Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="dark" className="p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-8 h-8 text-magic-gold mr-3" />
                  <h3 className="text-2xl font-bold text-white">Calculadora ROI</h3>
                </div>

                <div className="space-y-6">
                  {/* Business Type */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Tipo de Negocio
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {businessTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setBusinessType(type.id)}
                          className={`p-3 rounded-lg border transition-all text-sm font-medium ${
                            businessType === type.id
                              ? 'bg-magic-gold text-magic-dark border-magic-gold'
                              : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-magic-gold/50'
                          }`}
                        >
                          {type.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Spend */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Gasto Mensual en Publicidad Actual
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>$50K</span>
                        <span>$2M</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-3xl font-bold text-magic-gold">
                        {formatCurrency(monthlySpend)}
                      </span>
                      <span className="text-gray-400 ml-2">/ mes</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Annual Savings */}
              <GlassCard variant="gold" className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-6 h-6 text-magic-gold mr-2" />
                      <span className="text-white font-semibold">Ahorro Anual</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={results.annualSavings}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-3xl font-bold text-magic-gold"
                      >
                        {formatCurrency(results.annualSavings)}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="text-right">
                    <div className="text-conversion-green text-sm font-medium">
                      +{results.roiPercentage}% ROI
                    </div>
                    <div className="text-gray-300 text-xs">
                      Recuperas inversión en {results.paybackMonths} meses
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Environmental Impact */}
              <GlassCard variant="gradient" className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <Leaf className="w-6 h-6 text-conversion-green mr-2" />
                      <span className="text-white font-semibold">Impacto Ambiental</span>
                    </div>
                    <div className="text-2xl font-bold text-conversion-green mb-1">
                      {results.wasteReduced} toneladas
                    </div>
                    <div className="text-gray-300 text-sm">
                      residuos plásticos eliminados/año
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-conversion-green/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Efficiency Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <GlassCard variant="dark" className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-magic-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">74%</div>
                  <div className="text-gray-400 text-sm">Reducción de costos</div>
                </GlassCard>

                <GlassCard variant="dark" className="p-4 text-center">
                  <Zap className="w-8 h-8 text-magic-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2h</div>
                  <div className="text-gray-400 text-sm">Tiempo instalación</div>
                </GlassCard>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center pt-4"
              >
                <MagneticButton
                  onClick={onOpenDemo}
                  className="bg-magic-gold text-magic-dark text-lg font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-glow inline-flex items-center"
                  magneticStrength={0.2}
                >
                  <span className="mr-3">Ver Estos Resultados en Vivo</span>
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                
                <p className="text-gray-400 text-sm mt-3">
                  ✓ Demo gratuita instalada en tu ubicación
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '847', label: 'Empresas ahorran', suffix: '+' },
            { number: '2.1M', label: 'Toneladas eliminadas', suffix: '' },
            { number: '80', label: 'Ahorro promedio', suffix: '%' },
            { number: '24', label: 'Horas respuesta', suffix: 'h' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-magic-gold mb-1">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FFD800;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 216, 0, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FFD800;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(255, 216, 0, 0.5);
        }
        
        .slider::-webkit-slider-track {
          background: linear-gradient(90deg, #FFD800 0%, #FFD800 ${(monthlySpend - 50000) / (2000000 - 50000) * 100}%, #374151 ${(monthlySpend - 50000) / (2000000 - 50000) * 100}%, #374151 100%);
        }
      `}</style>
    </section>
  )
}