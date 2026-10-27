'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as [number, number, number, number];

const NAV_LINKS = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
] as const;

/*
 * Hardcoded port of the reference navbar:
 * - Desktop (>=992px): stacked roll-text links (in: inOutQuart 500ms, out: instant).
 * - Mobile (<=991px): burger morph, fullscreen #17181b menu, links rise
 *   y 101% -> 0 (750ms outExpo, 100ms stagger).
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isHome = pathname === '/' || !pathname;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 991px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className="navbar w-nav"
      role="banner"
      data-collapse="medium"
      data-animation="default"
      data-duration="1000"
      data-easing="ease-out-expo"
      data-easing2="ease-out-expo"
    >
      <div className="container">
        <div className="w-layout-grid _12-column-grid nav-grid">
          <Link
            href="/"
            aria-current={isHome ? 'page' : undefined}
            aria-label="Rosa — back to home"
            className="logo-wrap brand w--current cell-nav-logo"
            onClick={(e) => {
              if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img src="/assets/Rosa.svg" alt="" className="logo" loading="lazy" />
          </Link>

          <button
            type="button"
            className="menu-button cursor-pointer"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav-menu"
          >
            <div className={`menu-lines-wrap${open ? ' menu-lines-open' : ''}`}>
              <div className="menu-line is-top" />
              <div className="menu-line is-bottom" />
            </div>
          </button>

          <nav
            id="main-nav-menu"
            className={`nav-menu w-nav-menu cell-nav-menu${open ? ' menu-open' : ''}`}
            data-nav-menu-open={open || undefined}
            aria-label="Main"
          >
            <div className="nav-wrap">
              {NAV_LINKS.map((link, idx) => {
                const targetHref = isHome ? link.hash : `/${link.hash}`;

                return (
                  <motion.a
                    key={link.label}
                    href={targetHref}
                    className="nav-link-wrap"
                    initial={isMobile ? { y: '101%' } : false}
                    animate={
                      !isMobile || open
                        ? { y: '0%' }
                        : { y: '101%' }
                    }
                    transition={
                      open
                        ? { delay: 0.1 * idx, duration: 0.75, ease: EASE_OUT_EXPO }
                        : { duration: 0 }
                    }
                    onClick={(e) => {
                      setOpen(false);
                      if (isHome) {
                        e.preventDefault();
                        const targetId = link.hash.replace('#', '');
                        const elem = document.getElementById(targetId);
                        if (elem) {
                          elem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <div className="nav-link-text">{link.label}</div>
                    <div className="nav-link-text nav-link-hover-text" aria-hidden="true">{link.label}</div>
                  </motion.a>
                );
              })}
            </div>
          </nav>

          <div className="nav-title cell-nav-title">
            Freelance 3D designer<br />Based in London
          </div>

          <div className="nav-copyright cell-nav-copyright">© 2024</div>
        </div>
      </div>
    </header>
  );
}
