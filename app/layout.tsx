import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import CustomCursor from '@/components/CustomCursor'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magic-Lum | Reemplaza Tu Publicidad por Luz Sin Residuos',
  description: 'Tu publicidad genera 5,000 toneladas de plástico al año. La nuestra, cero. Proyección GOBO de alto impacto sin residuos.',
  keywords: 'GOBO, publicidad sustentable, proyección LED, marketing ecológico, Chile, Magic-Lum',
  authors: [{ name: 'Magic-Lum' }],
  openGraph: {
    title: 'Magic-Lum | Reemplaza Tu Publicidad por Luz Sin Residuos',
    description: 'Tu publicidad genera 5,000 toneladas de plástico al año. La nuestra, cero. Solicita tu demo gratuita.',
    type: 'website',
    locale: 'es_CL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased`}>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <SpeedInsights />
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}