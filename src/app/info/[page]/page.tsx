import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { page: 'styleguide' },
    { page: 'licenses' },
    { page: 'changelog' },
  ];
}

export function generateMetadata({ params }: { params: { page: string } }): Metadata {
  const titles: Record<string, string> = {
    styleguide: 'Styleguide',
    licenses: 'Licenses',
    changelog: 'Changelog',
  };
  const descriptions: Record<string, string> = {
    styleguide: 'Typography, colors, forms, and rich text styles used across the Rosa template.',
    licenses: 'Font and image license information for the Rosa template.',
    changelog: 'Release history for the Rosa template.',
  };
  return {
    title: titles[params.page] || 'Info',
    description: descriptions[params.page],
  };
}

export default function InfoPage({ params }: { params: { page: string } }) {
  const { page } = params;

  if (!['styleguide', 'licenses', 'changelog'].includes(page)) {
    notFound();
  }

  if (page === 'styleguide') {
    return (
      <main className="min-h-screen bg-[#120f10] text-[#ffefe6]">
        {/* Styleguide Hero */}
        <div className="section styelguide-hero-section">
          <div className="container styleguide-container">
            <h1 className="styleguide-heading">Styleguide</h1>
            <div className="divider styleguide-bottom-divider" />
          </div>
        </div>

        {/* Colors */}
        <div className="section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Colors</h2>
              <p>Here you can see (and change) all the colors in the template</p>
            </div>
            <div className="_4-column-grid">
              <div className="color-container"><div className="swatch dark" /></div>
              <div className="color-container"><div className="swatch medium-dark" /></div>
              <div className="color-container"><div className="swatch white-12" /></div>
              <div className="color-container"><div className="swatch white" /></div>
              <div className="color-container"><div className="swatch brand" /></div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Typography</h2>
              <p>Here you can see and change the typography</p>
            </div>
            <div className="typography-container"><div className="label">Paragraph</div><div>This is some text.</div></div>
            <div className="typography-container"><div className="label">Text Large</div><div className="text-large">This is some text.</div></div>
            <div className="typography-container"><div className="label">H1</div><h1>Heading</h1></div>
            <div className="typography-container"><div className="label">H2</div><h2>Heading</h2></div>
            <div className="typography-container"><div className="label">H3</div><h3>Heading</h3></div>
            <div className="typography-container"><div className="label">H4</div><h4>Heading</h4></div>
            <div className="typography-container"><div className="label">H5</div><h5>Heading</h5></div>
            <div className="typography-container"><div className="label">H6</div><h6>Heading</h6></div>
          </div>
        </div>

        {/* Forms */}
        <div className="section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Forms</h2>
              <p>Here you can see and change the form component</p>
            </div>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" className="form">
                <input className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Your name" type="text" id="name" />
                <input className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Your email" type="email" id="email" required />
                <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit your message" />
              </form>
            </div>
          </div>
        </div>

        {/* Rich text */}
        <div className="section last-section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Rich text</h2>
              <p>Here you can see and change the rich text component</p>
            </div>
            <div className="rich-text-block w-richtext">
              <h1>What’s a Rich Text element?</h1>
              <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
              <h2>This is how it works</h2>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
              <figure className="w-richtext-align-center w-richtext-figure-type-image">
                <div>
                  <Image
                    src="/assets/styleguide-sample.jpg"
                    alt="Example image"
                    width={1200}
                    height={800}
                    style={{ height: 'auto' }}
                  />
                </div>
                <figcaption>Image with a caption</figcaption>
              </figure>
              <h3>Static and dynamic content editing</h3>
              <blockquote>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</blockquote>
              <h4>How to customize formatting for each rich text</h4>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
              <h5>Yet another heading</h5>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
              <ul role="list">
                <li>This is a very nice bullet</li>
                <li>And so is this</li>
                <li>And here is a third one</li>
              </ul>
              <h6>Last one, I promise</h6>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (page === 'licenses') {
    return (
      <main className="min-h-screen bg-[#120f10] text-[#ffefe6]">
        <div className="section styelguide-hero-section">
          <div className="container styleguide-container">
            <h1 className="styleguide-heading">Licenses</h1>
            <p>All graphical assets in this template are licensed for personal and commercial use. If you&apos;d like to use a specific asset, please check the license below.</p>
            <div className="divider styleguide-bottom-divider" />
          </div>
        </div>

        <div className="section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Font –&nbsp;BDO&nbsp;Grotesk</h2>
              <p>
                This template uses BDO&nbsp;Grotesk, a free font under the OFL License. It is available{' '}
                <a href="https://fontesk.com/bdo-grotesk-font/" target="_blank" rel="noopener noreferrer" className="link underline">
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="section last-section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Image license</h2>
              <p>All images in this template are made with Midjourney.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (page === 'changelog') {
    return (
      <main className="min-h-screen bg-[#120f10] text-[#ffefe6]">
        <div className="section styelguide-hero-section">
          <div className="container styleguide-container">
            <h1 className="styleguide-heading">Changelog</h1>
          </div>
        </div>

        <div className="section">
          <div className="container styleguide-container">
            <div className="styleguide-heading-wrapper">
              <h2 className="text-large margin-bottom-8">Version 1.0</h2>
              <p>Initial release</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return null;
}
