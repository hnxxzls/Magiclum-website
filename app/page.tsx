'use client'

import { useState } from 'react'
import ConversionHero from '@/components/ConversionHero'
import ROICalculator from '@/components/ROICalculator'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ComparisonTable from '@/components/ComparisonTable'
import SuccessCases from '@/components/SuccessCases'
import ProcessSection from '@/components/ProcessSection'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import ConversionFooter from '@/components/ConversionFooter'
import DemoModal from '@/components/DemoModal'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import WhatsAppChat from '@/components/WhatsAppChat'

export default function ConversionLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-magic-dark">
      {/* Hero Section - Above the Fold */}
      <ConversionHero onOpenDemo={openModal} />
      
      {/* ROI Calculator */}
      <ROICalculator onOpenDemo={openModal} />
      
      {/* Problem Agitation */}
      <ProblemSection />
      
      {/* Solution Presentation */}
      <SolutionSection />
      
      {/* Before/After Gallery */}
      <BeforeAfterGallery onOpenDemo={openModal} />
      
      {/* Logical Superiority (Comparison) */}
      <ComparisonTable />
      
      {/* Social Proof (Success Cases) */}
      <SuccessCases />
      
      {/* Process Section */}
      <ProcessSection onOpenDemo={openModal} />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA with Irresistible Offer */}
      <FinalCTA onOpenDemo={openModal} />
      
      {/* Minimal Footer */}
      <ConversionFooter />
      
      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup onOpenDemo={openModal} />
      
      {/* WhatsApp Chat */}
      <WhatsAppChat />
    </main>
  )
}