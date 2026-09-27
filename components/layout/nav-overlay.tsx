'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';

const navSections = [
  { label: 'Home', href: '/' },
  { label: 'Sponsors', href: '/for-sponsors' },
  { label: 'Developers', href: '/for-developers' },
  { label: 'About', href: '/about' },
  { label: 'Example', href: '/preview' },
  { label: 'Contact', href: '/contact' },
];

export function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 1, originY: 0 }}
            className="fixed inset-4 z-50 overflow-y-auto rounded-[32px] bg-overlay-bg p-6 text-overlay-fg md:inset-6 md:p-10"
          >
            <p className="max-w-sm text-sm text-overlay-muted">
              Live coding, real signal.
              <br />
              DevRel & technical recruitment.
            </p>

            <motion.span
              aria-hidden="true"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute right-16 top-16 hidden text-xl text-overlay-accent md:block"
            >
              ✦
            </motion.span>

            <nav className="mt-8 space-y-2 md:mt-12 md:space-y-4">
              {navSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={onClose}
                  className="block text-3xl font-semibold tracking-tight transition-colors hover:text-overlay-accent md:text-5xl"
                >
                  {section.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-overlay-muted md:mt-12 md:flex-row md:items-end md:text-sm">
              <p>© {new Date().getFullYear()} YourCompany</p>
              <p className="md:text-right">Let&apos;s build the next competition.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}