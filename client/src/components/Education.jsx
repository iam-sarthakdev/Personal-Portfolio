import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            title: "B.Tech in Computer Science & Engineering",
            institution: "Raj Kumar Goel Institute of Technology (RKGIT)",
            location: "Ghaziabad, UP",
            date: "2023 – 2027",
            score: "CGPA: 8.50",
            icon: FaGraduationCap,
            color: "#00f3ff",
            highlights: ["Full Stack Development", "Data Structures & Algorithms", "System Design"]
        },
        {
            title: "Senior Secondary (Class XII)",
            institution: "RPM Academy",
            location: "Delhi",
            date: "2021 – 2022",
            score: "87%",
            icon: FaStar,
            color: "#bc13fe",
            highlights: ["Physics, Chemistry, Mathematics", "Computer Science"]
        },
        {
            title: "Secondary Education (Class X)",
            institution: "RPM Academy",
            location: "Delhi",
            date: "2019 – 2020",
            score: "89%",
            icon: FaStar,
            color: "#22c55e",
            highlights: ["Science & Mathematics", "Foundation"]
        }
    ];

    return (
        <section id="education" className="section-padding" style={{ position: 'relative' }}>
            {/* Background */}
            <div style={{
                position: 'absolute', top: '50%', right: '-10%', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(188,19,254,0.08) 0%, transparent 60%)',
                filter: 'blur(60px)', pointerEvents: 'none'
            }} />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    My <span className="gradient-text">Education</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
                    Academic journey that shaped my technical foundation
                </p>
            </motion.div>

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                {/* Timeline Line */}
                <div style={{
                    position: 'absolute', left: '50%', top: 0, bottom: 0,
                    width: '2px', background: 'linear-gradient(to bottom, var(--primary-color), var(--secondary-color), #22c55e)',
                    transform: 'translateX(-50%)', zIndex: 0, borderRadius: '2px'
                }} />

                {/* Timeline Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                                style={{
                                    position: 'absolute', left: '50%', top: '30px',
                                    transform: 'translateX(-50%)',
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    background: edu.color, zIndex: 2,
                                    boxShadow: `0 0 20px ${edu.color}60`,
                                    border: '3px solid var(--bg-color)'
                                }}
                            />

                            {/* Card */}
                            <motion.div
                                className="glass-card"
                                whileHover={{ y: -8, scale: 1.02 }}
                                style={{
                                    width: 'calc(50% - 50px)',
                                    padding: '2rem',
                                    borderRadius: '20px',
                                    border: `1px solid ${edu.color}30`,
                                    position: 'relative'
                                }}
                            >
                                {/* Icon */}
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '14px',
                                    background: `${edu.color}15`, border: `1px solid ${edu.color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <edu.icon style={{ fontSize: '1.3rem', color: edu.color }} />
                                </div>

                                {/* Title */}
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 700 }}>
                                    {edu.title}
                                </h3>

                                {/* Institution */}
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                                    {edu.institution}
                                </p>

                                {/* Date & Score */}
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    <span style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '6px 12px', borderRadius: '20px',
                                        background: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: '#888'
                                    }}>
                                        <FaCalendar style={{ color: edu.color }} />
                                        {edu.date}
                                    </span>
                                    <span style={{
                                        padding: '6px 12px', borderRadius: '20px',
                                        background: `${edu.color}15`, fontSize: '0.85rem',
                                        color: edu.color, fontWeight: 600
                                    }}>
                                        {edu.score}
                                    </span>
                                </div>

                                {/* Highlights */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {edu.highlights.map((h, i) => (
                                        <span key={i} style={{
                                            padding: '4px 10px', borderRadius: '6px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            fontSize: '0.75rem', color: '#a0a0a0'
                                        }}>
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #education .glass-card { width: 100% !important; }
                    #education > div > div > div { justify-content: center !important; }
                    #education > div > div > div > div:first-child { left: 20px !important; }
                }
            `}</style>
        </section>
    );
};

export default Education;
