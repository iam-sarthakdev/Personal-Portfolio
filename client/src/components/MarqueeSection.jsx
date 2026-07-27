import React, { useState, useEffect, useRef } from 'react';

const techStack = [
  "Java", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js",
  "MongoDB", "MySQL", "Tailwind CSS", "Docker", "Git", "Postman", "Python", "AWS"
];

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row1Images = [...gifs.slice(0, 6), ...gifs.slice(0, 6), ...gifs.slice(0, 6)];
const row2Images = [...gifs.slice(6), ...gifs.slice(6), ...gifs.slice(6)];

const MarqueeSection = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollPos = window.scrollY;
      const calcOffset = (scrollPos - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 pb-10 overflow-hidden relative z-10"
    >
      {/* Tech Stack Pills Marquee */}
      <div className="mb-12">
        <h3 className="text-center text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
          Technologies I Work With
        </h3>
        <div className="w-full flex overflow-hidden select-none py-2 border-y border-white/10">
          <div className="flex shrink-0 animate-marquee gap-4 items-center whitespace-nowrap">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium text-sm sm:text-base tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive 3D Work Preview Marquee */}
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3 w-max"
          style={{ transform: row1Transform, willChange: 'transform' }}
        >
          {row1Images.map((src, index) => (
            <img
              key={`row1-${index}`}
              src={src}
              alt={`Project Showcase ${index}`}
              loading="lazy"
              className="w-[280px] h-[170px] sm:w-[340px] sm:h-[210px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl object-cover border border-white/10"
            />
          ))}
        </div>

        <div
          className="flex gap-3 w-max"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {row2Images.map((src, index) => (
            <img
              key={`row2-${index}`}
              src={src}
              alt={`Project Showcase ${index}`}
              loading="lazy"
              className="w-[280px] h-[170px] sm:w-[340px] sm:h-[210px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl object-cover border border-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
