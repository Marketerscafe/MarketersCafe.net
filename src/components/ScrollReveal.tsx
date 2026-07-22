import React, { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

/**
 * Word lighting on scroll. Lights up text word-by-word as it scrolls through the viewport.
 */
export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.85; // Start lighting when 85% down the viewport
      const end = windowHeight * 0.25;   // Fully lit when 25% down
      
      const currentPos = rect.top;
      
      if (currentPos > start) {
        setScrollRatio(0);
      } else if (currentPos < end) {
        setScrollRatio(1);
      } else {
        const totalDistance = start - end;
        const currentDistance = start - currentPos;
        setScrollRatio(currentDistance / totalDistance);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  if (isReducedMotion) {
    return <p className={className}>{text}</p>;
  }

  const words = text.split(/\s+/);
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className} style={{ display: 'block', flexWrap: 'wrap' }}>
      {words.map((word, index) => {
        // Calculate the relative trigger index for the word
        const wordPosition = index / totalWords;
        // Make the fade-in transition sharp (e.g. multiplier of 8)
        const opacity = Math.min(Math.max((scrollRatio - wordPosition) * 8 + 0.15, 0.15), 1);
        
        return (
          <span
            key={index}
            style={{
              opacity,
              transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-block',
              marginRight: '0.25em',
              fontWeight: opacity > 0.5 ? 'inherit' : 300,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades and slides an element in when it enters the viewport.
 */
export function ScrollFadeIn({ children, className = '', delay = 0 }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before full entry
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isReducedMotion]);

  const style = isReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      };

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}
