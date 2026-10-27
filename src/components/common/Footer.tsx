'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      {/* Top Part */}
      <div className="footer-top">
        <div className="container no-row-gap">
          <div className="w-layout-grid _12-column-grid">
            <p
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b81-ed8d6b7d"
              className="footer-paragraph"
            >
              Freelance 3D designer Based in London
            </p>

            <div
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b83-ed8d6b7d"
              className="footer-primary-links"
            >
              <a
                href="https://www.instagram.com/jacobdnielsen88/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/jacobdnielsen88"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                X (Twitter)
              </a>
            </div>

            <div
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b88-ed8d6b7d"
              className="footer-primary-links"
            >
              <a
                href="https://www.linkedin.com/in/jacob-nielsen-380b6b26/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/jacobnielsen"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="w-layout-grid _12-column-grid footer-grid">
            <a
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b90-ed8d6b7d"
              href="mailto:hi@rosastudio.com"
              className="large-link footer-large-link w-inline-block"
            >
              <div className="hero-link-text">hi@rosastudio.com</div>
              <div className="hero-link-text hover-text" aria-hidden="true">hi@rosastudio.com</div>
              <div className="arrow-wrap">
                <img
                  src="/assets/arrow-diag2.svg"
                  alt=""
                  className="hero-button-arrow"
                  loading="lazy"
                />
                <img
                  src="/assets/arrow-diag2.svg"
                  alt=""
                  className="hero-button-arrow hover-arrow"
                  loading="lazy"
                />
              </div>
            </a>

            <div
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b98-ed8d6b7d"
              className="footer-primary-links"
            >
              <Link href="/info/styleguide" className="link">
                Styleguide
              </Link>
              <Link href="/info/licenses" className="link">
                Licenses
              </Link>
            </div>

            <div
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6b9d-ed8d6b7d"
              className="footer-primary-links"
            >
              <Link href="/info/changelog" className="link">
                Changelog
              </Link>
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Webflow
              </a>
            </div>

            <p
              id="w-node-_890f2dec-0200-3f0f-ba79-5470ed8d6ba2-ed8d6b7d"
              className="footer-paragraph"
            >
              Write me a message or follow me on socials
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
