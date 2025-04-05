'use client';

import { useEffect } from 'react';
import { deferNonCriticalResources, setupIntersectionObserver } from '@/lib/optimization';

export default function OptimizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Defer loading of non-critical resources
    deferNonCriticalResources();
    
    // Setup lazy loading for images
    setupIntersectionObserver('img[data-lazy="true"]', (entry) => {
      const img = entry.target as HTMLImageElement;
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-lazy');
        img.removeAttribute('data-src');
      }
    });
    
    // Setup lazy loading for sections
    setupIntersectionObserver('[data-lazy-section="true"]', (entry) => {
      entry.target.classList.add('animate-fadeIn');
      entry.target.removeAttribute('data-lazy-section');
    });
  }, []);

  return <>{children}</>;
}
