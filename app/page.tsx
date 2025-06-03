'use client';

import GridMotion from '@/components/GridMotion';
import { AnimatedAIChat } from '@/components/animated-ai-chat';

export default function Home() {
  const items = [
    'https://images.unsplash.com/photo-1603415526960-f8f0f6e7e359',
    'https://images.unsplash.com/photo-1598387841026-0b5c98fe2b78',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    'https://images.unsplash.com/photo-1600803907084-56b7501af8f6',
    'https://images.unsplash.com/photo-1610563166152-9ab30e4a1b46',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
    'https://images.unsplash.com/photo-1510070009289-b5bc34383727',
    'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33',
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    'https://images.unsplash.com/photo-1593642532973-d31b6557fa68',
    'https://images.unsplash.com/photo-1609943249653-2fe9f7b6b7ba',
    'https://images.unsplash.com/photo-1549921296-3a6b2c5d7d26',
    'https://images.unsplash.com/photo-1603052877333-061e4eb3980c',
    'https://images.unsplash.com/photo-1503602642458-232111445657',
    'https://images.unsplash.com/photo-1557682260-96727c8e9b1c',
    'https://images.unsplash.com/photo-1581090700227-1e8c01af7d77',
    'https://images.unsplash.com/photo-1580236917483-89d86da3fa0c',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    'https://images.unsplash.com/photo-1581091870622-e2f8394b4c4c',
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
