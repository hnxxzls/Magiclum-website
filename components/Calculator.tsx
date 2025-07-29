'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator as CalcIcon, Zap, Target, Settings, RotateCcw } from 'lucide-react'
import { calculateProjectorRecommendations, formatNumber, CalculatorInputs } from '@/lib/calculator-logic'
import { CalculationResult } from '@/lib/calculator-data'

export default function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    distance: 5,
    desiredDiameter: 2,
    environment: 'indoor',
    application: 'decorative',
    mode: 'standard'
  })

  const [results, setResults] = useState<CalculationResult[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  useEffect(() => {
    calculateResults()
  }, [inputs])

  const calculateResults = async () => {
    setIsCalculating(true)
    // Simulate calculation time for better UX
    await new Promise(resolve => setTimeout(resolve, 300))
    const newResults = calculateProjectorRecommendations(inputs)
    setResults(newResults.slice(0, 10)) // Show top 10 results
    setIsCalculating(false)
  }

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const resetCalculator = () => {
    setInputs({
      distance: 5,
      desiredDiameter: 2,
      environment: 'indoor',
      application: 'decorative',
      mode: 'standard'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-400 bg-green-400/10'
      case 'adjustable': return 'text-yellow-400 bg-yellow-400/10'
      case 'not-recommended': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'optimal': return 'Óptimo'
      case 'adjustable': return 'Ajustable'
      case 'not-recommended': return 'No Recomendado'
      default: return 'Desconocido'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-magic-dark via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-magic-gold">Calculadora Técnica</span>{' '}
            <span className="text-white">GOBO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Herramienta profesional para calcular la configuración óptima 
            de proyectores GOBO según tus especificaciones técnicas.
          </p>
          
          {/* Back to main landing */}
          <div className="mt-6">
            <a 
              href="/" 
              className="inline-flex items-center text-magic-gold hover:text-yellow-300 transition-colors font-medium"
            >
              ← Volver a la página principal
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Settings className="w-6 h-6 text-magic-gold mr-2" />
                  Parámetros
                </h2>
                <button
                  onClick={resetCalculator}
                  className="text-gray-400 hover:text-magic-gold transition-colors"
                  title="Resetear calculadora"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Mode Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Modo de Cálculo
                  </label>
                  <div className="flex bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => handleInputChange('mode', 'standard')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                        inputs.mode === 'standard'
                          ? 'bg-magic-gold text-magic-dark'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Estándar
                    </button>
                    <button
                      onClick={() => handleInputChange('mode', 'inverse')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                        inputs.mode === 'inverse'
                          ? 'bg-magic-gold text-magic-dark'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Inverso
                    </button>
                  </div>
                </div>

                {/* Distance Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {inputs.mode === 'standard' ? 'Distancia de Proyección (m)' : 'Distancia Disponible (m)'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.1"
                    value={inputs.distance}
                    onChange={(e) => handleInputChange('distance', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  />
                </div>

                {/* Diameter Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Diámetro Deseado (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    max="50"
                    step="0.1"
                    value={inputs.desiredDiameter}
                    onChange={(e) => handleInputChange('desiredDiameter', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  />
                </div>

                {/* Environment Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ambiente de Instalación
                  </label>
                  <select
                    value={inputs.environment}
                    onChange={(e) => handleInputChange('environment', e.target.value as any)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  >
                    <option value="indoor">Interior</option>
                    <option value="semi-outdoor">Semi-Exterior</option>
                    <option value="outdoor">Exterior</option>
                  </select>
                </div>

                {/* Application Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Aplicación
                  </label>
                  <select
                    value={inputs.application}
                    onChange={(e) => handleInputChange('application', e.target.value as any)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-magic-gold focus:border-transparent"
                  >
                    <option value="decorative">Decorativo</option>
                    <option value="branding">Branding</option>
                    <option value="architectural">Arquitectónico</option>
                    <option value="artistic">Artístico</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-magic-gold mr-2" />
                Recomendaciones
                {isCalculating && (
                  <div className="ml-3 w-5 h-5 border-2 border-magic-gold border-t-transparent rounded-full animate-spin" />
                )}
              </h2>

              {results.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Modelo</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Lente</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Distancia (m)</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Diámetro (m)</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Intensidad (lux)</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Status</th>
                        <th className="text-left py-3 px-2 text-gray-300 font-medium">Eficiencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <motion.tr
                          key={`${result.projector.id}-${result.lens.id}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                        >
                          <td className="py-3 px-2">
                            <div>
                              <div className="text-white font-medium">{result.projector.name}</div>
                              <div className="text-gray-400 text-xs">{result.projector.power}W</div>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-gray-300">{result.lens.name}</td>
                          <td className="py-3 px-2 text-gray-300">{formatNumber(result.distance)}</td>
                          <td className="py-3 px-2 text-gray-300">{formatNumber(result.diameter)}</td>
                          <td className="py-3 px-2">
                            <div className="flex items-center">
                              <Zap className="w-4 h-4 text-magic-gold mr-1" />
                              <span className="text-gray-300">{formatNumber(result.intensity, 0)}</span>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                              {getStatusText(result.status)}
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                                <div
                                  className="bg-magic-gold h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${result.efficiency}%` }}
                                />
                              </div>
                              <span className="text-gray-300 text-xs">{formatNumber(result.efficiency, 0)}%</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <CalcIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">
                    {isCalculating ? 'Calculando recomendaciones...' : 'Ajusta los parámetros para ver recomendaciones'}
                  </p>
                </div>
              )}
            </div>

            {/* Visual Simulator Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gray-900 p-6 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-4">Simulador Visual</h3>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
                <div className="text-center">
                  <div className="w-20 h-20 bg-magic-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Target className="w-10 h-10 text-magic-gold" />
                  </div>
                  <p className="text-gray-400">Simulación visual próximamente</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Aquí podrás ver una representación visual de la proyección
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}