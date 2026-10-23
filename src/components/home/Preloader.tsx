'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;
const EASE_CURTAIN = [0.455, 0.03, 0.088, 0.983] as [number, number, number, number];
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Preloader() {
  const [mounted, setMounted] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('rosa_intro_shown');
    }
    return true;
  });

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setMounted(false);
        try {
          sessionStorage.setItem('rosa_intro_shown', 'true');
        } catch {}
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="preloader fixed inset-0 z-[9999] flex flex-col justify-end overflow-hidden pointer-events-none"
          style={{ display: 'flex' }}
        >
          {/* 1. Light background curtain (Webflow .preloader-background-light) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '-100%'] }}
            transition={{
              times: [0, 0.4, 1],
              duration: 1.4,
              delay: 0.05,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background-light absolute inset-0 z-10 bg-[#ffefe6]"
          />

          {/* 2. Brand red curtain (Webflow .preloader-background, #f0281e) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease: EASE_CURTAIN,
            }}
            className="preloader-background absolute inset-0 z-20 bg-[#f0281e] flex flex-col justify-end"
          >
            {/* Exactly matches hero-bottom positioning & container */}
            <div className="preloader-bottom w-full">
              <div className="container">
                <div className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]">
                  {LETTERS.map((letter, idx) => (
                    <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                      <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1 + idx * 0.05,
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
