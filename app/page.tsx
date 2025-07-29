'use client'

import { useState } from 'react'
import ConversionHero from '@/components/ConversionHero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import ComparisonTable from '@/components/ComparisonTable'
import SuccessCases from '@/components/SuccessCases'
import FinalCTA from '@/components/FinalCTA'
import ConversionFooter from '@/components/ConversionFooter'
import DemoModal from '@/components/DemoModal'

export default function ConversionLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-magic-dark">
      {/* Hero Section - Above the Fold */}
      <ConversionHero onOpenDemo={openModal} />
      
      {/* Problem Agitation */}
      <ProblemSection />
      
      {/* Solution Presentation */}
      <SolutionSection />
      
      {/* Logical Superiority (Comparison) */}
      <ComparisonTable />
      
      {/* Social Proof (Success Cases) */}
      <SuccessCases />
      
      {/* Final CTA with Irresistible Offer */}
      <FinalCTA onOpenDemo={openModal} />
      
      {/* Minimal Footer */}
      <ConversionFooter />
      
      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}