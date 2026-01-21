import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaLaptopCode, FaMedal, FaRocket, FaBrain, FaServer, FaMobileAlt } from 'react-icons/fa';

const About = () => {
    const achievements = [
        { icon: FaCode, title: "500+ Problems", description: "LeetCode & GFG", color: "#00f3ff" },
        { icon: FaTrophy, title: "SIH 2025", description: "College Level Qualifier", color: "#ffc01e" },
        { icon: FaLaptopCode, title: "Walmart Global Tech", description: "Advanced Software Sim", color: "#bc13fe" },
        { icon: FaMedal, title: "3+ Full-Stack Apps", description: "Production Deployed", color: "#22c55e" }
    ];

    const whatIDo = [
        { icon: FaRocket, title: "Full-Stack Development", description: "Building scalable applications with React, Node.js, and modern databases" },
        { icon: FaBrain, title: "DSA & Problem Solving", description: "Solving complex algorithmic challenges with optimal solutions" },
        { icon: FaServer, title: "System Design", description: "Designing distributed systems with focus on scalability" },
        { icon: FaMobileAlt, title: "Modern UI/UX", description: "Creating premium interfaces with smooth animations" }
    ];

    const skillCategories = [
        { title: "Languages", skills: ["Java", "JavaScript", "TypeScript", "Python"], color: "#00f3ff" },
        { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind", "Framer Motion"], color: "#bc13fe" },
        { title: "Backend", skills: ["Node.js", "Express", "REST APIs", "WebSockets"], color: "#22c55e" },
        { title: "Databases", skills: ["MongoDB", "MySQL", "Redis"], color: "#ffc01e" },
        { title: "DevOps", skills: ["Git", "Vercel", "Railway", "Docker"], color: "#ff6b6b" },
        { title: "Core CS", skills: ["DSA", "OOP", "DBMS", "OS", "LLD"], color: "#a855f7" }
    ];

    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(0,243,255,0.08) 0%, transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none'
            }} />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}
            >
                About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem',
                    color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8
                }}
            >
                I'm a Computer Science student at <strong style={{ color: '#fff' }}>RKGIT</strong> with strong foundations
                in Data Structures, Algorithms, and Full-Stack Development. I build scalable, user-focused applications
                using modern technologies and have solved <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>500+ problems</span> on
                LeetCode and GeeksforGeeks.
            </motion.p>

            {/* What I Do */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}
            >
                <h3 style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: '2rem' }}>
                    What I <span className="gradient-text">Do</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {whatIDo.map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ padding: '1.8rem', borderRadius: '16px', textAlign: 'center' }}
                        >
                            <item.icon style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1rem' }} />
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}
            >
                <h3 style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: '2rem' }}>
                    Achievements & <span className="gradient-text">Recognition</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((achievement, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '1.8rem', borderRadius: '16px', textAlign: 'center',
                                border: `1px solid ${achievement.color}20`
                            }}
                        >
                            <achievement.icon style={{
                                fontSize: '2.2rem', color: achievement.color, marginBottom: '1rem',
                                filter: `drop-shadow(0 0 12px ${achievement.color}50)`
                            }} />
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#fff' }}>{achievement.title}</h4>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Skills */}
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h3 style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: '2rem' }}>
                    Technical <span className="gradient-text">Skills</span>
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, borderColor: category.color }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            style={{ padding: '1.8rem', borderRadius: '16px' }}
                        >
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: category.color }}>{category.title}</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {category.skills.map((skill, j) => (
                                    <span key={j} style={{
                                        fontSize: '0.85rem', color: '#d0d0d0', background: 'rgba(255,255,255,0.05)',
                                        padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
