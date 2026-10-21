'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;

export default function Preloader() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex flex-col justify-end"
        >
          {/* Light background curtain */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '-100%'] }}
            transition={{
              times: [0, 0.45, 1],
              duration: 1.6,
              delay: 0.1,
              ease: [0.455, 0.03, 0.088, 0.983],
            }}
            className="absolute inset-0 bg-[#ffefe6] z-30"
          />

          {/* Dark main background curtain */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.455, 0.03, 0.088, 0.983],
            }}
            className="absolute inset-0 bg-[#120f10] z-40 flex flex-col justify-end"
          >
            <div className="container w-full pb-[calc(10vh+2.5rem)]">
              <div className="preloader-logo-wrap flex items-baseline overflow-hidden -ml-[1.5vw]">
                {LETTERS.map((letter, idx) => (
                  <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                    <motion.span
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.7,
                        delay: 0.05 + idx * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="block text-[23vw] font-bold leading-[0.82] tracking-[-0.05em] text-[#ffefe6]"
                    >
                      {letter}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
