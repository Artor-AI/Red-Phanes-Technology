'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export function SideCardsReveal({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {right}
      </motion.div>
    </div>
  );
}