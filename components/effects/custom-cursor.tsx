'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// Change this one value to adjust the cursor color everywhere.
const CURSOR_COLOR = '#dc2626';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    damping: 30,
    stiffness: 700,
    mass: 0.25,
  });

  const springY = useSpring(cursorY, {
    damping: 30,
    stiffness: 700,
    mass: 0.25,
  });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 4);

      const target = e.target as HTMLElement;

      setIsPointer(
        !!target.closest(
          'a, button, [role="button"], input, textarea'
        )
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999]"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isPointer ? 1.12 : 1,
        rotate: isPointer ? -8 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 350,
      }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M7.2 3.9
            C10.4 2.8 14.7 3.8 18.2 5.4
            C21.9 7.1 25.7 9.3 27.0 11.7
            C28.2 13.9 27.2 15.8 24.8 16.6
            C22.5 17.4 19.3 17.0 16.8 16.0
            L14.0 14.8
            C13.0 14.4 12.3 14.9 12.1 16.0
            C11.6 19.8 10.8 24.2 9.4 26.7
            C8.3 28.6 6.4 29.2 5.1 27.5
            C3.3 25.1 2.9 19.3 3.0 14.3
            C3.1 9.1 4.1 5.0 7.2 3.9
            Z
          "
          fill={CURSOR_COLOR}
        />
      </svg>
    </motion.div>
  );
}