import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/common/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';

export const metadata: Metadata = {
  title: 'Rosa — Webflow HTML website template',
  description:
    'Rosa is a simple and modern Webflow template for designers and creatives. Customize the styling to match your brand, and within minutes you will have created a unique experience.',
  icons: {
    icon: '/assets/Favicon.png',
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
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
