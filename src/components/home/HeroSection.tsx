'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const LETTERS = ['R', 'o', 's', 'a'] as const;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0.48, 1], ['0%', '20%']);

  return (
    <div ref={sectionRef} className="section hero-section relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#120f10] select-none">
      {/* 1. Fullscreen Image Background with Scale-Down & Scroll Parallax */}
      <div className="fullscreen-image-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 2.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, delay: 1.60, ease: EASE_OUT_EXPO }}
          style={{ y: imageY }}
          className="relative w-full h-[110%] -top-[5%]"
        >
          <Image
            src="/assets/hero.png"
            alt="Rosa 3D Artwork"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Exact Webflow Hero Gradient: Only on bottom 40vh */}
        <div className="hero-gradient absolute inset-x-0 bottom-0 h-[40vh] pointer-events-none" />
      </div>

      {/* Top spacing */}
      <div className="w-full pt-32" />

      {/* 2. Hero Bottom (Exact Webflow 12-Column Grid) */}
      <div className="hero-bottom relative z-10 w-full">
        <div className="container">
          <div className="w-layout-grid _12-column-grid items-end">
            {/* Selected Works (Row 1, Cols 3-6) */}
            <motion.div
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: '0rem', opacity: 1 }}
              transition={{ delay: 1.95, duration: 0.85, ease: EASE_OUT_EXPO }}
              style={{ gridArea: '1 / 3 / 2 / 6' }}
              className="selected-works-text cell-selected-works text-sm md:text-base font-medium text-[#ffefe6] leading-[130%] tracking-[-0.02em] self-end hidden md:block"
            >
              Selected Works
              <br />
              2019-2024
            </motion.div>

            {/* Giant R-o-s-a (Row 2, Cols 1-8) */}
            <div
              style={{ gridArea: '2 / 1 / 3 / 9' }}
              className="hero-logo-wrap cell-hero-logo flex items-baseline overflow-hidden -ml-[1.5vw] self-end"
            >
              {LETTERS.map((letter, idx) => (
                <div key={idx} className="overflow-hidden inline-block mr-[1.5vw]">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.85,
                      delay: 1.80 + idx * 0.05,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="hero-logo block text-[23vw] font-bold leading-[0.82] tracking-[-0.05em] text-[#ffefe6]"
                  >
                    {letter}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Bottom Right: All Work + Contact (Row 2, Cols 9-13) */}
            <motion.div
              initial={{ y: '2.5rem', opacity: 0 }}
              animate={{ y: '0rem', opacity: 1 }}
              transition={{ delay: 1.95, duration: 0.85, ease: EASE_OUT_EXPO }}
              style={{ gridArea: '2 / 9 / 3 / 13' }}
              className="hero-bottom-right cell-hero-bottom-right flex flex-col justify-between self-stretch space-y-8"
            >
              {/* All work rolling link */}
              <div>
                <Link href="#work" className="large-link group inline-flex items-center gap-3">
                  <div className="relative overflow-hidden leading-[1.3] text-4xl sm:text-5xl lg:text-[4.25vw] font-light tracking-[-0.04em] text-[#ffefe6]">
                    <span className="hero-link-text block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full">
                      All work
                    </span>
                    <span className="hero-link-text hover-text absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full">
                      All work
                    </span>
                  </div>

                  <div className="arrow-wrap relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[2vw] lg:h-[2vw] overflow-hidden self-center">
                    <img
                      src="/assets/arrow-diag.svg"
                      alt=""
                      className="hero-button-arrow w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-full group-hover:-translate-y-full"
                    />
                    <img
                      src="/assets/arrow-diag.svg"
                      alt=""
                      className="hero-button-arrow hover-arrow absolute -bottom-full -left-full w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-full group-hover:-translate-y-full"
                    />
                  </div>
                </Link>
              </div>

              {/* Scroll down & contact */}
              <div className="scroll-down-and-contact-wrap flex items-end justify-between gap-6 pt-4">
                <div className="scroll-down-arrow self-end">
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ffefe6]">
                    <path
                      d="M9.26172 0.75V13.3945L14.0312 8.60156L15.7773 10.3359L7.99609 18.0938L0.226562 10.3359L1.94922 8.60156L6.73047 13.3945V0.75H9.26172Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="text-left text-base lg:text-[1.25rem] font-medium leading-[130%] tracking-[-0.02em] text-[#ffefe6] self-end">
                  Get in touch at <br />
                  <a href="mailto:hi@rosastudio.com" className="text-[#ffefe6] hover:underline">
                    hi@rosastudio.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
