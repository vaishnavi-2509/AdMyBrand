import ScrollReveal from '@/animations/ScrollReveal';

export default function FeatureItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <ScrollReveal>
      <div className="bg-glass backdrop-blur-glass p-4 md:p-6 rounded-xl border border-white/10 text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className="text-3xl sm:text-4xl md:text-5xl mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm sm:text-base">{desc}</p>
      </div>
    </ScrollReveal>
  );
}