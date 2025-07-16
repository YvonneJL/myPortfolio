import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ISingleProjectProps {
  imgSrc: string;
  name: string;
  github: string;
  deployment: string;
}

export default function SingleProject({ imgSrc, name, github, deployment }: ISingleProjectProps) {
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
        relative group w-[13vw] transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'}
      `}
    >
      <img src={imgSrc} alt={name} className="w-full h-auto" />
      <div className='z-10 bg-grayish w-[100%] h-[100%] group-hover:opacity-60 absolute top-0 opacity-0'>
        </div>
        <div className='z-20 text-center absolute group-hover:opacity-100 opacity-0  transition-all duration-300 ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-2 text-sm  text-grayish'>
        <Link
          to={github}
          target="_blank"
          rel="noopener noreferrer"
          className='hover:border-2 hover:border-fuchsia-200 bg-fuchsia-200 hover:bg-transparent px-3 py-2 hover:text-grayish'
        >
          GitHub
        </Link>
        <Link
          to={deployment}
          target="_blank"
          rel="noopener noreferrer"
          className='hover:border-2 hover:border-fuchsia-200 bg-fuchsia-200 hover:bg-transparent px-3 py-2 rounded-br-lg hover:text-grayish'
        >
          Deployment
        </Link>
      </div>
      
    </div>
  );
}
