import { useEffect, useRef, useState } from 'react';

interface ChapterHeadlineProps {
    content: string
}

export default function ChapterHeadline({content}: ChapterHeadlineProps) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  let prevY = 0;
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    ([entry]) => {
      const currentY = entry.boundingClientRect.top;
      const isScrollingDown = currentY < prevY;
      const isMostlyVisible = entry.intersectionRatio > 0.6;

      if (entry.isIntersecting && isMostlyVisible) {
        if (isScrollingDown && !hasAnimated) {
          setVisible(true);
          hasAnimated = true; // Animation nur einmal auslösen
        } else if (!hasAnimated) {
          // Beim Hochscrollen sichtbar ohne Animation (sichtbar ohne Zustand ändern)
          setVisible(true);
        }
      }

      // Optional: Reset wenn komplett raus (kann man auch weglassen, je nach gewünschtem Verhalten)
      if (!entry.isIntersecting && currentY > window.innerHeight) {
        setVisible(false);
        hasAnimated = false;
      }

      prevY = currentY;
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  return (
    <div
      ref={ref}
      className={`
        sticky top-0 z-10 bg-beyge
        text-grayish text-2xl tracking-wider border-t border-b py-3 border-darkerbeyge
        transition-transform duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'}
      `}
      style={{ willChange: 'opacity, transform' }}
    >
      {content}
    </div>
  );
}