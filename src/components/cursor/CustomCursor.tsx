'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/*
 * Reference cursor: brand-red 0.75rem dot; turns dark (#120f10)
 * while hovering project items and footer (IX2 a-248/249);
 * .cursor-frame is hidden below 992px via rosa.css.
 */
export default function CustomCursor() {
  const [hoveringDark, setHoveringDark] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, { damping: 28, stiffness: 400, mass: 0.2 });
  const cursorY = useSpring(mouseY, { damping: 28, stiffness: 400, mass: 0.2 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target as HTMLElement | null;
      setHoveringDark(Boolean(target?.closest('.footer, .project-wrapper, .project-strip')));
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="cursor-frame pointer-events-none">
      <motion.div
        className="cursor pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          // center the 0.75rem dot on the pointer (no xPercent support in FM11)
          marginTop: '-0.375rem',
          marginLeft: '-0.375rem',
          backgroundColor: hoveringDark ? '#120f10' : '#f0281e',
        }}
      />
    </div>
  );
}
