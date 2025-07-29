'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Clock, CheckCircle2 } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const messages = [
    {
      id: 1,
      text: "¡Hola! 👋 Soy María de Magic-Lum",
      time: "Hace 2 min",
      isOnline: true
    },
    {
      id: 2, 
      text: "¿Te ayudo a calcular cuánto puedes ahorrar eliminando tus pendones? 💰",
      time: "Hace 1 min",
      isOnline: true
    },
    {
      id: 3,
      text: "Respuesta promedio en 5 minutos ⚡",
      time: "Ahora",
      isOnline: true
    }
  ]

  const quickReplies = [
    "¿Cuánto ahorro con GOBO?",
    "Quiero una demo gratuita",
    "¿Cómo funciona la instalación?",
    "Precios y planes"
  ]

  useEffect(() => {
    // Animation trigger after page load
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 3000)

    // Auto-cycle messages when chat is closed
    let messageTimer: NodeJS.Timeout
    if (!isOpen) {
      messageTimer = setInterval(() => {
        setCurrentMessage(prev => (prev + 1) % messages.length)
      }, 4000)
    }

    return () => {
      clearTimeout(timer)
      if (messageTimer) clearInterval(messageTimer)
    }
  }, [isOpen, messages.length])

  const handleWhatsAppClick = (message?: string) => {
    const phoneNumber = "56912345678" // Replace with actual number
    const defaultMessage = message || "Hola, estoy interesado en Magic-Lum. ¿Pueden ayudarme?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Notification dot */}
        <AnimatePresence>
          {!isOpen && hasAnimated && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-danger-red rounded-full flex items-center justify-center z-10"
            >
              <span className="text-white text-xs font-bold">
                {messages.length}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <MagneticButton
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
          magneticStrength={0.2}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-7 h-7 text-white" />
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </MagneticButton>

        {/* Preview message when closed */}
        <AnimatePresence>
          {!isOpen && hasAnimated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="absolute bottom-0 right-20 mb-2"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">ML</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Magic-Lum</p>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      <span className="text-xs text-gray-500">En línea</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  {messages[currentMessage].text}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {messages[currentMessage].time}
                </p>
              </div>
              {/* Speech bubble arrow */}
              <div className="absolute bottom-4 right-0 w-0 h-0 border-l-8 border-l-white border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-28 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">ML</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Magic-Lum</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                  <span className="text-white/90 text-sm">En línea • Responde rápido</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 bg-gray-50 h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-4"
                >
                  <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800">{message.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">{message.time}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick replies */}
              <div className="space-y-2 mt-4">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => handleWhatsAppClick(reply)}
                    className="block w-full text-left p-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-gray-200">
              <button
                onClick={() => handleWhatsAppClick()}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-full font-semibold flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Continuar en WhatsApp
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                <Clock className="w-3 h-3 inline mr-1" />
                Respuesta promedio: 5 minutos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}