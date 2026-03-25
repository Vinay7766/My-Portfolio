import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Individual Sticky Card Component
const CertCard = ({ cert, index, total, scrollYProgress, onClick }) => {
    // Determine the scroll range for this specific card's scaling effect
    const startScalePoint = index / total;
    const endScalePoint = (index + 1) / total;

    // Keep the sticky scale transition but avoid fading previous cards (prevents visual overlap).
    const scale = useTransform(scrollYProgress, [startScalePoint, endScalePoint], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [startScalePoint, endScalePoint], [1, 1]);

    const hoverProfiles = [
        {
            baseBorder: 'rgba(28, 203, 188, 0.35)',
            hoverBorder: '#1ccbbc',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(28,203,188,0.7), 0 24px 56px rgba(28,203,188,0.24)'
        },
        {
            baseBorder: 'rgba(100, 200, 255, 0.35)',
            hoverBorder: '#64c8ff',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(100,200,255,0.7), 0 24px 56px rgba(100,200,255,0.24)'
        },
        {
            baseBorder: 'rgba(255, 170, 90, 0.35)',
            hoverBorder: '#ffaa5a',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,170,90,0.72), 0 24px 56px rgba(255,170,90,0.24)'
        },
        {
            baseBorder: 'rgba(255, 140, 186, 0.35)',
            hoverBorder: '#ff8cba',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,140,186,0.7), 0 24px 56px rgba(255,140,186,0.24)'
        }
    ];
    const hoverProfile = hoverProfiles[index % hoverProfiles.length];

    const defaultImage = "https://images.unsplash.com/photo-1589330694653-efa64753063f?q=80&w=1200&auto=format&fit=crop";

    return (
        <div style={{
            position: 'sticky',
            top: '15vh', // Where each card stops and locks to the screen
            height: '85vh', // Height of the placeholder taking up screen space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <motion.div
                style={{
                    scale: index === total - 1 ? 1 : scale,
                    opacity: index === total - 1 ? 1 : opacity,
                    width: '100%',
                    maxWidth: '1200px',
                    height: '75vh',
                    background: '#0a0a0a',
                    position: 'relative',
                    zIndex: index + 1,
                    border: `1px solid ${hoverProfile.baseBorder}`,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 -20px 40px rgba(0,0,0,0.6)', // Top shadow emphasizes the layering
                    cursor: 'pointer',
                    transformOrigin: 'top center'
                }}
                onClick={() => onClick(cert)}
                whileHover={{ y: -10, borderColor: hoverProfile.hoverBorder, boxShadow: hoverProfile.hoverShadow }}
                transition={{ duration: 0.3 }}
            >
                {/* Top Image Preview */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <img
                        src={defaultImage}
                        alt={cert.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />
                </div>

                {/* Bottom Text Content */}
                <div style={{ padding: '3rem', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, margin: '0 0 0.5rem 0', fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}>
                            {cert.name}
                        </h3>
                        <p style={{ fontSize: '1.25rem', color: '#1ccbbc', margin: 0, fontWeight: 500 }}>
                            {cert.issuer}
                        </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                            {cert.date}
                        </span>
                        <div style={{ marginTop: '0.5rem', color: '#1ccbbc', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            View Details  →
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Certifications = ({ certifications }) => {
    // The container that wraps all cards. We track scroll progress within this container.
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [selectedCert, setSelectedCert] = useState(null);
    const defaultImage = "https://images.unsplash.com/photo-1589330694653-efa64753063f?q=80&w=1200&auto=format&fit=crop";

    return (
        <section id="certifications" style={{ background: '#050706', position: 'relative' }}>

            <div style={{ padding: '100px 5% 50px' }}>
                <h2 className="section-title" style={{ margin: 0 }}>CERTIFICATIONS</h2>
            </div>

            {/* Sticky Cards Track & Side Button */}
            <div ref={containerRef} style={{ padding: '0 5%', position: 'relative', paddingBottom: '20vh', display: 'flex', gap: '3rem', alignItems: 'stretch' }}>

                {/* Main Certificates Stack */}
                <div style={{ flex: 1, position: 'relative' }}>
                    {certifications.map((cert, index) => (
                        <CertCard
                            key={index}
                            index={index}
                            total={certifications.length}
                            cert={cert}
                            scrollYProgress={scrollYProgress}
                            onClick={setSelectedCert}
                        />
                    ))}
                </div>

                {/* Explore More Button Column */}
                <div style={{
                    minWidth: '200px',
                    position: 'relative'
                }}>
                    <motion.a
                        href="#all-certifications"
                        whileHover={{ backgroundColor: '#fff', color: '#000' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'sticky',
                            top: '50vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: 'translateY(-50%)',
                            padding: '1.25rem 2.5rem',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '50px', // Complete transparency with round borders
                            background: 'transparent',
                            color: '#fff',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            cursor: 'pointer'
                        }}
                    >
                        Explore More
                    </motion.a>
                </div>

            </div>

            {/* Full Screen Modal for Certificate Details */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 9999,
                            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 30, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '3rem',
                                borderRadius: '24px',
                                maxWidth: '800px',
                                width: '100%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                style={{
                                    position: 'absolute', top: '2rem', right: '2rem',
                                    background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
                                    cursor: 'pointer', padding: '0.75rem', borderRadius: '50px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'background 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Certificate Image Large */}
                            <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <img
                                    src={defaultImage} // Replace with selectedCert.image later
                                    alt="Certificate"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Details */}
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {selectedCert.name}
                                </h2>
                                <h3 style={{ color: '#1ccbbc', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>
                                    {selectedCert.issuer}
                                </h3>

                                <div style={{ display: 'flex', gap: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Date Issued</p>
                                        <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{selectedCert.date}</p>
                                    </div>
                                    <div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Credential ID</p>
                                        <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>Pending integration</p>
                                    </div>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <button style={{
                                            background: '#1ccbbc', color: '#000', border: 'none',
                                            padding: '0.75rem 2rem', borderRadius: '50px',
                                            fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s'
                                        }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        >
                                            Verify Official Source ↗
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Certifications;
