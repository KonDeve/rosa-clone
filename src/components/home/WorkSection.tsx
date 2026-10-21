'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectItem {
  slug: string;
  title: string;
  image: string;
  bgColor: string;
  reverse?: boolean;
}

const PROJECTS: ProjectItem[] = [
  { slug: 'speaker', title: 'Speaker', image: '/assets/speaker3.webp', bgColor: '#a7a79b' },
  { slug: 'package', title: 'Package', image: '/assets/wrapped.webp', bgColor: '#aa93c0', reverse: true },
  { slug: 'printer', title: 'Printer', image: '/assets/printer2.webp', bgColor: '#303438' },
  { slug: 'scapes', title: 'Scapes', image: '/assets/scapes3.webp', bgColor: '#8fa6b3', reverse: true },
];

export default function WorkSection() {
  return (
    <section id="work" className="section w-full bg-[#120f10]">
      <div className="w-full">
        {PROJECTS.map((project, idx) => {
          const trackClass = project.reverse ? 'marquee-track-right' : 'marquee-track-left';

          return (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className={`project-wrapper group relative block w-full py-[4.5vw] overflow-hidden border-b border-[#262626] transition-colors duration-300 ${
                idx === 0 ? 'first-project border-t' : ''
              }`}
            >
              {/* Background color reveal on hover */}
              <div
                className="project-background absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0 pointer-events-none"
                style={{ backgroundColor: project.bgColor }}
              />

              {/* Infinite Marquee Track */}
              <div className="marquee relative z-10 flex w-full overflow-hidden select-none">
                <div className={`${trackClass} flex items-center`}>
                  {/* Repeated Block 1 */}
                  <div className="flex items-center flex-nowrap flex-shrink-0">
                    <div className="project-title-wrap flex items-center flex-shrink-0">
                      <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                        {project.title}
                      </span>
                    </div>
                    <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="project-title-wrap flex items-center flex-shrink-0">
                      <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                        {project.title}
                      </span>
                    </div>
                    <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Repeated Block 2 (Seamless loop) */}
                  <div className="flex items-center flex-nowrap flex-shrink-0" aria-hidden="true">
                    <div className="project-title-wrap flex items-center flex-shrink-0">
                      <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                        {project.title}
                      </span>
                    </div>
                    <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="project-title-wrap flex items-center flex-shrink-0">
                      <span className="project-title text-[13vw] font-light tracking-[-0.05em] leading-[0.9] text-[#ffefe6]">
                        {project.title}
                      </span>
                    </div>
                    <div className="project-image relative h-[10.25vw] aspect-[16/9] mx-[2.5vw] rounded-lg overflow-hidden flex-shrink-0 bg-neutral-900 shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
