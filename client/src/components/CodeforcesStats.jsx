import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaStar, FaCodeBranch, FaArrowUp } from 'react-icons/fa';

const CodeforcesStats = () => {
    // Static data matching the user's achievements
    const stats = {
        rating: 1935,
        rank: "Candidate Master",
        maxRating: 1935,
        maxRank: "Candidate Master",
        contributions: "+45", // Assumed positive contribution
        friendOfCount: 150
    };

    return (
        <section id="codeforces" className="section-padding" style={{ position: 'relative', background: 'var(--second-bg-color)' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Codeforces <span className="gradient-text">Journey</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Competitive Programming profile featuring a Peak Rating of 1935
                </p>
            </motion.div>

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}
                >
                    <StatCard icon={FaChartLine} label="Current Rating" value={stats.rating} color="#bc13fe" />
                    <StatCard icon={FaTrophy} label="Peak Rating" value={stats.maxRating} color="#ffc01e" />
                    <StatCard icon={FaStar} label="Max Rank" value={stats.maxRank} color="#00f3ff" isString />
                    <StatCard icon={FaCodeBranch} label="Contributions" value={stats.contributions} color="#22c55e" isString />
                </motion.div>

                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ padding: '2rem', borderRadius: '20px', textAlign: 'center' }}
                >
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#bc13fe' }}>
                        Candidate Master
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Ranked among the top competitive programmers globally. 
                        Consistently participating in Div 1 & Div 2 contests and solving complex algorithmic challenges.
                    </p>
                    
                    {/* Profile Link */}
                    <div style={{ textAlign: 'center' }}>
                        <motion.a
                            href="https://codeforces.com/profile/Sarthak1712"
                            target="_blank"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(188, 19, 254, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                padding: '1rem 2rem', background: 'linear-gradient(90deg, #bc13fe, #ffc01e)',
                                color: '#000', borderRadius: '30px', fontWeight: 600, fontSize: '0.95rem'
                            }}
                        >
                            <FaArrowUp style={{ transform: 'rotate(45deg)' }} />
                            View Codeforces Profile
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Stat Card Component
const StatCard = ({ icon: Icon, label, value, color, isString = false }) => (
    <motion.div
        className="glass-card"
        whileHover={{ y: -5, borderColor: color }}
        style={{
            padding: '1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            border: '1px solid transparent'
        }}
    >
        <Icon style={{ fontSize: '1.8rem', color, marginBottom: '0.8rem' }} />
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}
        >
            {isString ? value : <AnimatedCounter value={value} />}
        </motion.div>
        <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.3rem' }}>{label}</div>
    </motion.div>
);

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if (value) {
            let start = 0;
            const end = parseInt(value);
            const duration = 1200;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) { setCount(end); clearInterval(timer); }
                else { setCount(Math.floor(start)); }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [value]);
    return <>{count}{suffix}</>;
};

export default CodeforcesStats;
