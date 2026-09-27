import type { ReactNode } from 'react';

export type CardTheme = 'light' | 'purple' | 'teal';

export const cardThemes: Record<
  CardTheme,
  { bg: string; text: string; subtext: string; pill: string; blobA: string; blobB: string }
> = {
  light: {
    bg: 'bg-[#F7F4F1]',
    text: 'text-[#141414]',
    subtext: 'text-[#141414]/70',
    pill: 'border border-black/15 bg-white/70 text-[#141414]',
    blobA: 'bg-gradient-to-br from-violet-300 to-sky-300',
    blobB: 'bg-gradient-to-br from-indigo-200 to-purple-200',
  },
  purple: {
    bg: 'bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]',
    text: 'text-white',
    subtext: 'text-white/80',
    pill: 'border border-white/40 bg-white/10 text-white',
    blobA: 'bg-gradient-to-br from-sky-400 to-cyan-300',
    blobB: 'bg-gradient-to-br from-orange-300 to-amber-400',
  },
  teal: {
    bg: 'bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#14B8A6]',
    text: 'text-white',
    subtext: 'text-white/80',
    pill: 'border border-white/40 bg-white/10 text-white',
    blobA: 'bg-gradient-to-br from-lime-300 to-emerald-300',
    blobB: 'bg-gradient-to-br from-amber-300 to-orange-400',
  },
};

export function GradientBlobCard({
  theme,
  children,
  className,
}: {
  theme: CardTheme;
  children: ReactNode;
  className?: string;
}) {
  const t = cardThemes[theme];
  return (
    <div
      className={`relative isolate flex h-full flex-col overflow-hidden rounded-[32px] p-8 md:p-10 ${t.bg} ${t.text} ${className ?? ''}`}
    >
      <div
        className={`pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full blur-3xl opacity-70 ${t.blobA}`}
      />
      <div
        className={`pointer-events-none absolute -bottom-24 right-24 h-52 w-52 rounded-full blur-3xl opacity-60 ${t.blobB}`}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}