import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaLinkedinIn, FaGithub, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            // Add timeout for the request
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

            const response = await axios.post('/api/contact', formData, {
                signal: controller.signal,
                timeout: 15000
            });

            clearTimeout(timeout);

            if (response.data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setErrorMessage(response.data.message || 'Something went wrong.');
                setStatus('error');
            }
        } catch (error) {
            console.error('Contact form error:', error);

            // Provide more specific error messages
            if (error.code === 'ECONNABORTED' || error.name === 'AbortError') {
                setErrorMessage('Request timed out. Please try again.');
            } else if (error.response?.status === 500) {
                setErrorMessage('Server error. Please try again later.');
            } else if (error.response?.status === 400) {
                setErrorMessage(error.response?.data?.message || 'Please fill all required fields.');
            } else if (!navigator.onLine) {
                setErrorMessage('No internet connection. Please check your network.');
            } else {
                setErrorMessage('Unable to send message. Please try email instead.');
            }
            setStatus('error');
        }
    };

    const getButtonContent = () => {
        switch (status) {
            case 'sending':
                return (
                    <>
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            style={{ display: 'inline-block' }}
                        >
                            ⏳
                        </motion.span>
                        {' '}Sending...
                    </>
                );
            case 'success':
                return <><FaCheckCircle /> Message Sent!</>;
            case 'error':
                return <><FaExclamationTriangle /> Try Again</>;
            default:
                return <><FaPaperPlane /> Send Message</>;
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', bottom: '0', right: '0', width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(188,19,254,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)', pointerEvents: 'none'
            }}></div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}
            >
                Let's <span className="gradient-text">Connect</span>
            </motion.h2>

            <div className="contact-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ flex: 1, minWidth: '300px' }}
                >
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600 }}>Get In Touch</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="mailto:work.sarthak17@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.1rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                <FaPaperPlane />
                            </div>
                            Email Me
                        </a>
                        <a href="https://www.linkedin.com/in/sarthak-kanoi-b49475362/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.1rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                <FaLinkedinIn />
                            </div>
                            LinkedIn
                        </a>
                        <a href="https://github.com/iam-sarthakdev" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.1rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                <FaGithub />
                            </div>
                            GitHub
                        </a>
                        <a href="https://leetcode.com/u/Sarthak_1712/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.1rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }}>
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.863l4.332-4.364c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.514.514-1.365 0-1.879l-2.697-2.606c-1.474-1.474-3.578-2.286-5.83-2.286-2.253 0-4.357.812-5.83 2.286L3.439 10.596c-1.474 1.474-2.286 3.578-2.286 5.83 0 2.253.812 4.357 2.286 5.83l4.332 4.363c1.474 1.474 3.578 2.286 5.83 2.286 2.253 0 4.357-.812 5.83-2.286l2.697-2.607c.514-.515.514-1.364 0-1.879-.514-.514-1.365-.514-1.879 0z"></path>
                                </svg>
                            </div>
                            LeetCode
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ flex: 1.5, minWidth: '300px', padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <div className="input-group">
                        <input
                            type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required
                            style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    {/* Error Message Display */}
                    <AnimatePresence>
                        {status === 'error' && errorMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{
                                    padding: '0.8rem 1rem',
                                    background: 'rgba(255, 55, 95, 0.1)',
                                    border: '1px solid rgba(255, 55, 95, 0.3)',
                                    borderRadius: '8px',
                                    color: '#ff375f',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <FaExclamationTriangle />
                                {errorMessage}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        whileHover={{ scale: status === 'success' ? 1 : 1.02 }}
                        whileTap={{ scale: status === 'success' ? 1 : 0.98 }}
                        style={{
                            padding: '1rem', borderRadius: '8px', border: 'none',
                            background: status === 'success'
                                ? 'linear-gradient(90deg, #00e676, #00c853)'
                                : status === 'error'
                                    ? 'linear-gradient(90deg, #ff6b6b, #ee5a5a)'
                                    : 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                            color: '#fff', fontWeight: 600, fontSize: '1rem',
                            cursor: status === 'success' || status === 'sending' ? 'default' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {getButtonContent()}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
