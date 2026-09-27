'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PixelSwap from './pixel-swap';

function DeveloperView() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 p-6 md:p-10">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-primary/40" />
        <span className="h-3 w-3 rounded-full bg-primary/30" />
        <span className="h-3 w-3 rounded-full bg-primary/20" />
        <span className="ml-4 text-xs text-muted-foreground">
          cozyarena.tech — live competition
        </span>
      </div>
      <div className="grid flex-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-accent-soft p-4 md:col-span-2">
          <div className="text-xs text-muted-foreground">
            Submission #14 — AI Judge scoring
          </div>
          <div className="mt-3 h-2 w-3/4 rounded-full bg-primary/30" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-primary/20" />
          <div className="mt-6 text-3xl font-semibold text-primary">91 / 100</div>
        </div>
        <div className="rounded-2xl bg-accent-soft p-4">
          <div className="text-xs text-muted-foreground">Live leaderboard</div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded-full bg-primary/25" />
            <div className="h-2 w-5/6 rounded-full bg-primary/20" />
            <div className="h-2 w-2/3 rounded-full bg-primary/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SponsorView() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 p-6 md:p-10">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-primary/40" />
        <span className="h-3 w-3 rounded-full bg-primary/30" />
        <span className="h-3 w-3 rounded-full bg-primary/20" />
        <span className="ml-4 text-xs text-muted-foreground">
          DX friction report — hover to preview
        </span>
      </div>
      <div className="grid flex-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-accent-soft p-4 md:col-span-2">
          <div className="text-xs text-muted-foreground">Time to first successful call</div>
          <div className="mt-3 text-3xl font-semibold text-primary">14 min</div>
          <div className="mt-2 text-xs text-muted-foreground">Target: &lt;5 min</div>
        </div>
        <div className="rounded-2xl bg-accent-soft p-4">
          <div className="text-xs text-muted-foreground">Abandonment</div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-2/3 rounded-full bg-primary/25" />
            <div className="h-2 w-1/3 rounded-full bg-primary/15" />
          </div>
          <div className="mt-3 text-lg font-semibold text-primary">3 of 22</div>
        </div>
      </div>
    </div>
  );
}

export function ScrollExpandPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [40, 16]);

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative aspect-[16/9] overflow-hidden bg-panel"
      >
        <PixelSwap
          firstContent={<DeveloperView />}
          secondContent={<SponsorView />}
          trigger="hover"
          pattern="center"
          pixelSize={26}
          duration={900}
          className="h-full w-full"
          aspectRatio="auto"
        />
      </motion.div>
    </div>
  );
}