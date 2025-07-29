import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import CustomCursor from '@/components/CustomCursor'
import StructuredData from '@/components/StructuredData'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magic-Lum | Proyección GOBO LED Chile - Publicidad Sin Residuos',
  description: '¿Tu empresa contamina 5 toneladas de plástico al año en publicidad? Eliminamos el 100% de residuos con proyección GOBO LED. Demo gratuita en 2 horas.',
  keywords: 'proyección GOBO, LED proyección Chile, publicidad sustentable, marketing sin residuos, pendones LED, vallas digitales, Magic-Lum Chile, proyector GOBO',
  authors: [{ name: 'Magic-Lum Chile' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://www.magic-lum.cl'),
  openGraph: {
    title: 'Magic-Lum | Proyección GOBO LED Chile - Elimina Residuos Publicitarios',
    description: 'Reemplaza pendones y vallas por proyección LED. 80% menos costos, cero residuos, cambios instantáneos. Demo gratis instalada en 2 horas.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.magic-lum.cl',
    siteName: 'Magic-Lum Chile',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magic-Lum - Proyección GOBO LED Chile'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic-Lum | Proyección GOBO LED Chile - Sin Residuos',
    description: 'Elimina 100% residuos publicitarios con proyección LED. Demo gratis en 2 horas.',
    images: ['/og-image.jpg']
  },
  verification: {
    google: 'pending-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased`}>
        <StructuredData />
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