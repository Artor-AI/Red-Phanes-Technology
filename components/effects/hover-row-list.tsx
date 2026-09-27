'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

type Row = {
  title: string;
  bullets: string[];
};

export function HoverRowList({ rows }: { rows: Row[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/15">
      {rows.map((row, i) => {
        const isActive = hovered === i;
        const isDimmed = hovered !== null && hovered !== i;

        return (
          <motion.div
            key={row.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col gap-4 py-8 transition-opacity duration-300 md:flex-row md:items-center md:justify-between"
            style={{ opacity: isDimmed ? 0.35 : 1 }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-white md:text-3xl"
              >
                →
              </motion.span>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {row.title}
              </h3>
            </div>
            <ul className="flex flex-col gap-1 text-sm text-white/70 md:min-w-[240px] md:text-base">
              {row.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}