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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${gridPos} relative pl-5 flex items-center w-30 h-20 
        bg-yellow-200 rounded-br-4xl text-lg group
        transition-all duration-700 ease-out
        transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <img
        src={path}
        alt={name}
        className="absolute w-1/3 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
      />
      <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {name}
      </p>
    </div>
  );
}
