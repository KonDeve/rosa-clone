'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '@/data/projects';

interface ProjectStripMeta {
  title: string;
  slug: string;
  image: string;
  bgColor: string;
}

const PROJECT_STRIPS: Record<string, ProjectStripMeta> = {
  speaker: {
    title: 'Speaker',
    slug: 'speaker',
    image: '/assets/speaker3.webp',
    bgColor: '#a7a79b',
  },
  package: {
    title: 'Package',
    slug: 'package',
    image: '/assets/wrapped.webp',
    bgColor: '#aa93c0',
  },
  printer: {
    title: 'Printer',
    slug: 'printer',
    image: '/assets/printer2.webp',
    bgColor: '#303438',
  },
  scapes: {
    title: 'Scapes',
    slug: 'scapes',
    image: '/assets/scapes3.webp',
    bgColor: '#8fa6b3',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project: Project = PROJECTS[currentIndex];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const nextStrip = PROJECT_STRIPS[nextProject.slug];

  return (
    <article className="min-h-screen bg-[#120f10] text-[#ffefe6]">
      {/* 1. Hero Section (Exact Webflow Layout) */}
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#120f10]">
        {/* Background Artwork with scale-down animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Bottom 45vh gradient only, preserving raw vibrant 3D colors */}
          <div
            className="absolute inset-x-0 bottom-0 h-[45vh] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(18, 15, 16, 0) 0%, #120f10 100%)',
            }}
          />
        </div>

        {/* Spacer to push title down */}
        <div className="relative z-10 w-full pt-32 px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffefe6]/60 hover:text-[#ffefe6] transition-colors"
          >
            <span>&larr; Back to all works</span>
          </Link>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ffefe6]/50">
            {project.category} &mdash; {project.year}
          </span>
        </div>

        {/* Bottom Title & Bouncing Arrow */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-16 flex items-end justify-between">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[13vw] font-light tracking-[-0.05em] leading-[0.88] text-[#ffefe6]"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex text-[#ffefe6]/60 mb-4"
          >
            <svg
              width="24"
              height="28"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M9.26172 0.75V13.3945L14.0312 8.60156L15.7773 10.3359L7.99609 18.0938L0.226562 10.3359L1.94922 8.60156L6.73047 13.3945V0.75H9.26172Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-b border-[#262626]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#ffefe6] leading-[1.35] tracking-tight max-w-[36ch]">
              {project.description}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#262626] pt-8 md:pt-0 md:pl-12 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ffefe6]/40 block mb-2">
                Client
              </span>
              <p className="text-base font-light text-[#ffefe6]">{project.client}</p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ffefe6]/40 block mb-2">
                Scope / Deliverables
              </span>
              <ul className="text-sm font-light text-[#ffefe6]/70 space-y-1">
                {project.deliverables.map((item) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Image Gallery (Exact Webflow images-list) */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto space-y-12 md:space-y-16">
          {project.gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-[#262626]"
            >
              <Image
                src={imgUrl}
                alt={`${project.title} render ${idx + 1}`}
                fill
                sizes="100vw"
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Next Project Intro (Exact Webflow section no-padding-bottom) */}
      <section className="pt-24 pb-12 px-6 md:px-12 border-t border-[#262626]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg md:text-xl font-light text-[#ffefe6]/70 leading-relaxed max-w-[42ch]">
              Explore how my 3D design expertise has brought various projects to life. The next case study highlights unique challenges and innovative solutions, showcasing the transformative power of 3D visualization.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Next Project Marquee Strip (Exact Webflow last-section) */}
      <section className="w-full pb-24 md:pb-32">
        <Link
          href={`/project/${nextStrip.slug}`}
          className="group relative block w-full py-12 md:py-16 overflow-hidden transition-colors duration-500 project-strip"
        >
          {/* Accent hover background */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"
            style={{ backgroundColor: nextStrip.bgColor }}
          />

          <div className="relative z-10 flex w-full overflow-hidden select-none">
            <div className="marquee-track-left flex items-center">
              <div className="flex items-center flex-nowrap flex-shrink-0">
                <span className="text-[11vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6] pr-6">
                  {nextStrip.title}
                </span>
                <div className="relative h-[9vw] aspect-[16/9] mx-6 md:mx-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6] pr-6">
                  {nextStrip.title}
                </span>
                <div className="relative h-[9vw] aspect-[16/9] mx-6 md:mx-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex items-center flex-nowrap flex-shrink-0" aria-hidden="true">
                <span className="text-[11vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6] pr-6">
                  {nextStrip.title}
                </span>
                <div className="relative h-[9vw] aspect-[16/9] mx-6 md:mx-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6] pr-6">
                  {nextStrip.title}
                </span>
                <div className="relative h-[9vw] aspect-[16/9] mx-6 md:mx-10 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
