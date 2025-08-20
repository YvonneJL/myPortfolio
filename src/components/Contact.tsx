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
    link: "/Lebenslauf-portfolio.pdf",
    name: "Lebenslauf"
  },
  {
    link: "/Yvonne-Loder-Zertifikat.pdf",
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
        <h4 className="lg:text-6xl text-[65px] tracking-wider">
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
        <div className='flex lg:flex-row flex-wrap justify-end lg:gap-10 gap-5 mt-5 lg:mt-0'>
          {links.map((link, index)=> (
            <Links key={index} name={link.name} link={link.link}/>
          ))}
        </div>
      </article>

    </section>
  );
}
