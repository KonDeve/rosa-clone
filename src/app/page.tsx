import React from 'react';
import Preloader from '@/components/home/Preloader';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import WorkSection from '@/components/home/WorkSection';
import AboutSection from '@/components/home/AboutSection';
import ClientsSection from '@/components/home/ClientsSection';

export default function HomePage() {
  return (
    <main>
      <Preloader />
      <HeroSection />
      <IntroSection />
      <WorkSection />
      <AboutSection />
      <ClientsSection />
    </main>
  );
}
