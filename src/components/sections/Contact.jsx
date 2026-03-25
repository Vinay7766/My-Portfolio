import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '150px 0 100px', background: '#050706', position: 'relative', overflow: 'hidden' }}>
            {/* Massive Background Marquee */}
            <div style={{ position: 'absolute', top: '10%', left: 0, width: '200%', whiteSpace: 'nowrap', opacity: 0.03, pointerEvents: 'none', zIndex: 0 }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    style={{ display: 'inline-block' }}
                >
                    <span style={{ fontSize: '15vw', fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", paddingRight: '50px' }}>LET'S WORK TOGETHER / LET'S BUILD / </span>
                    <span style={{ fontSize: '15vw', fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif" }}>LET'S WORK TOGETHER / LET'S BUILD / </span>
                </motion.div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#fff', margin: '0 0 1rem 0' }}
                    >
                        Ready to innovate?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        I'm currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                    </motion.p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <motion.a
                        href="mailto:kalangi.arya7766@gmail.com"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 136, 255, 0.2)', borderColor: '#0088ff' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '2.5rem 4rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            flex: '1 1 300px',
                            maxWidth: '400px'
                        }}
                    >
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0088ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Send an Email</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>Get in touch</span>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/Vinay-Kalangi"
                        target="_blank"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 255, 136, 0.15)', borderColor: '#00ff88' }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '2.5rem 4rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            flex: '1 1 300px',
                            maxWidth: '400px'
                        }}
                    >
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Connect on</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>LinkedIn</span>
                        </div>
                    </motion.a>

                    <motion.a
                        href="tel:+919110342030"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(155, 81, 224, 0.15)', borderColor: '#9b51e0' }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '2.5rem 4rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            flex: '1 1 300px',
                            maxWidth: '400px'
                        }}
                    >
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#9b51e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>Give a call</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>Phone</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
