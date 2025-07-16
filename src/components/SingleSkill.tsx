import React, { useEffect, useRef, useState } from 'react';

interface ISingleSkillProps {
  path: string;
  name: string;
  gridPos: string;
  index: number;
}

export default function SingleSkill({ path, name, gridPos, index }: ISingleSkillProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } // ⬅️ etwas höherer threshold verhindert zu frühes Flackern
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${gridPos} relative pl-5 flex items-center w-30 h-20 
        bg-yellow-200 rounded-br-4xl text-lg group
        transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <img
        src={path}
        alt={name}
        className="absolute w-1/3 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
      />
      <p className="absolute text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {name}
      </p>
    </div>
  );
}
