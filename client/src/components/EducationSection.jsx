import React from 'react';
import FadeIn from './FadeIn';

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Raj Kumar Goel Institute of Technology (RKGIT)",
    period: "2023 - 2027",
    score: "CGPA: 8.50",
    tags: ["Full-Stack Development", "Data Structures & Algorithms", "System Design"],
    side: "left"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "RPM Academy",
    period: "2021 - 2022",
    score: "87%",
    tags: ["Physics, Chemistry, Mathematics", "Computer Science"],
    side: "right"
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "RPM Academy",
    period: "2019 - 2020",
    score: "89%",
    tags: ["Science & Mathematics", "Foundation"],
    side: "left"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16">
            <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none tracking-tight">
              My Education
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-4 uppercase tracking-widest">
              Academic journey that shaped my technical foundation
            </p>
          </div>
        </FadeIn>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 md:ml-48 space-y-12 py-4">
          {educationData.map((item, idx) => (
            <FadeIn key={item.degree} delay={idx * 0.15} y={30}>
              <div className="relative pl-8 sm:pl-10">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0C0C0C] shadow-[0_0_12px_rgba(0,243,255,0.8)]"></div>

                {/* Content Card */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all max-w-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-white/50 uppercase tracking-widest">{item.period}</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                      {item.score}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">{item.degree}</h3>
                  <h4 className="text-white/70 text-sm sm:text-base mb-4 font-medium">{item.institution}</h4>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-white/70 text-xs border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
