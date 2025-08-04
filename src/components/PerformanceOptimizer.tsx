import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        // Add critical image URLs here
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScroll = () => {
        // Add any scroll-based optimizations here
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
    };

    // Initialize optimizations
    preloadCriticalResources();
    lazyLoadImages();
    optimizeScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return null;
} 