import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROCESS', href: '#education' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CATALOG', href: '#leetcode' },
    { name: 'D.O.T', href: '#certifications' },
    { name: 'TALK', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-6 md:px-10 lg:px-14 py-6 bg-transparent">
        {/* Logo SVG */}
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="none">
            <path
              d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
              fill="white"
            />
          </svg>
        </a>

        {/* Right Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-white hover:opacity-70 transition-opacity"
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="none">
                  <path
                    d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
                    fill="white"
                  />
                </svg>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:opacity-70 transition-opacity"
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Nav Links with Staggered Entrance */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl tracking-widest uppercase">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.06,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-white hover:text-red-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
