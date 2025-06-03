'use client';

import GridMotion from '@/components/GridMotion';
import { AnimatedAIChat } from '@/components/animated-ai-chat';

export default function Home() {
  const items = [
    '/1.jpg',
    '/10.jpg',
    '/11.png',
    '/michealjackson.jpg',
    '/12.webp',
    '/13.jpg',
    '/14.webp',
    '/15.jpg',
    '/16.jpg',
    '/2.jpg',
    '/18.jpg',
    '/19.jpg',
    '/17.jpg',
    '/mj.jpg',
    '/20.jpg',
    '/21.jpg',
    '/22.jpg',
    '/23.png',
    '/24.jpg',
    '/25.webp',
    '/26.jpg',
    '/3.avif',
    '/4.jpg',
    '/6.jpg',
    '/9.jpeg',
    '/7.jpg',
    '/8.webp',
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <GridMotion items={items} gradientColor="#000" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <AnimatedAIChat />
      </div>
    </div>
  );
}
