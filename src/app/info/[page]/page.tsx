import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { page: 'styleguide' },
    { page: 'licenses' },
    { page: 'changelog' },
  ];
}

export function generateMetadata({ params }: { params: { page: string } }) {
  const titles: Record<string, string> = {
    styleguide: 'Styleguide',
    licenses: 'Licenses',
    changelog: 'Changelog',
  };
  return {
    title: `${titles[params.page] || 'Info'} — Rosa Template`,
  };
}

export default function InfoPage({ params }: { params: { page: string } }) {
  const { page } = params;

  if (!['styleguide', 'licenses', 'changelog'].includes(page)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#120f10] text-[#ffefe6] pt-36 pb-32 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ffefe6]/50 hover:text-[#ffefe6] transition-colors"
          >
            <span>&larr; Back to Home</span>
          </Link>
        </div>

        {/* 1. Styleguide */}
        {page === 'styleguide' && (
          <div className="space-y-20">
            <div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight text-[#ffefe6] mb-4">
                Styleguide
              </h1>
              <p className="text-[#ffefe6]/70 text-lg font-light max-w-xl">
                Design tokens, color system, and typographic scale extracted from Rosa.
              </p>
            </div>

            {/* Colors */}
            <div className="border-t border-[#262626] pt-12 space-y-6">
              <h2 className="text-2xl font-light text-[#ffefe6]">Colors</h2>
              <p className="text-sm font-light text-[#ffefe6]/60">
                Here you can see all the color tokens configured in the Rosa template.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-[#120f10] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#120f10] border border-[#262626]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Dark Canvas</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#120F10</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#ffefe6]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Warm White</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#FFEFE6</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#262626]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">White 12 Divider</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#262626</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#a7a79b]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Speaker Sage</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#A7A79B</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#aa93c0]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Package Purple</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#AA93C0</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#303438]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Printer Charcoal</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#303438</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#262626] space-y-2">
                  <div className="h-16 w-full rounded-lg bg-[#8fa6b3]" />
                  <span className="text-xs font-mono text-[#ffefe6]/50 block">Scapes Blue</span>
                  <span className="text-sm font-mono text-[#ffefe6]">#8FA6B3</span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="border-t border-[#262626] pt-12 space-y-8">
              <h2 className="text-2xl font-light text-[#ffefe6]">Typography</h2>
              <p className="text-sm font-light text-[#ffefe6]/60">
                Primary typographic hierarchy in BDOGrotesk.
              </p>

              <div className="space-y-8 border-t border-[#262626]/50 pt-8">
                <div>
                  <span className="text-xs font-mono text-[#ffefe6]/40 uppercase tracking-widest">H1 Heading (13vw)</span>
                  <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#ffefe6] mt-2">
                    Display Title
                  </h1>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#ffefe6]/40 uppercase tracking-widest">H2 Heading</span>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#ffefe6] mt-2">
                    Section Headline
                  </h2>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#ffefe6]/40 uppercase tracking-widest">Paragraph Text</span>
                  <p className="text-base md:text-lg font-light text-[#ffefe6]/80 leading-relaxed max-w-2xl mt-2">
                    This is standard paragraph copy used for intros, descriptions, and biographies across Rosa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Licenses */}
        {page === 'licenses' && (
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight text-[#ffefe6] mb-4">
                Licenses
              </h1>
              <p className="text-[#ffefe6]/80 text-lg font-light max-w-xl">
                All graphical assets in this template are licensed for personal and commercial use. If you&apos;d like to use a specific asset, please check the license below.
              </p>
            </div>

            <div className="border-t border-[#262626] pt-10 space-y-10">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#262626] space-y-4">
                <h2 className="text-2xl font-light text-[#ffefe6]">Font &ndash; BDO Grotesk</h2>
                <p className="text-base font-light text-[#ffefe6]/70 leading-relaxed">
                  This template uses BDO Grotesk, a free font under the OFL License. All 7 font weights are bundled locally.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#262626] space-y-4">
                <h2 className="text-2xl font-light text-[#ffefe6]">Image License</h2>
                <p className="text-base font-light text-[#ffefe6]/70 leading-relaxed">
                  All images in this template are made with Midjourney and custom 3D workflows by Jacob Nielsen.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3. Changelog */}
        {page === 'changelog' && (
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight text-[#ffefe6] mb-4">
                Changelog
              </h1>
              <p className="text-[#ffefe6]/80 text-lg font-light max-w-xl">
                Release version history and milestone updates.
              </p>
            </div>

            <div className="border-t border-[#262626] pt-10 space-y-8">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-[#262626] space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-light text-[#ffefe6]">Version 1.0</h2>
                  <span className="text-xs font-mono text-[#ffefe6]/40 uppercase tracking-widest">October 2026</span>
                </div>
                <p className="text-base font-light text-[#ffefe6]/70 leading-relaxed">
                  Initial release. Rebuilt 1:1 in Next.js 14 App Router with Tailwind CSS, Framer Motion, and BDOGrotesk typography.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
