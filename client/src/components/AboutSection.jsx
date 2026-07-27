import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import { FaRocket, FaBrain, FaServer, FaPalette, FaCode, FaTrophy, FaMedal, FaLaptopCode } from 'react-icons/fa';

const whatIDoData = [
  {
    icon: FaRocket,
    title: "Full-Stack Development",
    desc: "Building scalable applications with React, Node.js, and modern databases."
  },
  {
    icon: FaBrain,
    title: "DSA & Problem Solving",
    desc: "Solving complex algorithmic challenges with optimal solutions."
  },
  {
    icon: FaServer,
    title: "System Design",
    desc: "Designing distributed systems with focus on scalability & performance."
  },
  {
    icon: FaPalette,
    title: "Modern UI/UX",
    desc: "Creating premium interactive interfaces with smooth micro-animations."
  }
];

const achievementsData = [
  {
    icon: FaCode,
    title: "1500+ Problems",
    subtitle: "LeetCode & Codeforces Solved"
  },
  {
    icon: FaTrophy,
    title: "Candidate Master",
    subtitle: "Codeforces (Peak: 1935)"
  },
  {
    icon: FaMedal,
    title: "Knight Badge",
    subtitle: "LeetCode (Top 6% Globally)"
  },
  {
    icon: FaLaptopCode,
    title: "3+ Full-Stack Apps",
    subtitle: "Production Deployed & Scaled"
  }
];

const AboutSection = () => {
  const bioText = "I'm a Software Engineer and Computer Science student at RKGIT, specializing in High-Performance Backend Systems & Java. Ranked Candidate Master on Codeforces (Peak Rating: 1935) and Knight on LeetCode (Top 6% Globally). Passionate about building scalable backend systems and solving algorithmic problems with 1500+ problems solved.";

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative 3D Floating Corner Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-60">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Icon"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[4%] left-[2%] sm:left-[4%] md:left-[6%] z-10 pointer-events-none opacity-60">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape"
          className="w-[90px] sm:w-[120px] md:w-[160px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-60">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Icon"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[4%] right-[2%] sm:right-[4%] md:right-[6%] z-10 pointer-events-none opacity-60">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-[110px] sm:w-[150px] md:w-[190px] h-auto object-contain"
        />
      </FadeIn>

      {/* Main Center Content Container */}
      <div className="relative z-20 flex flex-col items-center gap-12 sm:gap-16 max-w-6xl mx-auto w-full">
        {/* Header */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.8rem,10vw,140px)]">
            About me
          </h2>
        </FadeIn>

        {/* Animated Bio */}
        <div className="max-w-3xl mx-auto">
          <AnimatedText text={bioText} />
        </div>

        {/* What I Do Section */}
        <div className="w-full mt-6">
          <FadeIn delay={0.1} y={30}>
            <h3 className="hero-heading font-extrabold uppercase text-center text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wider">
              What I Do
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whatIDoData.map((item, idx) => (
              <FadeIn key={item.title} delay={0.15 + idx * 0.08} y={30}>
                <div className="h-full bg-[#121212]/90 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-cyan-400/50 hover:bg-[#181818] transition-all group">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="w-full mt-6">
          <FadeIn delay={0.1} y={30}>
            <h3 className="hero-heading font-extrabold uppercase text-center text-2xl sm:text-3xl md:text-4xl mb-8 tracking-wider">
              Achievements & Recognition
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievementsData.map((item, idx) => (
              <FadeIn key={item.title} delay={0.15 + idx * 0.08} y={30}>
                <div className="h-full bg-[#121212]/90 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-400/50 hover:bg-[#181818] transition-all group">
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-white/60 text-xs sm:text-sm">{item.subtitle}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.2} y={20} className="mt-4">
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
