import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "MockMate AI",
            description: "AI-powered interview preparation platform with real-time voice interaction using VAPI. Features adaptive questioning across behavioral, technical, and system design domains with intelligent feedback and analytics.",
            fullDescription: "MockMate AI revolutionizes interview preparation by providing realistic AI-driven mock interviews. The platform uses advanced voice AI to conduct natural conversations, adapting difficulty based on your responses and providing instant, actionable feedback to improve your performance.",
            tools: ["Next.js 14", "TypeScript", "VAPI AI", "MongoDB", "NextAuth.js", "Framer Motion"],
            liveLink: "https://mockmateai-eight.vercel.app/landingPage",
            github: "https://github.com/iam-sarthakdev/MockMate-AI",
            image: "https://raw.githubusercontent.com/iam-sarthakdev/MockMate-AI/main/public/landing-page-screenshot.png", // Add actual screenshot
            featured: true,
            gradient: "linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(138, 43, 226, 0.1))"
        },
        {
            title: "DevSync",
            description: "Real-time collaborative code editor with integrated Monaco Editor, live cursor tracking, and code execution for 40+ languages. Features interactive whiteboard for team brainstorming and seamless communication.",
            fullDescription: "DevSync brings the power of VS Code to the browser with real-time collaboration. Edit code together, see cursor positions live, execute code instantly, and communicate via integrated chat - all in one seamless experience built for developer teams.",
            tools: ["Next.js 16", "Socket.IO", "Monaco Editor", "Piston API", "Tailwind CSS v4"],
            liveLink: "https://devsync-production-00b7.up.railway.app/",
            github: "https://github.com/iam-sarthakdev/DevSync",
            image: "https://raw.githubusercontent.com/iam-sarthakdev/DevSync/main/public/preview.png", // Add actual screenshot
            featured: true,
            gradient: "linear-gradient(135deg, rgba(188, 19, 254, 0.1), rgba(0, 243, 255, 0.1))"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--second-bg-color)' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                My <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '3.5rem',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        variants={cardVariants}
                        whileHover={{ y: -15, scale: 1.02 }}
                        style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            position: 'relative',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                            background: project.gradient
                        }}
                    >
                        {/* Featured Badge */}
                        {project.featured && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '-40px',
                                    background: 'linear-gradient(90deg, #00f3ff, #bc13fe)',
                                    color: '#000',
                                    padding: '8px 50px',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    transform: 'rotate(45deg)',
                                    zIndex: 10,
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px'
                                }}
                            >
                                Featured
                            </motion.div>
                        )}

                        {/* Project Image */}
                        <div style={{
                            height: '280px',
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Fallback gradient background */}
                            <motion.div
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: project.gradient,
                                    backgroundSize: '200% 200%',
                                    opacity: 0.6
                                }}
                            />

                            {/* Project Image or Icon */}
                            {project.image ? (
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        zIndex: 1
                                    }}
                                    onError={(e) => {
                                        // Fallback to icon if image fails to load
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : (
                                <FaCode style={{ fontSize: '6rem', color: 'var(--text-muted)', opacity: 0.3, zIndex: 1 }} />
                            )}

                            {/* Quick Links Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '2rem',
                                    zIndex: 2
                                }}
                            >
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    whileHover={{ scale: 1.15, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{
                                        color: '#fff',
                                        fontSize: '2.5rem',
                                        background: 'rgba(0, 243, 255, 0.15)',
                                        padding: '20px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid rgba(0, 243, 255, 0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    whileHover={{ scale: 1.15, rotate: -360 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{
                                        color: '#fff',
                                        fontSize: '2.5rem',
                                        background: 'rgba(188, 19, 254, 0.15)',
                                        padding: '20px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid rgba(188, 19, 254, 0.5)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <FaExternalLinkAlt />
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Project Content */}
                        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(5, 5, 5, 0.4)', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: '#fff',
                                fontWeight: 800,
                                background: 'linear-gradient(90deg, #00f3ff, #bc13fe)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {project.title}
                            </h3>

                            <p style={{
                                color: '#c0c0c0',
                                marginBottom: '2rem',
                                lineHeight: '1.8',
                                flex: 1,
                                fontSize: '1rem'
                            }}>
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginBottom: '2rem' }}>
                                {project.tools.map((tool, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        style={{
                                            borderRadius: '20px',
                                            padding: '7px 16px',
                                            fontSize: '0.85rem',
                                            background: 'rgba(0, 243, 255, 0.12)',
                                            color: '#00f3ff',
                                            border: '1px solid rgba(0, 243, 255, 0.3)',
                                            fontWeight: 600,
                                            backdropFilter: 'blur(5px)'
                                        }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 243, 255, 0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        flex: 1,
                                        padding: '14px',
                                        background: 'linear-gradient(90deg, #00f3ff, #00c4cc)',
                                        color: '#000',
                                        borderRadius: '12px',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    <FaExternalLinkAlt style={{ fontSize: '0.9rem' }} />
                                    Live Demo
                                </motion.a>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(188, 19, 254, 0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        flex: 1,
                                        padding: '14px',
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        textAlign: 'center',
                                        border: '2px solid #bc13fe',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    <FaGithub style={{ fontSize: '1rem' }} />
                                    GitHub
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
