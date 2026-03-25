import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="section-padding" style={{ marginBottom: '100px', overflowX: 'hidden' }}>
            <h2 className="section-title">/ THINGS I HAVE DESIGNED</h2>

            <div style={{
                display: 'flex',
                gap: '2rem',
                overflowX: 'auto',
                paddingBottom: '2rem',
                scrollSnapType: 'x mandatory'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            minWidth: '400px',
                            width: '450px',
                            height: '500px',
                            position: 'relative',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            scrollSnapAlign: 'start',
                            backgroundImage: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.classList.add('glow-blue');
                            e.currentTarget.style.transform = 'translateY(-10px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.classList.remove('glow-blue');
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Background pattern simulating an image */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'radial-gradient(circle at center, rgba(0,136,255,0.1) 0%, transparent 70%)',
                            zIndex: -1,
                            borderRadius: '16px'
                        }} />

                        <div style={{
                            position: 'absolute',
                            top: '2rem', right: '2rem',
                            background: 'rgba(255,255,255,0.1)',
                            padding: '0.25rem 1rem',
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)'
                        }}>
                            {project.date}
                        </div>

                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {project.title}
                        </h3>

                        <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tech.map((t, idx) => (
                                <span key={idx} style={{
                                    color: 'var(--accent-blue)',
                                    background: 'rgba(0, 136, 255, 0.1)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
