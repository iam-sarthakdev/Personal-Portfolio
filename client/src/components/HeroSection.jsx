import React from 'react';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import { FaLinkedinIn, FaGithub, FaCode, FaDownload, FaTerminal, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import developerPortrait from '../assets/developer-portrait.png';

const HeroSection = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "CP Stats", href: "#cp-stats" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Background Animated Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none animate-pulse"></div>

      {/* Rotating Background Tech Radar Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full border border-white/5 pointer-events-none animate-[spin_60s_linear_infinite]">
        <div className="absolute inset-8 rounded-full border border-dashed border-cyan-500/10"></div>
        <div className="absolute inset-24 rounded-full border border-purple-500/10"></div>
      </div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 flex-wrap gap-4">
          <a href="#home" className="flex items-center gap-3 text-white font-bold text-xl tracking-tight group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f3ff] to-[#bc13fe] flex items-center justify-center text-black text-sm font-black shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:scale-105 transition-transform">
              SK
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-base sm:text-lg bg-gradient-to-r from-white via-[#D7E2EA] to-white/70 bg-clip-text text-transparent">
                SARTHAK KANOI
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Software Engineer</span>
            </div>
          </a>

          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden px-4 mt-4 sm:mt-2 z-0 text-center flex flex-col items-center">
        <FadeIn delay={0.15} y={40}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span className="font-semibold tracking-wide">Available for opportunities</span>
          </div>

          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[8.5vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.8vw] select-none mx-auto max-w-full drop-shadow-2xl">
            Hi, i&apos;m sarthak
          </h1>
        </FadeIn>
      </div>

      {/* Centered Mature Software Engineer Portrait with Floating Tech Cards */}
      <div className="relative w-full flex items-center justify-center my-auto z-10 pointer-events-auto">
        <FadeIn delay={0.4} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] aspect-square flex items-center justify-center">
              {/* Glowing Radial Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00f3ff]/30 via-[#bc13fe]/25 to-transparent blur-3xl animate-pulse pointer-events-none"></div>

              {/* Main Software Engineer Portrait */}
              <img
                src={developerPortrait}
                alt="Sarthak Kanoi - Software Engineer"
                className="w-full h-auto object-contain mx-auto pointer-events-none rounded-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105"
              />

              {/* Floating Badge Left */}
              <div className="absolute -left-4 sm:-left-8 top-1/4 bg-[#121212]/90 border border-cyan-500/30 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 hidden sm:flex animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg">
                  <FaLaptopCode />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase block font-mono">Role</span>
                  <span className="text-xs font-bold text-white">Full-Stack & Backend</span>
                </div>
              </div>

              {/* Floating Badge Right */}
              <div className="absolute -right-4 sm:-right-8 bottom-1/4 bg-[#121212]/90 border border-purple-500/30 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 hidden sm:flex animate-bounce" style={{ animationDuration: '5s' }}>
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
                  <FaTerminal />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase block font-mono">Algorithm Rating</span>
                  <span className="text-xs font-bold text-amber-400">1956 Candidate Master</span>
                </div>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[340px] md:max-w-[420px] text-[clamp(0.8rem,1.2vw,1.25rem)]">
            Software Engineer &bull; Candidate Master @Codeforces (1956) &bull; Knight @LeetCode (1864) &bull; 1500+ DSA
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/sarthak-kanoi/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/iam-sarthakdev"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://codeforces.com/profile/Sarthak1712"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaCode />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex gap-3 flex-wrap">
          <ContactButton href="#contact" />
          <a
            href="https://drive.google.com/file/d/1AQNvzJUiQruPxeZVJdOz5kNjgqteAM6I/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <FaDownload /> Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
