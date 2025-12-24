import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaLayerGroup } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "Frontend Development",
            icon: FaLaptopCode,
            desc: "Building responsive, interactive, and aesthetic user interfaces using React.js, Next.js, and Framer Motion."
        },
        {
            title: "Backend Architecture",
            icon: FaServer,
            desc: "Designing robust and scalable server-side applications with Node.js, Express, and MongoDB."
        },
        {
            title: "Full Stack Solutions",
            icon: FaLayerGroup,
            desc: "Delivering complete web solutions from concept to deployment, ensuring seamless integration."
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                What I <span className="gradient-text">Do</span>
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        style={{
                            padding: '3rem 2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--primary-color)', fontSize: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <service.icon />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
