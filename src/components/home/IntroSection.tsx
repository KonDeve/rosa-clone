import React from 'react';

/*
 * Static intro — the reference triggers no animation here (the paragraph
 * only exists as a plain grid cell, cols 6-10).
 */
export default function IntroSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="w-layout-grid _12-column-grid">
          <p id="w-node-_65a93fe9-7b41-7fc0-c8b8-76ad211ccdcd-da06b8b2" className="cell-intro">
            Hi, I am Rosa. I am a passionate and innovative 3D designer with over a decade of experience in the field. My journey began with a fascination for visual arts and a keen interest in technology.
          </p>
        </div>
      </div>
    </section>
  );
}
