'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;
const EASE_CURTAIN = [0.455, 0.03, 0.088, 0.983] as [number, number, number, number];
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Preloader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Dismiss preloader after the full curtain reveal sequence
    const timer = setTimeout(() => {
      setMounted(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="preloader fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none"
        >
          {/* Layer 1: Red background curtain + First Rosa (Cream text) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.75,
              delay: 1.1,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background absolute inset-0 z-10 bg-[#f0281e] flex flex-col justify-end"
          >
            <div className="preloader-bottom w-full">
              <div className="container">
                <div className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]">
                  {LETTERS.map((letter, idx) => (
                    <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                      <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{
                          duration: 0.6,
                          delay: 0.05 + idx * 0.05,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="preloader-logo-text block font-bold text-[#ffefe6]"
                      >
                        {letter}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layer 2: Cream curtain + Second Rosa (Brand Red text, travels WITH the curtain) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '-100%'] }}
            transition={{
              times: [0, 0.44, 1],
              duration: 1.3,
              delay: 0.45,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background-light absolute inset-0 z-20 bg-[#ffefe6] flex flex-col justify-end"
          >
            <div className="preloader-bottom w-full">
              <div className="container">
                <div className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]">
                  {LETTERS.map((letter, idx) => (
                    <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                      <span className="preloader-logo-text block font-bold text-[#f0281e]">
                        {letter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
