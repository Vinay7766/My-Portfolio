import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ data }) => {
    // 3 boxes with dynamic colors
    const stats = [
        { value: '8.3k+', label: 'LINKEDIN FOLLOWERS', color: '#0A66C2' }, // LinkedIn Blue
        { value: '100+', label: 'DSA SOLVED', color: '#F2C94C' }, // Yellow/Gold
        { value: '17+', label: 'PROJECTS', color: '#1ccbbc' } // Teal/Cyan
    ];

    return (
        <motion.section
            id="about"
            className="section-padding"
            style={{
                margin: '0 5% 80px',
                padding: '40px 5%',
                background: 'radial-gradient(circle at top right, rgba(0, 255, 136, 0.05), rgba(5,7,6,0.3) 60%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px'
            }}
            whileHover={{
                borderColor: '#1ccbbc', // Keep the neon glow for the whole section wrapper
                boxShadow: '0 0 30px rgba(28, 203, 188, 0.15)'
            }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>/ ABOUT ME</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '3rem',
                alignItems: 'center'
            }}>

                {/* Left Side: Text Content */}
                <div>
                    <motion.div
                        key={`about-${data}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}
                    >
                        {data.split('\n').filter(p => p.trim() !== '').map((paragraph, i) => (
                            <p key={i} style={{ marginBottom: '1rem', opacity: 0.9 }}>
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: 3 Stats Boxes */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    minWidth: '250px'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -5,
                                borderColor: stat.color, // Dynamic Hover Border
                                boxShadow: `0 10px 40px ${stat.color}40`, // Dynamic Glowing Shadow
                                background: 'rgba(255, 255, 255, 0.05)'
                            }}
                            style={{
                                gridColumn: 'span 1', // Even 2x2 scaling grid
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '1.5rem 1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                margin: '0 0 0.5rem 0',
                                color: stat.color, // Dynamic Number Color
                                textShadow: `0 0 20px ${stat.color}66`, // Dynamic Number Glow
                                fontFamily: "'Inter', sans-serif"
                            }}>
                                {stat.value}
                            </h3>
                            <p style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                margin: 0,
                                letterSpacing: '2px',
                                fontWeight: 500,
                                textTransform: 'uppercase'
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default AboutMe;
