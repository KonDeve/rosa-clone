import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content w-form">
        <h2 className="utility-page-heading">
          Oops!
          <br />
          Nothing is here.
        </h2>
        <div className="utility-form-text">
          The page you are looking for doesn&apos;t exist or has been moved
        </div>
      </div>
    </div>
  );
}
