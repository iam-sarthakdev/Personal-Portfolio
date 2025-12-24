import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LeetCodeStats = () => {
    const [stats, setStats] = useState(null);
    const [calendar, setCalendar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [streakStats, setStreakStats] = useState({ totalActive: 0, maxStreak: 0 });

    const username = "Sarthak_1712";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const statsRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
                const statsData = await statsRes.json();
                setStats(statsData);

                const calRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
                const calData = await calRes.json();

                if (calData.submissionCalendar) {
                    const parsedCal = JSON.parse(calData.submissionCalendar);
                    setCalendar(parsedCal);
                    calculateStreakStats(parsedCal);
                }

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Unable to load LeetCode data");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const calculateStreakStats = (cal) => {
        const timestamps = Object.keys(cal).map(Number).sort((a, b) => a - b);
        const totalActive = timestamps.length;
        let maxStreak = 0;
        let currentStreak = 0;
        let prevDate = null;

        timestamps.forEach((ts) => {
            const date = new Date(ts * 1000);
            const dayDiff = prevDate ? (ts - prevDate) / (60 * 60 * 24) : 0;
            if (currentStreak === 0) {
                currentStreak = 1;
            } else if (Math.round(dayDiff) === 1) {
                currentStreak++;
            } else if (Math.round(dayDiff) > 1) {
                currentStreak = 1;
            }
            if (currentStreak > maxStreak) maxStreak = currentStreak;
            prevDate = ts;
        });

        setStreakStats({ totalActive, maxStreak });
    };

    const renderCalendar = () => {
        const today = new Date();
        const endDate = new Date(today);
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - 364);
        const dayOfWeek = startDate.getDay();
        startDate.setDate(startDate.getDate() - dayOfWeek);

        const weeks = [];
        let loopDate = new Date(startDate);

        for (let w = 0; w < 53; w++) {
            const week = [];
            for (let d = 0; d < 7; d++) {
                if (loopDate > endDate) {
                    week.push(null);
                } else {
                    week.push(new Date(loopDate));
                }
                loopDate.setDate(loopDate.getDate() + 1);
            }
            weeks.push(week);
        }
        return weeks;
    };

    const weeks = renderCalendar();

    // Calculate Month Labels Positions
    const monthLabels = [];
    weeks.forEach((week, index) => {
        const firstDay = week[0];
        if (firstDay) {
            const monthName = firstDay.toLocaleString('default', { month: 'short' });
            // Add label if it's the first week OR if month changed from prev week's first day
            if (monthLabels.length === 0 || monthLabels[monthLabels.length - 1].name !== monthName) {
                // Only add if there's space (avoid crowding)
                if (monthLabels.length === 0 || index - monthLabels[monthLabels.length - 1].index > 2) {
                    monthLabels.push({ name: monthName, index });
                }
            }
        }
    });

    const calendarMap = React.useMemo(() => {
        const map = {};
        if (calendar) {
            Object.keys(calendar).forEach(ts => {
                const date = new Date(parseInt(ts) * 1000);
                const iso = date.toISOString().split('T')[0];
                map[iso] = calendar[ts];
            });
        }
        return map;
    }, [calendar]);

    return (
        <section id="leetcode" className="section-padding" style={{ position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                LeetCode <span className="gradient-text">Activity</span>
            </motion.h2>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '2rem',
                        borderRadius: '20px',
                        background: '#161616',  // LeetCode Dark BG
                        border: '1px solid #333'
                    }}
                >
                    {loading ? (
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading...</div>
                    ) : (
                        <>
                            {/* Stats Header */}
                            <div style={{
                                display: 'flex', justifyContent: 'center', gap: '4rem', marginBottom: '2.5rem', flexWrap: 'wrap'
                            }}>
                                <StatItem label="Total Solved" value={stats?.solvedProblem} />
                                <StatItem label="Easy" value={stats?.easySolved} color="#00b8a3" />
                                <StatItem label="Medium" value={stats?.mediumSolved} color="#ffc01e" />
                                <StatItem label="Hard" value={stats?.hardSolved} color="#ff375f" />
                            </div>

                            {/* Heatmap Section */}
                            <div style={{ padding: '0 0.5rem' }}>
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    marginBottom: '1rem', color: '#999', fontSize: '0.9rem'
                                }}>
                                    <span>{streakStats.totalActive} submissions in the past one year</span>
                                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                                        <span>Total active days: <b style={{ color: '#fff' }}>{streakStats.totalActive}</b></span>
                                        <span>Max streak: <b style={{ color: '#fff' }}>{streakStats.maxStreak}</b></span>
                                    </div>
                                </div>

                                <div style={{ width: '100%', overflowX: 'auto' }}>
                                    {/* Month Labels */}
                                    <div style={{ display: 'flex', position: 'relative', height: '20px', marginBottom: '5px' }}>
                                        {monthLabels.map((m, i) => (
                                            <span key={i} style={{
                                                position: 'absolute',
                                                left: `${m.index * 14}px`, // 11px box + 3px gap = 14px pitch
                                                fontSize: '0.75rem',
                                                color: '#666'
                                            }}>
                                                {m.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* The Grid */}
                                    <div style={{ display: 'flex', gap: '3px' }}>
                                        {weeks.map((week, wIndex) => (
                                            <div key={wIndex} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                                {week.map((date, dIndex) => {
                                                    // Empty placeholder for future dates or padding
                                                    if (!date) return <div key={dIndex} style={{ width: '11px', height: '11px' }} />; // Invisible

                                                    const iso = date.toISOString().split('T')[0];
                                                    const count = calendarMap[iso] || 0;

                                                    // LeetCode Colors
                                                    let bgColor = '#2d2d2d'; // Empty (Dark Grey)
                                                    if (count > 0) bgColor = '#004a1f'; // lvl 1
                                                    if (count > 2) bgColor = '#008332'; // lvl 2
                                                    if (count > 5) bgColor = '#00ad41'; // lvl 3
                                                    if (count > 9) bgColor = '#00d64f'; // lvl 4 (Brightest)

                                                    return (
                                                        <div
                                                            key={dIndex}
                                                            title={`${count} submissions on ${iso}`}
                                                            style={{
                                                                width: '11px',
                                                                height: '11px',
                                                                borderRadius: '2px',
                                                                backgroundColor: bgColor
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a
                        href={`https://leetcode.com/u/${username}/`}
                        target="_blank"
                        style={{
                            display: 'inline-block',
                            padding: '0.8rem 2rem',
                            background: '#2d2d2d',
                            color: '#fff',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            border: '1px solid #444',
                            transition: '0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.borderColor = '#fff'}
                        onMouseOut={(e) => e.target.style.borderColor = '#444'}
                    >
                        View Full Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ label, value, color = "#fff" }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 700, color: color }}>{value}</div>
        <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '6px', letterSpacing: '0.5px' }}>{label.toUpperCase()}</div>
    </div>
);

export default LeetCodeStats;
