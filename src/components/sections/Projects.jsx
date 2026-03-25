import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

const backgroundThemes = [
    ['#ce7a1d', '#8f4c0b'],
    ['#5c3f98', '#2b1a4f'],
    ['#1f6f84', '#0b3341'],
    ['#6b3a2e', '#2b140d'],
    ['#2f5f2d', '#143013']
];

const Projects = ({ projects }) => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const titleY = useTransform(scrollYProgress, [0, 1], [70, -50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 0.9], [0.45, 1, 0.6]);
    const carouselY = useTransform(scrollYProgress, [0, 1], [34, -20]);

    const total = projects.length;

    if (!total) {
        return null;
    }

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    const sideIndex = [prevIndex, activeIndex, nextIndex];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="section-padding projects-section"
            style={{ marginBottom: '100px', overflowX: 'hidden' }}
        >
            <motion.h2 className="section-title projects-title" style={{ y: titleY, opacity: titleOpacity }}>
                <span className="projects-title-main">Things</span>
                <span className="projects-title-script">I've Designed.</span>
            </motion.h2>

            <motion.div className="projects-carousel-shell" style={{ y: carouselY }}>
                <motion.button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={goPrev}
                    aria-label="Previous project"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    &lt;
                </motion.button>

                <div className="projects-carousel-viewport">
                    {sideIndex.map((index, slot) => {
                        if (slot === 1) return null;

                        const theme = backgroundThemes[index % backgroundThemes.length];
                        const cls = slot === 0 ? 'project-slide-preview-left' : 'project-slide-preview-right';

                        return (
                            <div key={`preview-${slot}-${index}`} className={`project-slide-preview ${cls}`} aria-hidden="true">
                                <div
                                    className="project-slide-backdrop"
                                    style={{
                                        background: `linear-gradient(120deg, ${theme[0]} 0%, ${theme[1]} 100%)`
                                    }}
                                />
                                <div className="project-slide-vignette" />

                                <div className="project-chip-row project-chip-row-preview">
                                    {projects[index].tech.slice(0, 1).map((tech, chipIndex) => (
                                        <span key={chipIndex} className="project-chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-monitor-wrap" aria-hidden="true">
                                    <div className="project-monitor">
                                        <div className="project-monitor-screen">
                                            <div className="project-screen-glow" />
                                            <p className="project-screen-mark">{projects[index].title.split(' ')[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <AnimatePresence mode="wait">
                        <motion.article
                            key={activeIndex}
                            className="project-slide is-active"
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -18, scale: 0.98 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedProject(projects[activeIndex])}
                        >
                            <div
                                className="project-slide-backdrop"
                                style={{
                                    background: `linear-gradient(120deg, ${backgroundThemes[activeIndex % backgroundThemes.length][0]} 0%, ${backgroundThemes[activeIndex % backgroundThemes.length][1]} 100%)`
                                }}
                            />
                            <div className="project-slide-vignette" />

                            <div className="project-chip-row">
                                {projects[activeIndex].tech.slice(0, 2).map((tech, chipIndex) => (
                                    <span key={chipIndex} className="project-chip">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-monitor-wrap" aria-hidden="true">
                                <div className="project-monitor">
                                    <div className="project-monitor-screen">
                                        <div className="project-screen-glow" />
                                        <p className="project-screen-mark">{projects[activeIndex].title.split(' ')[0]}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="project-slide-footer">
                                <h3 className="project-title">{projects[activeIndex].title}</h3>
                                <p className="project-description">{projects[activeIndex].description}</p>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                </div>

                <motion.button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={goNext}
                    aria-label="Next project"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    &gt;
                </motion.button>
            </motion.div>

            <div className="projects-dots" role="tablist" aria-label="Projects pagination">
                {projects.map((project, index) => (
                    <button
                        key={project.title}
                        className={`projects-dot ${index === activeIndex ? 'is-active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9997,
                            background: 'rgba(0, 0, 0, 0.9)',
                            backdropFilter: 'blur(12px)',
                            overflowY: 'auto'
                        }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 24, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            style={{ maxWidth: '1250px', margin: '0 auto', padding: '4rem 5% 5rem' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                    Project Detail
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.28)',
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRadius: '999px',
                                        padding: '0.5rem 1rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Close
                                </button>
                            </div>

                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.8rem)', margin: '0 0 1.1rem', lineHeight: 1.05 }}>
                                {selectedProject.title}
                            </h3>

                            <div style={{
                                borderRadius: '18px',
                                border: '1px solid rgba(255,255,255,0.18)',
                                overflow: 'hidden',
                                position: 'relative',
                                minHeight: '460px',
                                background: `linear-gradient(120deg, ${backgroundThemes[projects.findIndex((p) => p.title === selectedProject.title) % backgroundThemes.length][0]}, ${backgroundThemes[projects.findIndex((p) => p.title === selectedProject.title) % backgroundThemes.length][1]})`
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.74))'
                                }} />

                                <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', gap: '0.6rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                                    {selectedProject.tech.map((tech) => (
                                        <span key={tech} style={{
                                            padding: '0.34rem 0.78rem',
                                            background: 'rgba(0,0,0,0.28)',
                                            border: '1px solid rgba(255,255,255,0.16)',
                                            color: '#fff',
                                            borderRadius: '999px',
                                            fontSize: '0.82rem'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '46%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 'min(76%, 780px)',
                                    aspectRatio: '16 / 9',
                                    border: '12px solid #070707',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))',
                                    boxShadow: '0 10px 24px rgba(0,0,0,0.4)',
                                    display: 'grid',
                                    placeItems: 'center',
                                    zIndex: 2
                                }}>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
                                        {selectedProject.title.split(' ')[0]}
                                    </p>
                                </div>

                                <div style={{ position: 'absolute', left: '2rem', right: '2rem', bottom: '1.6rem', zIndex: 2 }}>
                                    <p style={{ margin: '0 0 0.45rem', color: '#fff', fontWeight: 700, fontSize: '1.8rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {selectedProject.title}
                                    </p>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.82)', maxWidth: '70ch' }}>
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.15rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.64)' }}>Date: {selectedProject.date}</p>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.28)',
                                        background: 'transparent',
                                        color: '#fff',
                                        borderRadius: '999px',
                                        padding: '0.6rem 1.2rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Back to Projects
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
