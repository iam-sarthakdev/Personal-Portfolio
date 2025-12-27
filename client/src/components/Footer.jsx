import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', background: 'var(--bg-color)', position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            >
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    Made with <FaHeart style={{ color: 'var(--primary-color)' }} /> and React by Sarthak Kanoi
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    Copyright © 2026. All Rights Reserved.
                </p>
            </motion.div>

            <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -5, backgroundColor: 'var(--primary-color)', color: '#000' }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--primary-color)',
                    color: 'var(--primary-color)', width: '40px', height: '40px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                    fontSize: '1rem'
                }}
            >
                <FaArrowUp />
            </motion.button>
        </footer>
    );
};

export default Footer;
