import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaRocket, FaBrain, FaUsers, FaMicrophone, FaChartLine, FaCogs } from 'react-icons/fa';

// Import local images
import faangForgeImg from '../assets/projects/faang-forge.png';
import devSyncImg from '../assets/projects/devsync.png';
import mockMateImg from '../assets/projects/mockmate-ai.png';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            title: "FAANG-Forge",
            tagline: "Master Your Coding Interviews",
            description: "An intelligent DSA interview preparation platform with spaced repetition, pattern recognition, and company-specific practice for 20+ top-tier companies.",
            fullDescription: `FAANG Forge transforms how developers prepare for technical interviews through scientifically-proven learning techniques:

• **Spaced Repetition Algorithm** - Based on the Ebbinghaus Forgetting Curve, scheduling optimal review times (Day 1 → 3 → 7 → 14 → 30 → 60 → 90)
• **Pattern Recognition** - Automatic tagging of 14+ DSA patterns (Two Pointers, Sliding Window, DP, etc.)
• **Company Database** - 2,892+ problems from Google, Amazon, Meta, Apple, Microsoft & 15+ more companies
• **Curated Sheets** - NeetCode 150, Striver A2Z (455+ problems), Love Babbar 450, and custom lists
• **CS Fundamentals** - Complete coverage of OS, DBMS, Networks for interview prep
• **System Design** - HLD/LLD modules with real-world case studies`,
            keyFeatures: [
                { icon: FaBrain, text: "Spaced Repetition" },
                { icon: FaChartLine, text: "Smart Analytics" },
                { icon: FaCogs, text: "14+ DSA Patterns" },
                { icon: FaRocket, text: "2,892+ Problems" }
            ],
            tools: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Recharts"],
            liveLink: "https://algo-flow-khaki.vercel.app/",
            github: "https://github.com/iam-sarthakdev/FAANG-Forge",
            image: faangForgeImg,
            featured: true,
            gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(0, 243, 255, 0.1))",
            accentColor: "#22c55e"
        },
        {
            title: "DevSync",
            tagline: "Collaboration, Synchronized.",
            description: "Real-time collaborative code editor with Monaco Editor integration, live cursor tracking, and instant code execution for 40+ programming languages.",
            fullDescription: `DevSync brings the power of VS Code to the browser with seamless real-time collaboration:

• **Real-time Collaboration** - Multiple developers editing simultaneously with live cursor positions
• **Monaco Editor** - The same editor that powers VS Code, with full syntax highlighting
• **Instant Execution** - Run code directly in the browser (JavaScript, Python, Java, C++, and 36+ more)
• **Interactive Whiteboard** - Visual collaboration space for sketching ideas and system designs
• **Room-based System** - Create private rooms with unique sharable links
• **File Management** - Organize projects with folders, multiple files, and auto-save
• **Theme Customization** - VS Dark, VS Light, High Contrast, and more`,
            keyFeatures: [
                { icon: FaUsers, text: "Live Cursors" },
                { icon: FaCode, text: "Monaco Editor" },
                { icon: FaRocket, text: "40+ Languages" },
                { icon: FaCogs, text: "Whiteboard" }
            ],
            tools: ["Next.js", "TypeScript", "Socket.IO", "Monaco Editor", "Piston API", "Tailwind"],
            liveLink: "https://devsync-production-00b7.up.railway.app/",
            github: "https://github.com/iam-sarthakdev/DevSync",
            image: devSyncImg,
            featured: true,
            gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(0, 243, 255, 0.1))",
            accentColor: "#a855f7"
        },
        {
            title: "MockMate AI",
            tagline: "Master Your Interviews with AI",
            description: "AI-powered interview simulation with real-time voice interaction, adaptive questioning, and comprehensive feedback across behavioral, technical, and system design domains.",
            fullDescription: `MockMate AI provides a voice-first interview experience powered by cutting-edge AI:

• **VAPI Voice AI** - Sub-second latency for natural, conversational interviews
• **Multiple Modes** - Behavioral (STAR method), Technical (DSA, tech stacks), System Design (architecture)
• **Adaptive Difficulty** - Junior/Mid/Senior levels with dynamic question selection
• **Live Audio Visualization** - Real-time frequency analysis during conversation
• **Structured Feedback** - Detailed scoring with confidence/score metrics
• **Premium UI/UX** - 60fps animations, glassmorphism, 3D tilt effects`,
            keyFeatures: [
                { icon: FaMicrophone, text: "Voice AI" },
                { icon: FaBrain, text: "STAR Method" },
                { icon: FaChartLine, text: "Live Feedback" },
                { icon: FaRocket, text: "3 Interview Modes" }
            ],
            tools: ["Next.js 14", "TypeScript", "VAPI AI", "MongoDB", "NextAuth.js", "Framer Motion"],
            liveLink: "https://mockmateai-eight.vercel.app/landingPage",
            github: "https://github.com/iam-sarthakdev/MockMate-AI",
            image: mockMateImg,
            featured: true,
            gradient: "linear-gradient(135deg, rgba(0, 243, 255, 0.15), rgba(138, 43, 226, 0.1))",
            accentColor: "#00f3ff"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
    };

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--second-bg-color)' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                    Full-stack applications built with modern technologies,
                    focused on solving real problems with clean architecture.
                </p>
            </motion.div>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            display: 'grid',
                            gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                            background: project.gradient,
                            border: `1px solid ${project.accentColor}20`,
                            boxShadow: `0 20px 60px ${project.accentColor}10`
                        }}
                    >
                        {/* Project Image */}
                        <motion.div
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '400px',
                                order: index % 2 === 0 ? 0 : 1
                            }}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: index % 2 === 0
                                    ? 'linear-gradient(to right, transparent 60%, rgba(5,5,5,0.95))'
                                    : 'linear-gradient(to left, transparent 60%, rgba(5,5,5,0.95))'
                            }} />
                        </motion.div>

                        {/* Project Content */}
                        <div style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            order: index % 2 === 0 ? 1 : 0
                        }}>
                            {/* Featured Badge */}
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                style={{
                                    display: 'inline-block',
                                    width: 'fit-content',
                                    padding: '6px 14px',
                                    background: `${project.accentColor}20`,
                                    border: `1px solid ${project.accentColor}40`,
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: project.accentColor,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '1rem'
                                }}
                            >
                                Featured Project
                            </motion.span>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                background: `linear-gradient(90deg, #fff, ${project.accentColor})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {project.title}
                            </h3>

                            {/* Tagline */}
                            <p style={{
                                color: project.accentColor,
                                fontSize: '1.1rem',
                                fontWeight: 500,
                                marginBottom: '1rem'
                            }}>
                                {project.tagline}
                            </p>

                            {/* Description */}
                            <p style={{
                                color: '#c0c0c0',
                                lineHeight: 1.7,
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                {project.description}
                            </p>

                            {/* Key Features */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '0.8rem',
                                marginBottom: '1.5rem'
                            }}>
                                {project.keyFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.6rem',
                                            color: '#e0e0e0',
                                            fontSize: '0.85rem'
                                        }}
                                    >
                                        <feature.icon style={{ color: project.accentColor, fontSize: '1rem' }} />
                                        {feature.text}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tech Stack */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: '5px 12px',
                                            fontSize: '0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '6px',
                                            color: '#a0a0a0'
                                        }}
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${project.accentColor}40` }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '12px 24px',
                                        background: project.accentColor,
                                        color: '#000',
                                        borderRadius: '10px',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <FaExternalLinkAlt size={14} />
                                    Live Demo
                                </motion.a>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    whileHover={{ scale: 1.05, borderColor: project.accentColor }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '12px 24px',
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <FaGithub size={16} />
                                    Source Code
                                </motion.a>
                            </div>

                            {/* Expand Button */}
                            <motion.button
                                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                                whileHover={{ color: project.accentColor }}
                                style={{
                                    marginTop: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    color: '#888',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {expandedProject === index ? '▲ Show Less' : '▼ Read More'}
                            </motion.button>

                            {/* Expanded Description */}
                            <AnimatePresence>
                                {expandedProject === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            overflow: 'hidden',
                                            marginTop: '1rem',
                                            padding: '1rem',
                                            background: 'rgba(0,0,0,0.3)',
                                            borderRadius: '12px',
                                            border: `1px solid ${project.accentColor}20`
                                        }}
                                    >
                                        <pre style={{
                                            whiteSpace: 'pre-wrap',
                                            fontFamily: 'inherit',
                                            fontSize: '0.85rem',
                                            lineHeight: 1.8,
                                            color: '#c0c0c0',
                                            margin: 0
                                        }}>
                                            {project.fullDescription}
                                        </pre>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
