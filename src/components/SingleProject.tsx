import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ISingleProjectProps {
  imgSrc: string;
  name: string;
  github: string;
  deployment: string;
  needsRotate: boolean;
}

export default function SingleProject({ imgSrc, github, deployment, needsRotate}: ISingleProjectProps) {
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

  //Video to stop and replay - hover Effect
  const videoTag = useRef<HTMLVideoElement | null>(null)


const handleHoverIn = () => {
    videoTag.current?.pause();
};
const handleHoverOut = () => {
    videoTag.current?.play();
};

  return (
    <div
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      ref={ref}
       className={`
    ${needsRotate ? "lg:w-[250px] w-[150px] " : " w-[150px] lg:w-[250px]"} relative group transition-all duration-700 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'}
  `}
    >
     <video
  src={imgSrc}
  ref={videoTag}
  autoPlay
  muted
  loop
  playsInline
  className={` ${needsRotate ? 'absolute top-1/2 left-1/2 lg:h-[250px] h-[150px] transform rotate-90 -translate-x-1/2 -translate-y-1/2 object-cover  z-0  max-w-none max-h-none' : "w-full h-auto"} lg:rounded-[38px] rounded-3xl grayscale-0 group-hover:grayscale
  `}
 
/>
      <div className='z-10 bg-grayish w-[100%] h-[100%] group-hover:opacity-60 absolute top-0 opacity-0 lg:rounded-[38px] rounded-3xl'>
        </div>
        <div className='z-20 text-center absolute group-hover:opacity-100 opacity-0  transition-all duration-300 ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-2 text-sm  text-grayish'>
        <Link
          to={github}
          target="_blank"
          rel="noopener noreferrer"
          className='hover:border-2 hover:border-fuchsia-200 hover:text-zinc-50 bg-fuchsia-200 hover:bg-transparent px-3 py-2 '
        >
          GitHub
        </Link>
        <Link
          to={deployment}
          target="_blank"
          rel="noopener noreferrer"
          className='hover:border-2 hover:border-fuchsia-200 bg-fuchsia-200 hover:bg-transparent px-3 py-2 rounded-br-lg hover:text-zinc-50'
        >
          Deployment
        </Link>
      </div>
      
    </div>
  );
}

