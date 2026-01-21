import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'education', 'projects', 'leetcode', 'contact'];
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'LeetCode', href: '#leetcode' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
                    background: scrolled ? 'rgba(3, 3, 3, 0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    padding: scrolled ? '1rem 6%' : '1.5rem 6%',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'all 0.3s ease'
                }}
            >
                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '1.3rem', fontWeight: 700, color: '#fff'
                    }}
                >
                    <div style={{
                        width: '40px', height: '40px',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.2rem', fontWeight: 800, color: '#000'
                    }}>
                        SK
                    </div>
                </motion.a>

                {/* Desktop Menu */}
                <ul style={{
                    display: 'flex', gap: '0.5rem', listStyle: 'none', alignItems: 'center',
                    background: scrolled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.05)',
                    padding: '6px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)'
                }}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.slice(1);
                        return (
                            <motion.li key={link.name}>
                                <motion.a
                                    href={link.href}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        display: 'block',
                                        padding: '10px 18px',
                                        borderRadius: '10px',
                                        color: isActive ? '#000' : '#a0a0a0',
                                        background: isActive ? 'var(--primary-color)' : 'transparent',
                                        fontSize: '0.9rem',
                                        fontWeight: isActive ? 600 : 500,
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => { if (!isActive) e.target.style.color = '#fff'; }}
                                    onMouseOut={(e) => { if (!isActive) e.target.style.color = '#a0a0a0'; }}
                                >
                                    {link.name}
                                </motion.a>
                            </motion.li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none', // Will be shown via CSS media query
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', padding: '12px',
                        color: '#fff', fontSize: '1.2rem', cursor: 'pointer'
                    }}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed', top: '80px', left: 0, right: 0,
                            background: 'rgba(3, 3, 3, 0.98)', backdropFilter: 'blur(20px)',
                            padding: '2rem', zIndex: 999, borderBottom: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    display: 'block', padding: '1rem 0',
                                    color: '#fff', fontSize: '1.1rem', fontWeight: 500,
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    nav ul { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
