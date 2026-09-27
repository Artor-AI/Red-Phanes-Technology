'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

export function ScrollCardStack({ title, cards }: { title: ReactNode; cards: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = cards.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [
      'hsl(var(--overlay-muted))',
      'hsl(var(--overlay-fg))',
      'hsl(var(--overlay-fg))',
      'hsl(var(--overlay-muted))',
    ]
  );

  return (
    <div ref={ref} style={{ height: `${count * 90}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.h2
            style={{ color: titleColor }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            {title}
          </motion.h2>

          <div className="relative h-[56vh] w-full">
            {cards.map((card, i) => (
              <StackCard key={i} index={i} count={count} scrollYProgress={scrollYProgress}>
                {card}
              </StackCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StackCard({
  index,
  count,
  scrollYProgress,
  children,
}: {
  index: number;
  count: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const entIn = Math.min(start + 0.05, end);
  const entOut = Math.max(end - 0.05, start);
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const x = useTransform(
    scrollYProgress,
    [start, entIn, entOut, end],
    [isFirst ? 0 : -120, 0, 0, isLast ? 0 : 120]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, entIn, entOut, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  return (
    <motion.div
      style={{ x, opacity, zIndex: count - index }}
      className="absolute inset-0 rounded-[28px] bg-panel p-8 shadow-2xl md:p-10"
    >
      {children}
    </motion.div>
  );
}