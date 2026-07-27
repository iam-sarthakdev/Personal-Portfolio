import React from 'react';
import FadeIn from './FadeIn';

const certsData = [
  {
    title: "Advanced Software Engineering Virtual Experience",
    issuer: "Walmart Global Tech",
    date: "2024",
    skills: ["Data Structures", "System Design", "Java Backend"]
  },
  {
    title: "Software Engineering Virtual Experience",
    issuer: "Wells Fargo",
    date: "2024",
    skills: ["Financial Systems", "Object-Oriented Design", "Agile"]
  },
  {
    title: "AWS Cloud Essentials & Architecture",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    skills: ["Cloud Computing", "EC2", "S3", "Serverless"]
  },
  {
    title: "Technology Consulting Virtual Internship",
    issuer: "Deloitte",
    date: "2024",
    skills: ["Software Architecture", "Code Refactoring", "System Integration"]
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-5 sm:px-8 md:px-10 bg-[#0C0C0C] relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none tracking-tight mb-16">
            Certifications
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certsData.map((cert, idx) => (
            <FadeIn key={cert.title} delay={idx * 0.1} y={30}>
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-white font-bold text-xl">{cert.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-cyan-400 font-semibold text-sm mb-4">{cert.issuer}</h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 text-xs">
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

export default CertificationsSection;
