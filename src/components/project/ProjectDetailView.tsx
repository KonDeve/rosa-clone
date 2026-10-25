'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '@/data/projects';

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

function ParallaxGalleryItem({ imgUrl, alt }: { imgUrl: string; alt: string }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div
      ref={itemRef}
      className="image-wrap relative aspect-[16/9] w-full overflow-hidden bg-neutral-900"
    >
      <motion.div
        style={{ y }}
        className="relative w-full h-[115%] -top-[7.5%]"
      >
        <Image
          src={imgUrl}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}

export default function ProjectDetailView({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  const nextStrip = PROJECT_STRIPS[nextProject.slug];

  return (
    <article className="page-wrapper min-h-screen bg-[#120f10] text-[#ffefe6]">
      {/* 1. Hero Section (Exact Webflow Layout) */}
      <div className="section hero-section relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#120f10]">
        {/* Background Artwork with scale-down animation */}
        <div className="fullscreen-image-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
              className="fullscreen-image object-cover object-center"
            />
          </motion.div>

          {/* Bottom 45vh gradient */}
          <div
            className="hero-gradient absolute inset-x-0 bottom-0 h-[45vh] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(18, 15, 16, 0) 0%, #120f10 100%)',
            }}
          />
        </div>

        {/* Top spacer for navbar */}
        <div className="w-full pt-32" />

        {/* Bottom Title & Arrow in 12-column grid */}
        <div className="hero-bottom relative z-10 w-full pb-8">
          <div className="container">
            <div className="w-layout-grid _12-column-grid items-end">
              <div
                className="heading-line-wrap overflow-hidden"
                style={{ gridArea: 'span 1 / span 11 / span 1 / span 11' }}
              >
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-[13vw] font-medium tracking-[-0.05em] leading-[1.14] text-[#ffefe6]"
                >
                  {project.title}
                </motion.h1>
              </div>

              <div
                className="scroll-down-arrow self-end justify-self-end hidden md:block"
                style={{ gridArea: 'span 1 / span 1 / span 1 / span 1' }}
              >
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#ffefe6]"
                >
                  <path
                    d="M9.26172 0.75V13.3945L14.0312 8.60156L15.7773 10.3359L7.99609 18.0938L0.226562 10.3359L1.94922 8.60156L6.73047 13.3945V0.75H9.26172Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overview Section (Exact Webflow Layout) */}
      <div className="section">
        <div className="container">
          <div className="w-layout-grid _12-column-grid">
            <p
              id="w-node-_2a83f895-b952-0f3a-db20-e3186873bdbe-da06b93f"
              className="long-paragraph text-[1.25rem] leading-[130%] font-normal text-[#ffefe6]"
              style={{ gridArea: '1 / 6 / 2 / 12', maxWidth: '38ch' }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Image Gallery (Exact Webflow images-list) */}
      <div id="work" className="section">
        <div className="container">
          <div className="images-list flex flex-col gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <ParallaxGalleryItem
                key={idx}
                imgUrl={imgUrl}
                alt={`${project.title} render ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4. Next Project Intro (Exact Webflow section no-padding-bottom) */}
      <div id="work" className="section no-padding-bottom">
        <div className="container">
          <div className="w-layout-grid _12-column-grid">
            <p
              id="w-node-_6aeb431f-89ac-41e0-30c5-272c84559504-da06b93f"
              className="text-[1.25rem] leading-[130%] font-normal text-[#ffefe6]"
              style={{ gridArea: '1 / 6 / 2 / 10', maxWidth: '38ch' }}
            >
              Explore how my 3D design expertise has brought various projects to life. The next case study highlights unique challenges and innovative solutions, showcasing the transformative power of 3D visualization.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Next Project Marquee Strip (Exact Webflow last-section) */}
      <div id="work" className="section last-section w-full pb-24 md:pb-32">
        <Link
          href={`/project/${nextStrip.slug}`}
          prefetch={true}
          className="project-wrapper first-project group relative block w-full py-[4.5vw] overflow-hidden border-t border-b border-[#262626] cursor-pointer"
        >
          {/* Accent hover background */}
          <div
            className="project-background absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0 pointer-events-none"
            style={{ backgroundColor: nextStrip.bgColor }}
          />

          <div className="marquee relative z-10 flex w-full overflow-hidden select-none pointer-events-none">
            <div className="marquee-track-left flex items-center">
              <div className="flex items-center flex-nowrap flex-shrink-0">
                <div className="project-title-wrap flex items-center flex-shrink-0">
                  <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                    {nextStrip.title}
                  </span>
                </div>
                <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] overflow-hidden flex-shrink-0 bg-neutral-900">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="project-title-wrap flex items-center flex-shrink-0">
                  <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                    {nextStrip.title}
                  </span>
                </div>
                <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] overflow-hidden flex-shrink-0 bg-neutral-900">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex items-center flex-nowrap flex-shrink-0" aria-hidden="true">
                <div className="project-title-wrap flex items-center flex-shrink-0">
                  <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                    {nextStrip.title}
                  </span>
                </div>
                <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] overflow-hidden flex-shrink-0 bg-neutral-900">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="project-title-wrap flex items-center flex-shrink-0">
                  <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                    {nextStrip.title}
                  </span>
                </div>
                <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] overflow-hidden flex-shrink-0 bg-neutral-900">
                  <Image
                    src={nextStrip.image}
                    alt={nextStrip.title}
                    fill
                    sizes="25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
