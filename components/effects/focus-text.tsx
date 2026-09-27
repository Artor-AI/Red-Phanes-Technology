'use client';

import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';

export function FocusText({
  children,
  className,
  activeColor = 'hsl(var(--foreground))',
  inactiveColor = 'hsl(var(--muted-foreground))',
}: {
  children: ReactNode;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6, margin: '-20% 0px -20% 0px' });

  return (
    <motion.div
      ref={ref}
      animate={{ color: inView ? activeColor : inactiveColor }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}