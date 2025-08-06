'use client';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Alice Johnson', feedback: 'Boosted our ROI by 300%!', photo: '/user1.jpg' },
  { name: 'Mark Lee', feedback: 'A game changer for marketers.', photo: '/user2.jpg' },
  { name: 'Sophie Turner', feedback: 'Saved us countless hours.', photo: '/user3.jpg' },
  { name: 'Jhon Adson', feedback: 'Boosted our ROI by 100%!', photo: '/user4.jpg' },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-br from-purple-900 via-black to-black">
      <h2 className="text-4xl font-display font-bold mb-12">Testimonials</h2>
      <div className="flex gap-6 overflow-x-auto px-2">
        {testimonials.map((t, i) => (
          <motion.div key={i} className="bg-glass backdrop-blur-glass p-12 rounded-xl border border-white/10 min-w-[250px]" whileHover={{ scale: 1.05 }}>
            <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
            <p className="italic mb-2">“{t.feedback}”</p>
            <h4 className="font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}