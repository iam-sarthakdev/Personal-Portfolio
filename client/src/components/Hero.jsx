import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typed from 'typed.js';
import { FaLinkedinIn, FaGithub, FaCode, FaArrowDown, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const el = useRef(null);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Software Engineer',
                'Candidate Master @CF',
                'Knight @LeetCode'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '_',
        });
        return () => typed.destroy();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarthak-kanoi/", name: "LinkedIn", color: "#0077b5" },
        { icon: FaGithub, href: "https://github.com/iam-sarthakdev", name: "GitHub", color: "#fff" },
        {
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                </svg>
            ),
            href: "https://codeforces.com/profile/Sarthak1712",
            name: "Codeforces",
            color: "#1890ff"
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="home"
            className="section-padding"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '100px'
            }}
        >
            {/* Animated Background Gradient Orbs */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute', top: '-5%', right: '10%', width: '600px', height: '600px',
                        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,243,255,0.12) 0%, transparent 60%)',
                        filter: 'blur(60px)'
                    }}
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute', bottom: '0%', left: '-5%', width: '700px', height: '700px',
                        borderRadius: '50%', background: 'radial-gradient(circle, rgba(188,19,254,0.1) 0%, transparent 60%)',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <motion.div style={{ y, opacity }} className="hero-wrapper" >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ flex: '1 1 500px', zIndex: 2 }}
                    >
                        {/* Greeting Badge */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '8px 16px', background: 'rgba(0, 243, 255, 0.1)',
                                border: '1px solid rgba(0, 243, 255, 0.3)', borderRadius: '30px',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                            <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 500 }}>
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '1rem',
                                letterSpacing: '-1px'
                            }}
                        >
                            Hey, I'm{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Sarthak
                            </span>
                        </motion.h1>

                        {/* Typed Role */}
                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                                fontWeight: 600,
                                color: '#e0e0e0',
                                marginBottom: '1.5rem',
                                minHeight: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <span style={{ color: '#888' }}>{'>'}</span>
                            <span ref={el} style={{ color: 'var(--primary-color)' }}></span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontSize: '1.1rem',
                                color: 'var(--text-muted)',
                                marginBottom: '2rem',
                                maxWidth: '520px',
                                lineHeight: 1.7
                            }}
                        >
                            Software Engineer | Candidate Master @Codeforces | Knight @LeetCode | 1500+ DSA
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 243, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                    color: '#000', borderRadius: '12px', fontWeight: 700,
                                    fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px'
                                }}
                            >
                                Let's Connect
                            </motion.a>

                            <motion.a
                                href="https://drive.google.com/file/d/1AQNvzJUiQruPxeZVJdOz5kNjgqteAM6I/view?usp=drive_link"
                                target="_blank"
                                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem', background: 'transparent',
                                    color: '#fff', borderRadius: '12px', fontWeight: 600,
                                    fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.2)',
                                    display: 'flex', alignItems: 'center', gap: '8px'
                                }}
                            >
                                <FaDownload /> Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    whileHover={{
                                        scale: 1.15,
                                        y: -5,
                                        background: item.color,
                                        color: item.color === '#fff' ? '#000' : '#fff',
                                        boxShadow: `0 0 25px ${item.color}50`
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: '50px', height: '50px', borderRadius: '14px',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        background: 'rgba(255,255,255,0.03)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.3rem', color: '#fff'
                                    }}
                                    title={item.name}
                                >
                                    <item.icon />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <div style={{ width: '400px', height: '400px', position: 'relative' }}>
                            {/* Main Blob */}
                            <motion.div
                                animate={{
                                    borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
                                    rotate: [0, 360]
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    width: '280px', height: '280px',
                                    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                    boxShadow: '0 0 80px rgba(0, 243, 255, 0.4), inset 0 0 60px rgba(188, 19, 254, 0.3)',
                                    position: 'absolute', top: '50%', left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                {/* Inner Ring */}
                                <motion.div
                                    animate={{ rotate: [0, -360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        width: '200px', height: '200px', borderRadius: '50%',
                                        border: '3px solid rgba(255,255,255,0.2)',
                                        borderTopColor: 'rgba(255,255,255,0.8)'
                                    }}
                                />
                                {/* Code Icon */}
                                <FaCode style={{
                                    position: 'absolute', fontSize: '3.5rem', color: '#fff',
                                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))'
                                }} />
                            </motion.div>

                            {/* Orbiting Elements */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8 + i * 4, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute', top: '50%', left: '50%',
                                        width: `${180 + i * 60}px`, height: `${180 + i * 60}px`,
                                        marginTop: `-${(180 + i * 60) / 2}px`, marginLeft: `-${(180 + i * 60) / 2}px`,
                                        border: `1px solid rgba(0, 243, 255, ${0.3 - i * 0.08})`,
                                        borderRadius: '50%'
                                    }}
                                >
                                    <motion.div
                                        style={{
                                            position: 'absolute', top: -6, left: '50%',
                                            width: '12px', height: '12px', borderRadius: '50%',
                                            background: i === 0 ? 'var(--primary-color)' : i === 1 ? 'var(--secondary-color)' : '#22c55e',
                                            boxShadow: `0 0 15px ${i === 0 ? 'var(--primary-color)' : i === 1 ? 'var(--secondary-color)' : '#22c55e'}`
                                        }}
                                    />
                                </motion.div>
                            ))}

                            {/* Floating Particles */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={`particle-${i}`}
                                    animate={{ y: [0, -80, 0], opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        width: '6px', height: '6px', borderRadius: '50%',
                                        background: i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
                                        top: `${30 + i * 12}%`, left: `${15 + i * 15}%`,
                                        boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    position: 'absolute', bottom: '3rem', left: '50%',
                    transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '0.5rem', color: '#666'
                }}
            >
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
                <FaArrowDown style={{ fontSize: '1rem' }} />
            </motion.div>

            <style>{`
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
            `}</style>
        </section>
    );
};

export default Hero;
