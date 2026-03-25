import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ achievements }) => {
    // We require an odd number of items (minimum 5) so the infinite slider math perfectly balances Left and Right.
    // This securely handles cases where the user only has 2 achievements.
    const displayCount = Math.max(5, achievements.length + (achievements.length % 2 === 0 ? 1 : 0));
    const items = Array.from({ length: displayCount }).map((_, i) => achievements[i % achievements.length]);

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((curr) => (curr + 1) % items.length);
    const prev = () => setActiveIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));

    return (
        <section id="achievements" style={{ padding: '120px 0', background: '#050706', overflow: 'hidden' }}>

            {/* Aluro Style Header: Split Sans-serif & Italic Serif */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{
                    display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
                    gap: '15px', alignItems: 'baseline', margin: 0, padding: '0 20px'
                }}>
                    <span style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontStyle: 'italic', fontWeight: 500, color: '#fff' }}>
                        ACHIEVEMENTS
                    </span>
                </h2>
            </div>

            {/* Horizontal Focus Carousel */}
            <div style={{ position: 'relative', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                {items.map((item, index) => {
                    let diff = index - activeIndex;
                    // Infinite wrap offset logic (for odd length array):
                    if (diff > items.length / 2) diff -= items.length;
                    if (diff < -items.length / 2) diff += items.length;

                    const isActive = diff === 0;
                    const isSide = Math.abs(diff) === 1;
                    const isVisible = Math.abs(diff) <= 1;

                    return (
                        <motion.div
                            key={index}
                            animate={{
                                x: diff * 580, // Horizontal offset spacing between cards
                                scale: isActive ? 1 : 0.85,
                                opacity: isActive ? 1 : (isSide ? 0.4 : 0),
                                filter: isActive ? 'blur(0px)' : 'blur(4px)',
                                borderColor: isActive ? '#0066FF' : 'rgba(255,255,255,0.05)',
                                boxShadow: isActive ? '0 0 40px rgba(0, 102, 255, 0.25)' : '0 0 0px rgba(0,0,0,0)',
                                zIndex: isActive ? 10 : (isVisible ? 5 : 0)
                            }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                maxWidth: '520px',
                                background: '#0B0C0E', // Dark muted gray mapping Aluro
                                padding: '48px',
                                borderRadius: '24px',
                                border: '1.5px solid transparent', // Property overridden by animation
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '30px',
                                cursor: isSide ? 'pointer' : 'default',
                                pointerEvents: isVisible ? 'auto' : 'none',
                                userSelect: 'none'
                            }}
                            onClick={() => {
                                if (diff === 1) next();
                                if (diff === -1) prev();
                            }}
                        >
                            {/* Content mapping Aluro's 'Collaboration' large text */}
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 300, color: '#fff', margin: 0 }}>
                                    "{item.title}"
                                </p>
                            </div>

                            {/* Bottom Card Identity Row */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    {/* Neon Avatar Placeholder */}
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0066FF, #00e5ff)' }} />
                                    <div>
                                        <p style={{ fontWeight: 600, color: '#fff', fontSize: '16px', margin: '0 0 5px 0' }}>
                                            {item.organization}
                                        </p>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', margin: 0 }}>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Huge Blue Closing Quote Icon */}
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#0066FF" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                                </svg>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Left Navigation Button */}
                <button
                    onClick={prev}
                    className="focus-btn"
                    style={{
                        position: 'absolute', left: 'calc(50% - 310px)', zIndex: 20,
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: '#0066FF', border: 'none', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 102, 255, 0.4)',
                        transition: 'all 0.2s ease', transform: 'translateX(-50%)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)'; e.currentTarget.style.background = '#0052cc'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateX(-50%) scale(1)'; e.currentTarget.style.background = '#0066FF'; }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={next}
                    className="focus-btn"
                    style={{
                        position: 'absolute', right: 'calc(50% - 310px)', zIndex: 20,
                        width: '48px', height: '48px', borderRadius: '50%',
                        background: '#0066FF', border: 'none', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 102, 255, 0.4)',
                        transition: 'all 0.2s ease', transform: 'translateX(50%)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateX(50%) scale(1.1)'; e.currentTarget.style.background = '#0052cc'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateX(50%) scale(1)'; e.currentTarget.style.background = '#0066FF'; }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
                </button>
            </div>

        </section>
    );
};

export default Achievements;
