'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;
const EASE_CURTAIN = [0.455, 0.03, 0.088, 0.983] as [number, number, number, number];
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Preloader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Automatically dismiss preloader curtain after complete sequence
    const timer = setTimeout(() => {
      setMounted(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="preloader fixed inset-0 z-[9999] flex flex-col justify-end overflow-hidden pointer-events-none"
          style={{ display: 'flex' }}
        >
          {/* Layer 1: Red background curtain (starts covering screen, exits up at 1.35s) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.95,
              delay: 1.35,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background absolute inset-0 z-10 bg-[#f0281e]"
          />

          {/* Layer 2: Light cream curtain (rises at 0.35s to cover red, exits up at 1.2s) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '-100%'] }}
            transition={{
              times: [0, 0.45, 1],
              duration: 1.85,
              delay: 0.35,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background-light absolute inset-0 z-20 bg-[#ffefe6]"
          />

          {/* Layer 3: Typography positioned exactly as hero-bottom */}
          <div className="preloader-bottom relative z-30 w-full pointer-events-none">
            <div className="container">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{
                  times: [0, 0.85, 1],
                  duration: 1.5,
                  delay: 0,
                }}
                className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]"
              >
                {LETTERS.map((letter, idx) => (
                  <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                    <motion.span
                      initial={{ y: '100%', color: '#ffefe6' }}
                      animate={{
                        y: '0%',
                        color: ['#ffefe6', '#ffefe6', '#f0281e'],
                      }}
                      transition={{
                        y: {
                          duration: 0.8,
                          delay: 0.05 + idx * 0.05,
                          ease: EASE_OUT_EXPO,
                        },
                        color: {
                          duration: 0.4,
                          delay: 0.65,
                          ease: 'easeInOut',
                        },
                      }}
                      className="preloader-logo-text block font-bold"
                    >
                      {letter}
                    </motion.span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
