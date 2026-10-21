'use client';

import React from 'react';
import Link from 'next/link';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jacobdnielsen88/' },
  { label: 'X (Twitter)', href: 'https://twitter.com/jacobdnielsen88' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jacob-nielsen-380b6b26/' },
  { label: 'Dribbble', href: 'https://dribbble.com/jacobnielsen' },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer w-full bg-[#120f10] text-[#ffefe6] border-t border-[#262626] pt-24 pb-12">
      <div className="container">
        <div className="w-full space-y-24">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 text-sm font-medium text-[#ffefe6]/80 max-w-sm">
              Freelance 3D designer Based in London
            </div>

            <div className="md:col-span-7 flex flex-wrap gap-8 md:gap-12 md:justify-end">
              {SOCIALS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="roll-link text-sm font-medium text-[#ffefe6]/80 hover:text-[#ffefe6]"
                >
                  <span className="roll-text-main">{link.label}</span>
                  <span className="roll-text-clone">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Oversized Interactive Email Link (Exact Webflow large-link) */}
          <div className="border-t border-b border-[#262626] py-16 md:py-24">
            <a
              href="mailto:hi@rosastudio.com"
              className="large-link footer-large-link group flex items-center justify-between w-full"
            >
              <div className="relative overflow-hidden leading-[1.1] text-4xl sm:text-6xl md:text-8xl lg:text-[7.5vw] font-light tracking-[-0.04em] text-[#ffefe6]">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full">
                  hi@rosastudio.com
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full">
                  hi@rosastudio.com
                </span>
              </div>

              <div className="arrow-wrap relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 overflow-hidden flex-shrink-0 self-center">
                <img
                  src="/assets/arrow-diag2.svg"
                  alt=""
                  className="hero-button-arrow w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-full group-hover:-translate-y-full"
                />
                <img
                  src="/assets/arrow-diag2.svg"
                  alt=""
                  className="hero-button-arrow hover-arrow absolute -bottom-full -left-full w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-x-full group-hover:-translate-y-full"
                />
              </div>
            </a>
          </div>

          {/* Bottom Utility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs font-mono text-[#ffefe6]/40">
            <div className="md:col-span-5">
              Write me a message or follow me on socials
            </div>

            <div className="md:col-span-7 flex flex-wrap gap-8 md:justify-end">
              <Link href="/info/styleguide" className="hover:text-[#ffefe6] transition-colors">
                Styleguide
              </Link>
              <Link href="/info/licenses" className="hover:text-[#ffefe6] transition-colors">
                Licenses
              </Link>
              <Link href="/info/changelog" className="hover:text-[#ffefe6] transition-colors">
                Changelog
              </Link>
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffefe6] transition-colors"
              >
                Webflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
