'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as [number, number, number, number];
const WHAT_I_DO = ['3D Modelling', 'Motion Design', 'Animation', 'Product Renders'] as const;

/*
 * Reference structure:
 *   #about .section.about-section -> portrait (+ parallax), about-top-grid,
 *   "Nice to / Meet you." heading (1750ms outExpo reveals)
 *   .section (narrative) -> text-large, secondary p, What I do + list
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0.48, 1], ['0%', '20%']);

  return (
    <>
      <section id="about" ref={sectionRef} className="section about-section">
        <div className="fullscreen-image-wrap about-image-wrap">
          <motion.img
            src="/assets/Jacob_Nielsen_MJ_14.png"
            alt=""
            className="fullscreen-image"
            loading="lazy"
            style={{ y: portraitY }}
          />
          <div className="about-gradient" />
        </div>

        <div className="container">
          <div className="w-layout-grid _12-column-grid about-top-grid">
            <p className="short-paragraph cell-about-top-1">Teaming up with ambitious  agencies</p>
            <p className="short-paragraph cell-about-top-2">Currently working independently </p>
            <p className="short-paragraph cell-about-top-3">Open to projects and partnerships</p>
          </div>
        </div>

        <div className="container">
          <div className="w-layout-grid _12-column-grid">
            <div className="large-heading-wrap cell-about-heading">
              <div className="heading-line-wrap first-line">
                <motion.p
                  className="large-heading"
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.75, ease: EASE_OUT_EXPO }}
                >
                  Nice to
                </motion.p>
              </div>
              <div className="heading-line-wrap">
                <motion.p
                  className="large-heading"
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.75, ease: EASE_OUT_EXPO }}
                >
                  Meet you.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="w-layout-grid _12-column-grid">
            <p className="text-large cell-narrative-main">
              I specialize in transforming concepts into visually stunning 3D models, bringing ideas to life with precision and artistry. My work is characterized by meticulous attention to detail, creative problem-solving, and a deep understanding of tech.
            </p>
            <p className="cell-narrative-secondary">
              My approach combines cutting-edge technology with a keen artistic sense, ensuring that every model not only meets but exceeds client expectations.
            </p>
            <div className="cell-what-i-do">What I do</div>
            <div className="list cell-what-list">
              {WHAT_I_DO.map((item) => (
                <motion.div
                  key={item}
                  className="list-item block list-none"
                  initial={{ y: '5rem', opacity: 0 }}
                  whileInView={{ y: '0rem', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: EASE_OUT_EXPO }}
                >
                  <p className="text-large">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
