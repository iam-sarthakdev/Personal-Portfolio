import React from 'react';
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
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none"></div>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 flex-wrap gap-4">
          <a href="#home" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00f3ff] to-[#bc13fe] flex items-center justify-center text-black text-sm font-black shadow-[0_0_15px_rgba(0,243,255,0.4)] group-hover:scale-105 transition-transform">
              SK
            </span>
            <span className="font-extrabold tracking-wide bg-gradient-to-r from-white via-[#D7E2EA] to-white/70 bg-clip-text text-transparent">
              SARTHAK KANOI
            </span>
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

      {/* Hero Heading Container - Responsive & contained */}
      <div className="w-full overflow-hidden px-4 mt-4 sm:mt-2 z-0 text-center flex flex-col items-center">
        <FadeIn delay={0.15} y={40}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span className="font-medium tracking-wide">Available for opportunities</span>
          </div>

          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[8.5vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.8vw] select-none mx-auto max-w-full drop-shadow-lg">
            Hi, i&apos;m sarthak
          </h1>
        </FadeIn>
      </div>

      {/* Centered Original 3D Boy Portrait with Magnet */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-[48%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-square flex items-center justify-center">
            {/* Glowing Backdrop Radial Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00f3ff]/25 via-[#bc13fe]/20 to-transparent blur-2xl animate-pulse pointer-events-none"></div>

            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Sarthak 3D Boy Portrait"
              className="w-full h-auto object-contain mx-auto pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[340px] md:max-w-[400px] text-[clamp(0.8rem,1.2vw,1.25rem)]">
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
