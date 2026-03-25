import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Individual Sticky Card Component
const EduCard = ({ edu, index, total, scrollYProgress }) => {
    // Determine the scroll range for this specific card's scaling effect
    const startScalePoint = index / total;
    const endScalePoint = (index + 1) / total;

    // Keep sticky scale effect but prevent fading to avoid card overlap artifacts.
    const scale = useTransform(scrollYProgress, [startScalePoint, endScalePoint], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [startScalePoint, endScalePoint], [1, 1]);

    const schoolColors = {
        'Lovely Professional University': 'rgba(28, 203, 188, 0.1)',
        'Oxford Vit Academy': 'rgba(100, 200, 255, 0.1)',
        'Tiny Tots High School': 'rgba(255, 150, 200, 0.1)'
    };

    const schoolBorderColors = {
        'Lovely Professional University': '#1ccbbc',
        'Oxford Vit Academy': '#64c8ff',
        'Tiny Tots High School': '#ff96c8'
    };

    const hoverProfileBySchool = {
        'Lovely Professional University': {
            hoverBorder: '#32e8d8',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 2px rgba(50,232,216,0.65), 0 26px 60px rgba(28,203,188,0.24)',
            hoverRotate: -0.2,
            hoverScale: 1.01
        },
        'Oxford Vit Academy': {
            hoverBorder: '#83d9ff',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 2px rgba(131,217,255,0.65), 0 26px 60px rgba(100,200,255,0.24)',
            hoverRotate: 0.2,
            hoverScale: 1.008
        },
        'Tiny Tots High School': {
            hoverBorder: '#ffb3da',
            hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,179,218,0.65), 0 26px 60px rgba(255,150,200,0.24)',
            hoverRotate: -0.35,
            hoverScale: 1.012
        }
    };
    const hoverProfile = hoverProfileBySchool[edu.school] || {
        hoverBorder: '#32e8d8',
        hoverShadow: '0 -20px 40px rgba(0,0,0,0.6), 0 0 0 2px rgba(50,232,216,0.65), 0 26px 60px rgba(28,203,188,0.24)',
        hoverRotate: 0,
        hoverScale: 1.01
    };

    return (
        <div style={{
            position: 'sticky',
            top: '15vh',
            height: '85vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <motion.div
                style={{
                    scale: index === total - 1 ? 1 : scale,
                    opacity: index === total - 1 ? 1 : opacity,
                    width: '100%',
                    maxWidth: '1000px',
                    height: '75vh',
                    background: '#0a0a0a',
                    position: 'relative',
                    zIndex: index + 1,
                    border: `2px solid ${schoolBorderColors[edu.school] || '#1ccbbc'}`,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 -20px 40px rgba(0,0,0,0.6)',
                    transformOrigin: 'top center'
                }}
                whileHover={{
                    y: -10,
                    scale: hoverProfile.hoverScale,
                    rotate: hoverProfile.hoverRotate,
                    borderColor: hoverProfile.hoverBorder,
                    boxShadow: hoverProfile.hoverShadow
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Visual Header with Background */}
                <div style={{
                    flex: 1,
                    position: 'relative',
                    background: `linear-gradient(135deg, ${schoolColors[edu.school] || 'rgba(28, 203, 188, 0.1)'}, rgba(28, 203, 188, 0.05))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background Element */}
                    <div style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: `${schoolBorderColors[edu.school] || '#1ccbbc'}`,
                        opacity: 0.1,
                        blur: '100px',
                        filter: 'blur(100px)',
                        top: '-100px',
                        right: '-100px'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                        <h3 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            margin: 0,
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: '#fff',
                            lineHeight: 1.2
                        }}>
                            {edu.degree}
                        </h3>
                    </div>
                </div>

                {/* Bottom Text Content */}
                <div style={{
                    padding: '3rem',
                    background: '#0a0a0a',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div>
                        <h4 style={{
                            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                            fontWeight: 700,
                            margin: '0 0 0.5rem 0',
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: schoolBorderColors[edu.school] || '#1ccbbc'
                        }}>
                            {edu.school}
                        </h4>
                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                            Academic Institution
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                Duration
                            </span>
                            <p style={{ fontSize: '1.2rem', color: '#fff', margin: '0.5rem 0 0 0', fontWeight: 600 }}>
                                {edu.dates}
                            </p>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                Performance
                            </span>
                            <p style={{
                                fontSize: '1.2rem',
                                color: schoolBorderColors[edu.school] || '#1ccbbc',
                                margin: '0.5rem 0 0 0',
                                fontWeight: 600
                            }}>
                                {edu.score}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Education = ({ education }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="education" style={{ background: '#050706', position: 'relative' }}>
            <div style={{ padding: '100px 5% 50px' }}>
                <h2 className="section-title" style={{ margin: 0 }}>EDUCATION</h2>
            </div>

            {/* Sticky Cards Track */}
            <div ref={containerRef} style={{ padding: '0 5%', position: 'relative', paddingBottom: '20vh' }}>
                {education.map((edu, index) => (
                    <EduCard
                        key={index}
                        index={index}
                        total={education.length}
                        edu={edu}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default Education;
