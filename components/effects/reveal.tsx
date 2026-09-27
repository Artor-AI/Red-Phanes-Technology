'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'up';

const offsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up: { x: 0, y: 40 },
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  id,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const offset = offsets[direction];
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}