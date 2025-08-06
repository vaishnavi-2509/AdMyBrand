'use client';
import Image from 'next/image';
import Button from './Button';
import ScrollReveal from '@/animations/ScrollReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-purple-900 via-black to-black">
      <ScrollReveal>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
          Elevate Your Marketing with <span className="text-primary">AI</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 text-white/80">
          ADmyBRAND AI Suite helps you automate, optimize, and scale your campaigns.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <Button text="Get Started Free" />
      </ScrollReveal>

      
       <div className="relative w-2xl h-20 sm:h-40 md:h-40 lg:h-[28rem]">
          <Image
            src="/hero.jpg"
            alt="AI Marketing Dashboard"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
    </section>
  );
}
