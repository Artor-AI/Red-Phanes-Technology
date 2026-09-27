'use client';

import GridMotion from '@/components/effects/grid-motion';

const testimonials = [
  { name: 'Priya S.', quote: 'Pushed me to write better code under real pressure.' },
  { name: 'Marcus T.', quote: 'A real scorecard instead of a generic rejection.' },
  { name: 'Aisha R.', quote: 'Closer to a real job than a whiteboard interview.' },
  { name: 'Devon K.', quote: 'Better feedback than most code reviews at work.' },
  { name: 'Sana M.', quote: 'Judging that actually felt fair and consistent.' },
  { name: 'Leo P.', quote: 'A scorecard I could actually put on my portfolio.' },
];

function Tile({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 p-3 text-left">
      <div className="text-[10px] leading-tight text-primary">★★★★★</div>
      <div className="text-[11px] leading-snug text-white/90">&ldquo;{t.quote}&rdquo;</div>
      <div className="text-[9px] font-medium text-white/60">{t.name}</div>
    </div>
  );
}

const tiles = Array.from({ length: 28 }, (_, i) => <Tile key={i} t={testimonials[i % testimonials.length]} />);

export function TestimonialGrid() {
  return <GridMotion items={tiles} gradientColor="hsl(var(--overlay-bg))" />;
}