import { useEffect, useRef, useState } from 'react'
import ChapterHeadline from './ChapterHeadline'
import type { ILinks } from '../interfaces/Links';
import Links from './Links';

export default function Contact() {
  const email = "yvonneloder@gmx.de";
  const sectionRef = useRef(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  const links: ILinks[] = [{
    link: "https://github.com/YvonneJL",
    name: "Github"
  },
  {
    link: "https://www.linkedin.com/in/yvonne-loder",
    name: "LinkedIn"
  },
  {
    link: "https://github.com/YvonneJL",
    name: "Lebenslauf"
  },
  {
    link: "https://github.com/YvonneJL",
    name: "Zertifikat"
  },
]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayAnimation(false);  // Reset Animation
          // Kurze Pause bevor Animation neu startet
          setTimeout(() => setPlayAnimation(true), 50);
        }
      },
      {
        threshold: 0.5, // Ab 50% Sichtbarkeit triggern
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    }
  }, []);

  return (
    <section id='contact' ref={sectionRef} className='h-screen pb-10 text-grayish'>
      <ChapterHeadline content='Contact' />
      <article className='flex flex-col text-right items-end h-full justify-center gap-5 pr-10'>
        <h4 className="text-6xl tracking-wider">
          {email.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block opacity-0 ${playAnimation ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {char}
            </span>
          ))}
        </h4>
        <div className='flex flex-row gap-10'>
          {links.map((link)=> (
            <Links name={link.name} link={link.link}/>
          ))}
        </div>
      </article>

    </section>
  );
}
