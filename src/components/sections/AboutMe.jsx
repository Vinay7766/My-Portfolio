import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ data }) => {
    // 3 boxes with dynamic colors
    const stats = [
        { value: '8.3k+', label: 'LINKEDIN FOLLOWERS', color: '#0A66C2' }, // LinkedIn Blue
        { value: '100+', label: 'DSA SOLVED', color: '#F2C94C' }, // Yellow/Gold
        // { value: '1630', label: 'LEETCODE RATING', color: '#9b51e0' },
        { value: '17+', label: 'PROJECTS', color: '#1ccbbc' } // Teal/Cyan
    ];

    return (
        <motion.section
            id="about"
            className="section-padding"
            style={{
                margin: '0 5% 100px',
                padding: '80px 5%',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px'
            }}
            whileHover={{
                borderColor: '#1ccbbc', // Keep the neon glow for the whole section wrapper
                boxShadow: '0 0 30px rgba(28, 203, 188, 0.15)'
            }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>ABOUT ME</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>

                {/* Left Side: Text Content */}
                <div>
                    <motion.p
                        key={`about-${data}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.35rem', lineHeight: 1.8, color: 'var(--text-primary)', margin: 0 }}
                    >
                        {data}
                    </motion.p>
                </div>

                {/* Right Side: 3 Stats Boxes */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem'
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
                                gridColumn: index === 2 ? 'span 2' : 'span 1', // Third box spans full width
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2rem 1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <h3 style={{
                                fontSize: '2.5rem',
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
