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
                'Full Stack Developer',
                'Problem Solver',
                'DSA Enthusiast',
                'Tech Builder'
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
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarthak-kanoi-b49475362/", name: "LinkedIn", color: "#0077b5" },
        { icon: FaGithub, href: "https://github.com/iam-sarthakdev", name: "GitHub", color: "#fff" },
        {
            icon: () => (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px' }}>
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.863l4.332-4.364c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.514.514-1.365 0-1.879l-2.697-2.606c-1.474-1.474-3.578-2.286-5.83-2.286-2.253 0-4.357.812-5.83 2.286L3.439 10.596c-1.474 1.474-2.286 3.578-2.286 5.83 0 2.253.812 4.357 2.286 5.83l4.332 4.363c1.474 1.474 3.578 2.286 5.83 2.286 2.253 0 4.357-.812 5.83-2.286l2.697-2.607c.514-.515.514-1.364 0-1.879-.514-.514-1.365-.514-1.879 0z" />
                </svg>
            ),
            href: "https://leetcode.com/u/Sarthak_1712/",
            name: "LeetCode",
            color: "#ffc01e"
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
                            Engineering student crafting <strong style={{ color: '#fff' }}>scalable web applications</strong> and
                            solving <strong style={{ color: '#fff' }}>500+ DSA problems</strong>. Passionate about clean code,
                            modern design, and building products people love.
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
                                href="https://drive.google.com/file/d/1vTFlRU1KY7QS_W4Pcp0EYoF6rOq5Eufz/view?usp=sharing"
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
