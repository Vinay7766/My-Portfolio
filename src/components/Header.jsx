import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ResumeDownload from './ResumeDownload';

const Header = ({ persona, setPersona, contact }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const personas = [
        { id: 'about', label: 'About Me', sectionId: 'about' },
        { id: 'Skills', label: 'Skills', sectionId: 'skills' },
        { id: 'Projects', label: 'Projects', sectionId: 'projects' },
        { id: 'Certifications', label: 'Certifications', sectionId: 'certifications' },
        { id: 'Achievements', label: 'Achievements', sectionId: 'achievements' },
        { id: 'Education', label: 'Education', sectionId: 'education' },
        { id: 'Contact', label: 'Contact', sectionId: 'contact' }
    ];

    const handleNavigation = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`transition-all duration-300 ${isScrolled ? 'glass-panel' : ''}`}
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 50,
                padding: isScrolled ? '1rem 5%' : '2rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
                borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                background: isScrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none'
            }}
        >
            <div 
                className="logo" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer', fontSize: '3.5rem', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
                VK
            </div>

            {/* Container for grouping Nav and Button on the right */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <nav style={{ display: 'flex', gap: '0.25rem', background: 'rgba(0,0,0,0.5)', padding: '0.75rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>
                    {personas.map((p, index) => {
                        const hoverColors = ['#00ff88', '#0088ff', '#9b51e0', '#f2c94c', '#1ccbbc', '#ff4b4b', '#ff8cba'];
                        const hColor = hoverColors[index % hoverColors.length];
                        return (
                        <button
                            key={p.id}
                            onClick={() => handleNavigation(p.sectionId)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: '50px',
                                border: 'none',
                                background: persona === p.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                                color: persona === p.id ? '#fff' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.color = hColor;
                                e.currentTarget.style.textShadow = `0 0 12px ${hColor}99`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.color = persona === p.id ? '#fff' : 'var(--text-secondary)';
                                e.currentTarget.style.textShadow = 'none';
                                e.currentTarget.style.transform = 'none';
                            }}
                        >
                            {p.label}
                        </button>
                    )})}
                </nav>

                <div className="contact-cta" style={{ display: 'flex', alignItems: 'center' }}>
                    <ResumeDownload />
                </div>
            </div>
        </header>
    );
};

export default Header;
