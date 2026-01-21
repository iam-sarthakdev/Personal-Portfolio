import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaLaptopCode, FaMedal } from 'react-icons/fa';

const About = () => {
    const achievements = [
        {
            icon: FaCode,
            title: "500+ Problems Solved",
            description: "LeetCode & GeeksforGeeks",
            color: "#00f3ff"
        },
        {
            icon: FaTrophy,
            title: "SIH 2025 Qualifier",
            description: "Smart India Hackathon - College Level",
            color: "#ffc01e"
        },
        {
            icon: FaLaptopCode,
            title: "Walmart Global Tech",
            description: "Advanced Software Engineering Simulation",
            color: "#bc13fe"
        },
        {
            icon: FaMedal,
            title: "3+ Full-Stack Projects",
            description: "Production Deployed Applications",
            color: "#00e676"
        }
    ];

    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}
            >
                <p style={{ marginBottom: '1.5rem' }}>
                    I am a Computer Science and Engineering student at <strong style={{ color: '#fff' }}>Raj Kumar Goel Institute of Technology (RKGIT)</strong>,
                    with strong foundations in Data Structures and Algorithms and hands-on experience in full-stack web development.
                    I enjoy building scalable, user-focused applications using modern technologies.
                </p>
                <p>
                    I have solved <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>500+ problems on LeetCode and GeeksforGeeks</span>,
                    specializing in Arrays, Strings, Hashing, Trees, and Dynamic Programming.
                </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}
            >
                <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem' }}>
                    Achievements & <span className="gradient-text">Recognition</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '1.8rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <achievement.icon style={{
                                fontSize: '2.5rem',
                                color: achievement.color,
                                marginBottom: '1rem',
                                filter: `drop-shadow(0 0 10px ${achievement.color}40)`
                            }} />
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>
                                {achievement.title}
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Skills */}
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem' }}>Technical Skills</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <SkillCategory title="Languages" skills={["Java", "JavaScript (ES6+)", "TypeScript", "Python"]} delay={0} />
                    <SkillCategory title="Frontend" skills={["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]} delay={0.1} />
                    <SkillCategory title="Backend" skills={["Node.js", "Express.js", "REST APIs", "WebSockets"]} delay={0.2} />
                    <SkillCategory title="Databases" skills={["MongoDB", "MySQL"]} delay={0.3} />
                    <SkillCategory title="DevOps & Tools" skills={["Git", "Vercel", "Railway", "AWS Basics"]} delay={0.4} />
                    <SkillCategory title="Core Concepts" skills={["DSA", "OOP", "DBMS", "LLD"]} delay={0.5} />
                </div>
            </div>
        </section>
    );
};

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
        viewport={{ once: true }}
        transition={{ delay: delay }}
        style={{ padding: '2rem', borderRadius: '15px' }}
    >
        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{title}</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill, index) => (
                <span key={index} style={{
                    fontSize: '0.9rem', color: '#e0e0e0', background: 'rgba(255,255,255,0.05)',
                    padding: '4px 10px', borderRadius: '4px'
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

export default About;
