'use client';

import BorderGlow from './border-glow';
import { useTheme } from '../theme-provider';
import type { ReactNode } from 'react';

export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <BorderGlow
      className={className}
      backgroundColor={isDark ? '#1A2030' : '#E7EFF7'}
      borderRadius={28}
      glowColor={isDark ? '208 75% 60%' : '208 55% 45%'}
      colors={isDark ? ['#5FB0F0', '#8EC5FF', '#2D6CA6'] : ['#2D6CA6', '#4A86C4', '#8EC5FF']}
      glowIntensity={0.9}
      fillOpacity={0.35}
    >
      {children}
    </BorderGlow>
  );
}