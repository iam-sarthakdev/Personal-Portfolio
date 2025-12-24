import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="section-padding" style={{ position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                My <span className="gradient-text">Education</span>
            </motion.h2>

            <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <TimelineItem
                    title="B.Tech in Computer Science and Engineering"
                    institution="Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad"
                    date="2023 – 2027"
                    gpa="CGPA: 8.50"
                    index={0}
                />
                <TimelineItem
                    title="Senior Secondary Education (Class XII)"
                    institution="RPM Academy"
                    date="2021 – 2022"
                    gpa="Percentage: 87%"
                    index={1}
                />
                <TimelineItem
                    title="Secondary Education (Class X)"
                    institution="RPM Academy"
                    date="2019 – 2020"
                    gpa="Percentage: 89%"
                    index={2}
                />
            </div>
        </section>
    );
};

const TimelineItem = ({ title, institution, date, gpa, index }) => (
    <motion.div
        className="glass-card"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
        style={{
            padding: '2rem',
            borderRadius: '15px',
            position: 'relative',
            borderLeft: '4px solid var(--primary-color)'
        }}
    >
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>{title}</h3>
        <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{institution}</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <span style={{
                background: 'rgba(0, 243, 255, 0.1)', color: 'var(--primary-color)',
                padding: '4px 10px', borderRadius: '15px', fontSize: '0.8rem'
            }}>{date}</span>
            <span style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>{gpa}</span>
        </div>
    </motion.div>
);

export default Education;
