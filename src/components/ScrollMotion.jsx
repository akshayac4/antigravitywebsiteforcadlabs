import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelectors = [
  '.section-header',
  '.page-header',
  '.why-grid .glass-panel',
  '.grid-cards .glass-panel',
  '.methodology-timeline .glass-panel',
  '.solutions-grid .glass-panel',
  '.industry-card',
  '.testimonials-grid .glass-panel',
  '.service-detail-section .glass-panel',
  '.project-card',
  '.blog-card',
  '.blog-post-page article',
  '.cta-section'
];

export default function ScrollMotion() {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = 0;
    let observer;

    const setScrollVars = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scrollY / maxScroll, 1);
      const isMobile = window.innerWidth <= 768;
      const slow = isMobile ? 0.035 : 0.08;
      const reverse = isMobile ? -0.025 : -0.05;
      const orbA = isMobile ? 0.025 : 0.06;
      const orbB = isMobile ? -0.02 : -0.04;

      root.style.setProperty('--scroll-progress', progress.toFixed(4));
      root.style.setProperty('--scroll-slow', `${(scrollY * slow).toFixed(2)}px`);
      root.style.setProperty('--scroll-reverse', `${(scrollY * reverse).toFixed(2)}px`);
      root.style.setProperty('--scroll-orb-a', `${(scrollY * orbA).toFixed(2)}px`);
      root.style.setProperty('--scroll-orb-b', `${(scrollY * orbB).toFixed(2)}px`);
      root.style.setProperty('--hero-rotate', `${(-8 + progress * (isMobile ? 4 : 10)).toFixed(2)}deg`);
      frameId = 0;
    };

    const requestScrollUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(setScrollVars);
      }
    };

    const setupReveal = () => {
      const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(',')));

      revealItems.forEach((item, index) => {
        item.classList.add('motion-reveal');
        item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
      });

      if (reduceMotionQuery.matches) {
        revealItems.forEach((item) => item.classList.add('motion-visible'));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14
      });

      revealItems.forEach((item) => observer.observe(item));
    };

    const applyMotionPreference = () => {
      root.classList.toggle('motion-reduced', reduceMotionQuery.matches);
      root.classList.toggle('motion-active', !reduceMotionQuery.matches);
      setScrollVars();
    };

    applyMotionPreference();
    setupReveal();

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);

    reduceMotionQuery.addEventListener('change', applyMotionPreference);

    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      reduceMotionQuery.removeEventListener('change', applyMotionPreference);
      if (observer) observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname]);

  return null;
}
