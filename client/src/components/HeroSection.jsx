import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import { FaLinkedinIn, FaGithub, FaCode, FaDownload } from 'react-icons/fa';

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
      {/* Dynamic Background Glowing Light Orbs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-purple-500/10 to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 flex-wrap gap-4">
          <a href="#home" className="flex items-center gap-3 text-white font-bold text-xl tracking-tight group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f3ff] via-[#7621B0] to-[#B600A8] flex items-center justify-center text-white text-sm font-black shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:scale-110 transition-transform">
              SK
            </span>
            <span className="font-black text-lg tracking-wider bg-gradient-to-r from-white via-[#D7E2EA] to-white/70 bg-clip-text text-transparent">
              SARTHAK KANOI
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden px-4 mt-2 sm:mt-4 z-10 text-center flex flex-col items-center">
        <FadeIn delay={0.15} y={30}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]"></span>
            <span className="font-semibold tracking-wide">Available for Software Engineer Roles</span>
          </div>

          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[8vw] sm:text-[9vw] md:text-[9.5vw] lg:text-[10vw] select-none mx-auto max-w-full drop-shadow-2xl">
            Hi, i&apos;m sarthak
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait Avatar */}
      <FadeIn delay={0.4} y={30} className="relative z-20 flex justify-center items-center my-4 sm:my-0">
        <Magnet
          padding={160}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative w-[220px] sm:w-[290px] md:w-[360px] lg:w-[410px] aspect-square flex items-center justify-center group">
            {/* Glowing Backdrop Radial Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00f3ff]/30 via-[#7621B0]/30 to-[#B600A8]/20 blur-3xl animate-pulse pointer-events-none"></div>

            {/* Glassmorphic Border Frame */}
            <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 backdrop-blur-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
              <img
                src="/engineer_avatar.png"
                alt="Sarthak Kanoi Software Engineer Avatar"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -left-4 bg-[#121212]/90 border border-cyan-500/40 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> 1956 Codeforces
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-4 bg-[#121212]/90 border border-amber-500/40 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400"></span> 1864 LeetCode
            </motion.div>
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 z-30">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[340px] md:max-w-[420px] text-[clamp(0.85rem,1.3vw,1.35rem)]">
            Software Engineer &bull; Candidate Master @Codeforces (1956) &bull; Knight @LeetCode (1864) &bull; 1000+ DSA
          </p>

          {/* Social Icons */}
          <div className="flex gap-3.5 mt-4">
            <a
              href="https://www.linkedin.com/in/sarthak-kanoi/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/iam-sarthakdev"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://codeforces.com/profile/Sarthak1712"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:scale-110 transition-all shadow-lg"
            >
              <FaCode size={18} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex gap-3 flex-wrap">
          <ContactButton href="#contact" />
          <a
            href="https://drive.google.com/file/d/1AQNvzJUiQruPxeZVJdOz5kNjgqteAM6I/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-widest px-6 py-3 text-xs sm:text-sm hover:bg-[#D7E2EA] hover:text-black transition-all shadow-lg"
          >
            <FaDownload /> Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
