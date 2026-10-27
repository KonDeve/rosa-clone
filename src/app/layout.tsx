import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/common/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://rosa-clone.vercel.app'),
  title: 'Rosa — Webflow HTML website template',
  description:
    'Rosa is a simple and modern Webflow template for designers and creatives. Customize the styling to match your brand, and within minutes you will have created a unique experience.',
  icons: {
    icon: '/assets/Favicon.png',
    apple: '/assets/Webclip.png',
  },
  openGraph: {
    title: 'Rosa — Webflow HTML website template',
    description:
      'Rosa is a simple and modern Webflow template for designers and creatives.',
    url: 'https://rosa-clone.vercel.app',
    siteName: 'Rosa',
    images: [
      {
        url: '/assets/hero.png',
        width: 1200,
        height: 630,
        alt: 'Rosa 3D Design Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#120f10]">
      <body className="bg-[#120f10] text-[#ffefe6] antialiased min-h-screen overflow-x-hidden selection:bg-[#ffefe6] selection:text-[#120f10]">
        <MotionConfig reducedMotion="user">
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
