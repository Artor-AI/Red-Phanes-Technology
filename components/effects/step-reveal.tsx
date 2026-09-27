'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function item(index: number) {
  const fromLeft = index % 2 === 0;
  return {
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 24 },
    },
  };
}

export function StepReveal({
  children,
  className,
  id,
}: {
  children: ReactNode[];
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item(i)}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}