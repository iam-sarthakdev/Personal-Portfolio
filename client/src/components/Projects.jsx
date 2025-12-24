import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio built with React, Vite, and Framer Motion. Features a cyberpunk aesthetic and seamless animations.",
            tools: ["React", "Framer Motion", "MongoDB"],
            link: "#",
            github: "https://github.com/iam-sarthakdev"
        },
        {
            title: "Task Master",
            description: "A productivity app to manage daily tasks with a focus on simplicity and efficiency. Includes drag-and-drop functionality.",
            tools: ["React", "Firebase", "Tailwind"],
            link: "#",
            github: "https://github.com/iam-sarthakdev"
        },
        {
            title: "E-Commerce Dashboard",
            description: "An admin dashboard for managing products, orders, and analytics. Visualizes data with Chart.js.",
            tools: ["MERN Stack", "Redux", "Material UI"],
            link: "#",
            github: "https://github.com/iam-sarthakdev"
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, borderColor: 'var(--primary-color)' }}
                        style={{
                            borderRadius: '15px', overflow: 'hidden', padding: '0',
                            display: 'flex', flexDirection: 'column', height: '100%'
                        }}
                    >
                        <div style={{
                            height: '180px', background: '#1a1a2e', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'
                        }}>
                            {/* Placeholder pattern */}
                            <div style={{
                                position: 'absolute', width: '100%', height: '100%',
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                backgroundSize: '20px 20px', opacity: 0.5
                            }}></div>
                            <FaCode style={{ fontSize: '4rem', color: 'var(--text-muted)', opacity: 0.3 }} />

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute', width: '100%', height: '100%',
                                    background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'
                                }}
                            >
                                <a href={project.github} target="_blank" style={{ color: '#fff', fontSize: '1.5rem' }}><FaGithub /></a>
                                <a href={project.link} target="_blank" style={{ color: '#fff', fontSize: '1.5rem' }}><FaExternalLinkAlt /></a>
                            </motion.div>
                        </div>

                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{project.title}</h3>
                            <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', lineHeight: '1.6', flex: 1 }}>{project.description}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tools.map((tool, i) => (
                                    <span key={i} style={{
                                        borderRadius: '20px', padding: '4px 12px', fontSize: '0.8rem',
                                        background: 'rgba(0, 243, 255, 0.1)', color: 'var(--primary-color)', border: '1px solid rgba(0, 243, 255, 0.2)'
                                    }}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
