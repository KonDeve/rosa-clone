'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;
const EASE_CURTAIN = [0.455, 0.03, 0.088, 0.983] as [number, number, number, number];
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setMounted(false);
      return;
    }
    // Dismiss preloader after the full curtain reveal sequence
    const timer = setTimeout(() => {
      setMounted(false);
    }, 2750);

    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="preloader fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none flex flex-col justify-end"
          style={{ display: 'flex' }}
          aria-hidden="true"
        >
          {/* Layer 1: Red background curtain (starts at 0%, lifts to -100% at 1.75s) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.85,
              delay: 1.75,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background absolute inset-0 z-10 bg-[#f0281e]"
          />

          {/* Layer 2: Cream curtain (sweeps up from 100% to 0% at 0.54s, rests, then lifts to -100% at 1.60s) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '100%', '0%', '0%', '-100%'] }}
            transition={{
              duration: 2.45,
              times: [0, 0.22, 0.53, 0.65, 1],
              ease: EASE_CURTAIN,
            }}
            className="preloader-background-light absolute inset-0 z-20 bg-[#ffefe6]"
          />

          {/* Layer 3: Typography positioned exactly at hero-bottom (stays stationary, transforms color cream -> red) */}
          <div className="preloader-bottom relative z-30 w-full pointer-events-none">
            <div className="container">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: 1.80,
                  duration: 0.12,
                  ease: 'easeOut',
                }}
                className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]"
              >
                {LETTERS.map((letter, idx) => (
                  <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                    <motion.span
                      initial={{ y: '100%', color: '#ffefe6' }}
                      animate={{
                        y: '0%',
                        color: '#f0281e',
                      }}
                      transition={{
                        y: {
                          duration: 0.70,
                          delay: 0.05 + idx * 0.05,
                          ease: EASE_OUT_EXPO,
                        },
                        color: {
                          duration: 0.25,
                          delay: 0.70,
                          ease: 'easeInOut',
                        },
                      }}
                      className="preloader-logo-text block font-bold text-[23vw] leading-[0.82] tracking-[-0.05em]"
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
