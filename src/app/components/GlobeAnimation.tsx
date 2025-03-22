"use client";

import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';

export default function GlobeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  const phi = useSpring(0);
  
  useEffect(() => {
    let phi = 0;
    let width = 0;
    let globe: ReturnType<typeof createGlobe>;
    
    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        if (globe) globe.destroy();
        
        globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width,
          height: width,
          phi: 0,
          theta: 0.2,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.3, 0.3, 0.3],
          markerColor: [0.1, 0.8, 1],
          glowColor: [1, 1, 1],
          markers: [
            // US
            { location: [37.7749, -122.4194], size: 0.1 },
            // Europe
            { location: [48.8566, 2.3522], size: 0.1 },
            // Asia
            { location: [35.6762, 139.6503], size: 0.1 },
          ],
          onRender: (state) => {
            if (!pointerInteracting.current) {
              phi += 0.005;
            }
            state.phi = phi;
          },
        });
      }
    };
    
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      if (globe) globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);
  
  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto relative">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', cursor: 'grab' }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phi.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phi.set(delta / 100);
          }
        }}
      />
    </div>
  );
} 