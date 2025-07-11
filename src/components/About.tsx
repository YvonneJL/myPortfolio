import React, { useEffect, useRef, useState } from 'react';
import ChapterHeadline from './ChapterHeadline';

export default function About() {
  // ScrollFadeIn Komponente intern
function ScrollFadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        // Nicht unobserve, damit es weiter auf Sichtbarkeit prüft
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 ease-out transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        
        ${className}
      `}
      style={{
        willChange: 'opacity, transform',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


  return (
    <section
      id="about"
      className="flex flex-col text-xl leading-relaxed text-grayish tracking-wider relative"
    >
      <ChapterHeadline content="About" />

      {/* Bild: zuerst aufpoppen */}
      <ScrollFadeIn
        className="flex justify-center w-full absolute left-1/2 top-65 -translate-x-1/2"
        delay={0}
      >
        <img src="../../public/img/Frame 178259.svg" alt="Portrait YL" />
      </ScrollFadeIn>

      {/* Erster Textblock */}
      <div className="pt-10">
        <ScrollFadeIn delay={300}>
          <p className="text-right w-1/2 ml-auto pb-10">
            Hi, ich bin Yvonne! Frontend Entwicklerin mit pädagogischem Hintergrund. Ich nutze mein Gespür
            für Struktur, kreative Lösungsansätze und die Fähigkeit, Komplexes verständlich zu machen, um
            klaren, innovativen Code zu schreiben und benutzerfreundliche Interfaces zu gestalten.
          </p>
        </ScrollFadeIn>
      </div>

      {/* Zweiter und dritter Textblock */}
      <div className="flex flex-row">
        <div>
          <ScrollFadeIn delay={600}>
            <p className="my-10 w-1/3 pb-10">
              Über Umwege bin ich zum Coden gekommen und habe darin überraschend meine Leidenschaft gefunden.
              Es verbindet genau das, was mich schon immer begeistert hat: Kreativität und logisches Denken.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={900}>
            <p className="w-5/6 ml-auto text-right pb-5">
              Der Weg war nicht ganz gerade, aber das Ziel umso klarer. Nach einem sechsmonatigen Boot Camp
              mit Schwerpunkt auf Typescript und React bin ich seit Mai 2025 zertifizierte Frontend Developerin.
              Jetzt freue ich mich darauf Teil eines kreativen Teams zu werden, um als Frontend Developerin
              durchzustarten.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
