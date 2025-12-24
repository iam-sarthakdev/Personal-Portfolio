import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Re-using typed.js since it's already installed, allowing for minimal friction.
import Typed from 'typed.js';
import { FaLinkedinIn, FaGithub, FaCode } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const el = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
        return () => typed.destroy();
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <div style={{
                    position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px',
                    borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,243,255,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px',
                    borderRadius: '50%', background: 'radial-gradient(circle, rgba(188,19,254,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)'
                }}></div>
            </div>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ flex: 1, zIndex: 2 }}
            >
                <motion.h3 variants={itemVariants} style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 600 }}>
                    Hello, I'm
                </motion.h3>

                <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
                    Sarthak Kanoi
                </motion.h1>

                <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: '#e0e0e0', marginBottom: '1.5rem', minHeight: '3.5rem' }}>
                    I'm a <span ref={el} className="gradient-text"></span>
                </motion.h2>

                <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.6 }}>
                    Crafting immersive digital experiences with clean code and modern design logic.
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem' }}>
                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px var(--primary-color)",
                            background: "transparent",
                            color: "var(--primary-color)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))' }}
                        style={{
                            padding: '1rem 2.5rem',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: 600,
                            border: '1px solid transparent',
                            backgroundImage: 'linear-gradient(#050505, #050505), linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'content-box, border-box',
                            boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)'
                        }}
                    >
                        Let's Collaborate
                    </motion.a>

                    <motion.a
                        href="https://drive.google.com/file/d/1nqV2YC-CDs7G0rs1A4ON9jI_PaGQGe4U/view?usp=sharing" target="_blank"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2.5rem', background: 'transparent', color: '#fff',
                            borderRadius: '50px', fontWeight: 600, border: '1px solid var(--primary-color)'
                        }}
                    >
                        Resume
                    </motion.a>
                </motion.div>

                <motion.div variants={itemVariants} style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                    {[
                        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarthak-kanoi-b49475362/", name: "LinkedIn" },
                        { icon: FaGithub, href: "https://github.com/iam-sarthakdev", name: "GitHub" },
                        {
                            icon: () => (
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }}>
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.863l4.332-4.364c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.514.514-1.365 0-1.879l-2.697-2.606c-1.474-1.474-3.578-2.286-5.83-2.286-2.253 0-4.357.812-5.83 2.286L3.439 10.596c-1.474 1.474-2.286 3.578-2.286 5.83 0 2.253.812 4.357 2.286 5.83l4.332 4.363c1.474 1.474 3.578 2.286 5.83 2.286 2.253 0 4.357-.812 5.83-2.286l2.697-2.607c.514-.515.514-1.364 0-1.879-.514-.514-1.365-.514-1.879 0z"></path>
                                </svg>
                            ),
                            href: "https://leetcode.com/u/Sarthak_1712/",
                            name: "LeetCode"
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href} target="_blank"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                                rest: { scale: 1 },
                                hover: {
                                    scale: 1.1,
                                    backgroundColor: "var(--primary-color)",
                                    color: "#000",
                                    boxShadow: "0 0 25px var(--primary-color)",
                                    y: -8
                                }
                            }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '55px',
                                height: '55px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.3)',
                                background: 'rgba(255,255,255,0.05)',
                                fontSize: '1.5rem',
                                color: '#fff',
                                transition: 'background-color 0.3s, color 0.3s',
                                position: 'relative'
                            }}
                        >
                            <item.icon />

                            {/* Animated Tooltip */}
                            <motion.div
                                variants={{
                                    rest: { opacity: 0, y: 15, x: '-50%', pointerEvents: 'none', scale: 0.8 },
                                    hover: { opacity: 1, y: 5, x: '-50%', pointerEvents: 'auto', scale: 1 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    background: 'rgba(5, 5, 5, 0.9)',
                                    color: 'var(--primary-color)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    border: '1px solid var(--primary-color)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 10
                                }}
                            >
                                {item.name}
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Visual Element / 3D Abstract */}
            <motion.div
                style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, y: y2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hero-image-container"
            >
                <div style={{
                    width: '400px', height: '400px',
                    background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 80px rgba(0, 243, 255, 0.3)',
                    position: 'relative', overflow: 'hidden'
                }}>
                    {/* Replaced placeholder with Image */}
                    <img
                        src={profileImg}
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', zIndex: 2 }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
