import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarthak-kanoi-b49475362/" },
        { icon: FaGithub, href: "https://github.com/iam-sarthakdev" },
        { icon: FaEnvelope, href: "mailto:sarthak1712005@gmail.com" }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer style={{
            padding: '4rem 6% 2rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Top Section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '45px', height: '45px',
                                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.1rem', fontWeight: 800, color: '#000'
                            }}>
                                SK
                            </div>
                            <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                                Sarthak
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '250px' }}>
                            Building digital experiences with modern technologies and clean code.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {quickLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    whileHover={{ x: 5, color: 'var(--primary-color)' }}
                                    style={{ color: '#888', fontSize: '0.9rem', transition: 'color 0.2s' }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1rem' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            {socialLinks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    whileHover={{ y: -4, background: 'var(--primary-color)', color: '#000' }}
                                    style={{
                                        width: '42px', height: '42px', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.03)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#888', fontSize: '1rem', transition: 'all 0.3s'
                                    }}
                                >
                                    <item.icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '2rem' }} />

                {/* Bottom Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: '#666',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                    }}>
                        Made with <FaHeart style={{ color: '#ff375f', fontSize: '0.9rem' }} /> by Sarthak Kanoi © 2026
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3, background: 'var(--primary-color)', color: '#000' }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '10px 16px', borderRadius: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#888', fontSize: '0.85rem', cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        <FaArrowUp /> Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
