'use client';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import PricingCalculator from '@/components/PricingCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Features />
      <Pricing />
      <PricingCalculator />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}