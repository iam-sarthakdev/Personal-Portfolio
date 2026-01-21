import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaLinkedinIn, FaGithub, FaCheckCircle, FaExclamationTriangle, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            const response = await axios.post('/api/contact', formData, {
                signal: controller.signal,
                headers: { 'Content-Type': 'application/json' }
            });

            clearTimeout(timeoutId);

            if (response.data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            setStatus('error');
            if (error.name === 'AbortError' || error.code === 'ECONNABORTED') {
                setErrorMessage('Request timed out. Please try again.');
            } else if (!navigator.onLine) {
                setErrorMessage('No internet connection.');
            } else {
                setErrorMessage('Unable to send. Please try email instead.');
            }
        }
    };

    const contactInfo = [
        { icon: FaEnvelope, label: "Email", value: "sarthak1712005@gmail.com", href: "mailto:sarthak1712005@gmail.com" },
        { icon: FaLinkedinIn, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/sarthak-kanoi-b49475362/" },
        { icon: FaGithub, label: "GitHub", value: "@iam-sarthakdev", href: "https://github.com/iam-sarthakdev" },
        { icon: FaMapMarkerAlt, label: "Location", value: "Delhi NCR, India", href: null }
    ];

    const inputStyle = {
        width: '100%', padding: '1rem 1.2rem',
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px', fontSize: '1rem', color: '#fff',
        transition: 'all 0.3s ease'
    };

    return (
        <section id="contact" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', bottom: '-10%', left: '50%', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(0,243,255,0.1) 0%, transparent 60%)',
                filter: 'blur(80px)', transform: 'translateX(-50%)', pointerEvents: 'none'
            }} />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
                    Have a project in mind or just want to say hi? I'd love to hear from you!
                </p>
            </motion.div>

            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem', maxWidth: '1100px', margin: '0 auto'
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                        Get In Touch
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 8 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '14px',
                                    background: 'rgba(0, 243, 255, 0.1)',
                                    border: '1px solid rgba(0, 243, 255, 0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <item.icon style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: '#888' }}>{item.label}</div>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" style={{ color: '#fff', fontWeight: 500 }}>
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span style={{ color: '#fff', fontWeight: 500 }}>{item.value}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ padding: '2.5rem', borderRadius: '24px' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#888' }}>Your Name</label>
                            <motion.input
                                type="text" name="name" required value={formData.name} onChange={handleChange}
                                whileFocus={{ borderColor: 'var(--primary-color)', boxShadow: '0 0 0 3px rgba(0,243,255,0.1)' }}
                                placeholder="John Doe" style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#888' }}>Email</label>
                            <motion.input
                                type="email" name="email" required value={formData.email} onChange={handleChange}
                                whileFocus={{ borderColor: 'var(--primary-color)', boxShadow: '0 0 0 3px rgba(0,243,255,0.1)' }}
                                placeholder="john@example.com" style={inputStyle}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#888' }}>Subject</label>
                        <motion.input
                            type="text" name="subject" value={formData.subject} onChange={handleChange}
                            whileFocus={{ borderColor: 'var(--primary-color)', boxShadow: '0 0 0 3px rgba(0,243,255,0.1)' }}
                            placeholder="What's this about?" style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#888' }}>Message</label>
                        <motion.textarea
                            name="message" required value={formData.message} onChange={handleChange}
                            whileFocus={{ borderColor: 'var(--primary-color)', boxShadow: '0 0 0 3px rgba(0,243,255,0.1)' }}
                            placeholder="Tell me about your project..." rows="5"
                            style={{ ...inputStyle, resize: 'none' }}
                        />
                    </div>

                    {/* Status Messages */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '1rem', borderRadius: '12px',
                                    background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)',
                                    marginBottom: '1rem', color: '#22c55e', fontSize: '0.9rem'
                                }}
                            >
                                <FaCheckCircle /> Message sent successfully!
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '1rem', borderRadius: '12px',
                                    background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)',
                                    marginBottom: '1rem', color: '#ef4444', fontSize: '0.9rem'
                                }}
                            >
                                <FaExclamationTriangle /> {errorMessage}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 0 40px rgba(0, 243, 255, 0.3)' } : {}}
                        whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                        style={{
                            width: '100%', padding: '1rem',
                            background: status === 'sending'
                                ? 'rgba(255,255,255,0.1)'
                                : 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            color: status === 'sending' ? '#888' : '#000',
                            borderRadius: '14px', fontWeight: 700, fontSize: '1rem',
                            border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                        }}
                    >
                        {status === 'sending' ? (
                            <>
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    style={{ display: 'inline-block', width: '20px', height: '20px', border: '2px solid #888', borderTopColor: 'transparent', borderRadius: '50%' }}
                                />
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane /> Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
