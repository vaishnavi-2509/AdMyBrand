'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  useEffect(() => { if (inView) controls.start({ opacity: 1, y: 0 }); }, [inView]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.6 }}>
      {children}
    </motion.div>
  );
}