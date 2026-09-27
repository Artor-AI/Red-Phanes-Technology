'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeToggle } from './theme-toggle';
import { NavOverlay } from './nav-overlay';

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="2" y1="5.5" x2="14" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="10.5" x2="14" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AttentionPointer() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none flex items-center rounded-full border border-overlay-border bg-overlay-bg px-4 py-2.5 text-xs font-medium text-overlay-fg"
      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
    >
      Menu →
    </motion.div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="fixed left-6 top-6 z-[60] font-semibold tracking-tight"
      >
        Red Phanes Technology
      </Link>

      <div className="fixed right-6 top-6 z-[60] flex items-center gap-3">
        <ThemeToggle />
        <AttentionPointer />

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-overlay-border bg-overlay-bg text-overlay-fg transition-colors hover:opacity-90"
        >
          {open ? <X size={18} /> : <MenuIcon />}
        </button>
      </div>

      <NavOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}