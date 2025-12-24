import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPostman, SiMysql } from 'react-icons/si';

const techs = [
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: FaJava, name: "Java" },
    { icon: FaPython, name: "Python" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaGitAlt, name: "Git" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiMysql, name: "MySQL" },
];

const TechMarquee = () => {
    return (
        <section style={{ padding: '4rem 0', background: 'var(--bg-color)', overflow: 'hidden', position: 'relative' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.5rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Technologies I Work With
            </h2>

            <div style={{ display: 'flex', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <motion.div
                    style={{ display: 'flex', gap: '4rem', paddingRight: '4rem' }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', minWidth: '80px' }}>
                            <tech.icon style={{ fontSize: '3rem', color: 'var(--text-gray)', transition: '0.3s' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-gray)'}
                            />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop if needed, but the array duplication above covers it for a simple effective width */}
            </div>
        </section>
    );
};

export default TechMarquee;
