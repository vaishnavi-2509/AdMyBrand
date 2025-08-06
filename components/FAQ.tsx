'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is ADmyBRAND AI Suite?', a: 'An AI-driven marketing automation platform.' },
  { q: 'Is there a free trial?', a: 'Yes, 14 days with no credit card.' },
  { q: 'Do you offer support?', a: '24/7 email and chat support.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-br from-black via-black to-purple-900">
      <h2 className="text-4xl font-display font-bold mb-12">FAQ</h2>
      <div className="max-w-lg mx-auto space-y-4 text-left">
        {faqs.map((f, i) => (
          <div key={i}>
            <button className="w-full p-4 bg-glass backdrop-blur-glass rounded-lg border" onClick={() => setOpen(open === i ? null : i)}>
              <span className="font-semibold">{f.q}</span>
            </button>
            {open === i && <p className="p-4 bg-black/60">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}