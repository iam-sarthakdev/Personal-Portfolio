import React from 'react';
import FadeIn from './FadeIn';

const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "C", "C++", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "WebSockets"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "DevOps",
    skills: ["Git", "GitHub", "Vercel", "Docker", "AWS"]
  },
  {
    category: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "OS", "LLD"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none tracking-tight mb-16">
            Technical Skills
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.08} y={30}>
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all">
                <h3 className="text-cyan-400 font-semibold text-lg uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
