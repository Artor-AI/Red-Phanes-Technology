'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const rowOne: Testimonial[] = [
  {
    name: 'Priya S.',
    role: 'Full-Stack Developer',
    quote:
      'The live format pushed me to write better code under real time pressure than any take-home assignment ever has.',
  },
  {
    name: 'Marcus T.',
    role: 'CS Student',
    quote:
      'Got a real scorecard on my code instead of a generic rejection email. That alone made it worth entering.',
  },
  {
    name: 'Aisha R.',
    role: 'Backend Engineer',
    quote:
      'Competing against a clock with real infra felt way closer to an actual job than a whiteboard interview.',
  },
];

const rowTwo: Testimonial[] = [
  {
    name: 'Devon K.',
    role: 'Frontend Developer',
    quote:
      'The AI feedback on my architecture decisions was more useful than most code reviews I get at work.',
  },
  {
    name: 'Sana M.',
    role: 'Software Engineering Student',
    quote:
      'First hackathon where I felt like the judging was actually fair and consistent across everyone.',
  },
  {
    name: 'Leo P.',
    role: 'Full-Stack Developer',
    quote:
      'Walked away with a skill scorecard I could actually put on my portfolio. Never seen that from a hackathon before.',
  },
];

const rowOneDisplay = [...rowOne, ...rowOne];
const rowTwoDisplay = [...rowTwo, ...rowTwo];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-80 shrink-0 rounded-[28px] bg-panel p-6">
      <div className="mb-3 text-sm tracking-wide text-primary">★★★★★</div>
      <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-4 text-sm font-medium">{t.name}</div>
      <div className="text-xs text-muted-foreground">{t.role}</div>
    </div>
  );
}

export function TestimonialWall() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const xRowOne = useTransform(scrollYProgress, [0, 1], ['5%', '-35%']);
  const xRowTwo = useTransform(scrollYProgress, [0, 1], ['-35%', '5%']);

  return (
    <div ref={ref} className="flex flex-col gap-6 overflow-hidden">
      <motion.div className="flex gap-6" style={{ x: xRowOne }}>
        {rowOneDisplay.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
      <motion.div className="flex gap-6" style={{ x: xRowTwo }}>
        {rowTwoDisplay.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}