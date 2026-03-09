import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import StrategySection from '../components/StrategySection';
import ServicesSection from '../components/ServicesSection';
import ProjectGallery from '../components/ProjectGallery';
import ContactSection from '../components/ContactSection'; 
import ComplianceSection from '../components/ComplianceSection';

/**
 * PALLADIUM GLOBAL RESOURCES LIMITED - MAIN LANDING PAGE
 * This assembly follows the exact content flow of the corporate PDF:
 * 1. Cover (Hero) 
 * 2. Corporate Overview (About)
 * 3. Methodology (Strategy & HSE)
 * 4. Business Divisions (Services)
 * 5. Visual Proof (Project Gallery)
 * 6. Lead Generation (Contact)
 * 7. Regulatory Standing (Compliance)
 */

export default function Home() {
  return (
    // We use a React Fragment (<></>) here because the <main> tag 
    // is already safely wrapping this content inside layout.tsx
    <>
      {/* Section: Hero 
          Captures the 'Let's Build Together' cover page impact.
      */}
      <Hero />

      {/* Section: About 
          Maps the Vision, Mission, and Core Values.
      */}
      <AboutSection />

      {/* Section: Strategy 
          Detailed breakdown of 'Start Now, Grow Big' and HSE protocols.
      */}
      <StrategySection />

      {/* Section: Services 
          Alternating Flexbox layout for all 5 business divisions.
      */}
      <ServicesSection />

      {/* Section: Project Gallery 
          Visual showcase of academic and infrastructural projects.
      */}
      <ProjectGallery />

      {/* Section: Contact 
          High-conversion split-panel form for client inquiries.
      */}
      <ContactSection />

      {/* Section: Compliance 
          Official regulatory clearance and certification display.
      */}
      <ComplianceSection />
    </>
  );
}