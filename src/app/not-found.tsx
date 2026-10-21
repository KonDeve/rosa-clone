import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="utility-page-wrap min-h-screen flex items-center justify-center bg-[#120f10] text-[#ffefe6] px-6 text-center">
      <div className="utility-page-content max-w-[800px] flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-[-0.03em] mb-4 text-[#ffefe6] leading-tight">
          Oops!
          <br />
          Nothing is here.
        </h2>
        <div className="utility-form-text text-sm md:text-base text-[#ffefe6]/60 mb-8 font-light max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] hover:bg-[#ffefe6] hover:text-[#120f10] text-sm font-medium transition-all duration-300"
        >
          Return Home &rarr;
        </Link>
      </div>
    </div>
  );
}
