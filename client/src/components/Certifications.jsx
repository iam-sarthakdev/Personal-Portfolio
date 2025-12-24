import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certs = [
        {
            title: "Walmart Global Tech",
            subtitle: "Advanced Software Engineering Job Simulation",
            desc: "Worked on advanced data structures, software architecture, and relational DB design tasks.",
            link: "https://drive.google.com/file/d/1cWwMya_hkGCSRwACwGYToGwToE2ksUaP/view?usp=sharing"
        },
        {
            title: "Wells Fargo",
            subtitle: "Software Engineering Job Simulation",
            desc: "Built and implemented data models and software solutions aligned with real-world engineering workflows.",
            link: "https://drive.google.com/file/d/1Bv31Qltxb5mKiw0oIB2NPbXjWIFK13sm/view?usp=sharing"
        },
        {
            title: "AWS Cloud Training",
            subtitle: "DevOps on AWS & AWS CLI Basics",
            desc: "Gained hands-on experience with cloud workflows and DevOps fundamentals.",
            link: "https://drive.google.com/file/d/11J7FdJGIzHK-o-8XuE1qV-PPulb6eRad/view"
        },
        {
            title: "Deloitte",
            subtitle: "Data Analytics Job Simulation",
            desc: "Performed data analytics & forensic investigation tasks using industry-standard techniques.",
            link: "https://drive.google.com/file/d/1lYBPzHPsys0IBQ40bDKYw1G2r8Q8Pif0/view?usp=sharing"
        }
    ];

    return (
        <section id="certifications" className="section-padding" style={{ background: 'var(--second-bg-color)' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                <span className="gradient-text">Certifications</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, borderColor: 'var(--secondary-color)' }}
                        style={{ padding: '2rem', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{cert.title}</h3>
                        <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', fontWeight: 500 }}>{cert.subtitle}</h4>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', flex: 1, marginBottom: '1.5rem' }}>{cert.desc}</p>

                        <a
                            href={cert.link}
                            target="_blank"
                            style={{
                                display: 'inline-block', padding: '0.6rem 1.2rem',
                                border: '1px solid var(--primary-color)', borderRadius: '50px',
                                color: 'var(--primary-color)', fontSize: '0.9rem', textAlign: 'center',
                                transition: '0.3s', alignSelf: 'flex-start'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'var(--primary-color)';
                                e.target.style.color = '#000';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--primary-color)';
                            }}
                        >
                            View Credential
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
