'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const baseItems = items.length > 0 ? items : defaultItems;

  // Repeat items if not enough
  const repeatedItems = Array.from({ length: totalItems }, (_, i) => baseItems[i % baseItems.length]);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMove = 150; // smoother, slower motion
      const inertia = [0.6, 0.4, 0.3, 0.2];
      rowRefs.current.forEach((row, i) => {
        if (row) {
          const direction = i % 2 === 0 ? 1 : -1;
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMove - maxMove / 2) * direction;

          gsap.to(row, {
            x: moveAmount,
            duration: 1 + inertia[i % inertia.length],
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      });
    };

    const removeLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      removeLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 100%)`,
        }}
      >
        {/* Optional soft noise layer */}
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px] opacity-5"></div>

        <div className="gap-[2px] flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
          {[...Array(4)].map((_, rowIdx) => (
            <div
              key={rowIdx}
              className="grid gap-[2px] grid-cols-7"
              ref={(el) => (rowRefs.current[rowIdx] = el)}
            >
              {[...Array(7)].map((_, colIdx) => {
                const content = repeatedItems[rowIdx * 7 + colIdx];
                return (
                  <div key={colIdx} className="relative">
                    <div className="relative w-[180px] h-[120px] overflow-hidden rounded-[6px] bg-[#111] flex items-center justify-center text-white text-[1.5rem]">
                      {typeof content === 'string' && content.startsWith('/') ? (
                        <img
                          src={content}
                          alt="artist"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-[6px] brightness-[1.2] opacity-100"
                        />
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
