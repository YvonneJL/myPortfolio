import React, { useEffect, useRef, useState } from 'react';
import ChapterHeadline from './ChapterHeadline';

export default function About() {

  function ScrollFadeIn({
    children,
    className = '',
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        {
          threshold: 0.4, 
        }
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
      className="flex flex-col leading-relaxed text-grayish lg:text-[16px] text-xs tracking-wider relative"
    >
      <ChapterHeadline content="About" />

      {/* Bild: zuerst aufpoppen */}
      <ScrollFadeIn
        className="flex justify-center lg:w-full absolute lg:left-1/2 lg:top-50 top-18 left-50 lg:-translate-x-1/2"
        delay={0}
      >
        <img src="/img/Frame 178259.svg" alt="Portrait YL"
        style={{
    imageRendering: '-webkit-optimize-contrast',
  }} />
      </ScrollFadeIn>

      {/* Erster Textblock */}
      <div className="lg:pt-10 pt-45">
        <ScrollFadeIn delay={300}>
          <p className="lg:text-right lg:w-1/2 ml-auto lg:pb-10 pb-5">
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
            <p className="lg:my-10 lg:w-1/3 lg:pb-10 mb-5">
              Über Umwege bin ich zum Coden gekommen und habe darin überraschend meine Leidenschaft gefunden.
              Es verbindet genau das, was mich schon immer begeistert hat: Kreativität und logisches Denken.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={900}>
            <p className="lg:w-1/2 ml-auto lg:text-right pb-15">
              Mein Weg war nicht ganz gerade, aber das Ziel umso klarer. Nach einem sechsmonatigen Boot Camp
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
