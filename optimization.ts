// This file contains utility functions for optimizing image loading
// and other performance-related features

// Function to generate image placeholder blur data URLs
export function generateBlurPlaceholder(width: number, height: number): string {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23384766'/%3E%3C/svg%3E`;
}

// Function to defer non-critical resources
export function deferNonCriticalResources(): void {
  if (typeof window !== 'undefined') {
    // Add event listener for page load
    window.addEventListener('load', () => {
      // Defer loading of non-critical resources
      setTimeout(() => {
        const nonCriticalStyles = document.querySelectorAll('link[data-non-critical="true"]');
        nonCriticalStyles.forEach((link) => {
          (link as HTMLLinkElement).media = 'all';
        });
      }, 100);
    });
  }
}

// Function to preload critical resources
export function preloadCriticalResources(resources: string[]): void {
  if (typeof window !== 'undefined') {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.js') ? 'script' : 'style';
      document.head.appendChild(link);
    });
  }
}

// Function to implement intersection observer for lazy loading
export function setupIntersectionObserver(
  selector: string, 
  callback: (entry: IntersectionObserverEntry) => void
): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.1
    });

    document.querySelectorAll(selector).forEach(element => {
      observer.observe(element);
    });
  }
}
