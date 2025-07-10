import React, { useEffect, useRef, useState } from 'react';

interface ChapterHeadlineProps {
    content: string
}

export default function ChapterHeadline({content}: ChapterHeadlineProps) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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