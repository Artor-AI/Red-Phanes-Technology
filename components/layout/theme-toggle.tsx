'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-11 w-11" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-overlay-border bg-overlay-bg text-overlay-fg transition-colors hover:opacity-90"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}