'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'motion/react';

export function PagedStack({ pages }: { pages: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = pages.length;
  const [active, setActive] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const page = Math.min(count, Math.max(1, Math.ceil(v * count) || 1));
    setActive(page);
  });

  return (
    <div ref={ref} style={{ height: `${count * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto h-[72vh] w-full max-w-5xl px-6">
          {pages.map((page, i) => (
            <StackPage key={i} index={i} count={count} scrollYProgress={scrollYProgress}>
              {page}
            </StackPage>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-10 right-10 rounded-full bg-panel px-4 py-2 text-xs font-medium text-muted-foreground">
          {active}/{count}
        </div>
      </div>
    </div>
  );
}

function StackPage({
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
  const y = useTransform(scrollYProgress, [start, end], ['60%', '0%']);
  const opacity = useTransform(scrollYProgress, [start, start + 0.06], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity, zIndex: index + 1 }}
      className="absolute inset-0 overflow-hidden rounded-[32px] shadow-2xl"
    >
      {children}
    </motion.div>
  );
}