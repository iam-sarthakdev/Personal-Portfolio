import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projectsData = [
  {
    number: "01",
    name: "FAANG-Forge",
    category: "Full-Stack DSA Platform",
    description: "Algorithmic problem tracker featuring a built-in Java code editor, solution vaults, Codeforces API sync, and practice mode.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Monaco Editor"],
    githubUrl: "https://github.com/iam-sarthakdev/FAANG-Forge",
    liveUrl: "https://faang-forge.vercel.app",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    number: "02",
    name: "MockMate AI",
    category: "AI Interview Defense Platform",
    description: "AI-driven technical interview simulator with real-time speech evaluation, architecture breakdown, and detailed scoring.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Web Audio API", "Tailwind"],
    githubUrl: "https://github.com/iam-sarthakdev/MockMate-AI",
    liveUrl: "https://mockmate-ai.vercel.app",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    number: "03",
    name: "DevSync",
    category: "Real-Time Collaboration",
    description: "Multi-user code editor with real-time WebSockets synchronization, WebRTC video calling, and live AST syntax analysis.",
    tags: ["React", "Express", "WebSockets", "WebRTC", "Docker"],
    githubUrl: "https://github.com/iam-sarthakdev/DevSync",
    liveUrl: "https://devsync-collaborate.vercel.app",
    col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

const ProjectCard = ({ project, index, totalCards, progress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div className="sticky top-20 sm:top-24 md:top-32 h-[85vh] flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 shadow-2xl overflow-hidden"
      >
        {/* Card Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/10">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,6vw,5rem)] leading-none select-none">
              {project.number}
            </span>
            <div>
              <span className="text-xs sm:text-sm text-cyan-400 font-semibold uppercase tracking-widest block">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#D7E2EA] uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
            >
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA] hover:text-black transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Card Bottom Grid Layout */}
        <div className="flex flex-col md:flex-row gap-4 h-full min-h-[300px] sm:min-h-[360px]">
          {/* Left Column (40% width) */}
          <div className="w-full md:w-[40%] flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src={project.col1Img1}
                alt={`${project.name} 1`}
                className="w-full object-cover rounded-[24px] h-[130px]"
              />
              <img
                src={project.col1Img2}
                alt={`${project.name} 2`}
                className="w-full object-cover rounded-[24px] h-[130px]"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 Tall Image */}
          <div className="w-full md:w-[60%] flex-1">
            <img
              src={project.col2Img}
              alt={`${project.name} Main`}
              className="w-full h-full min-h-[220px] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
            Projects
          </h2>
        </FadeIn>

        <div className="relative flex flex-col gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
