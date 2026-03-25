import React from 'react';
import { motion } from 'framer-motion';
import {
    Terminal, Code, Database, GitBranch,
    BarChart, Network, Box, Lightbulb,
    Users, LineChart, Zap, Activity
} from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        theme: "#0A66C2",
        skills: [
            { name: "Python", icon: <Terminal size={24} />, color: "#3776AB" },
            { name: "C++", icon: <Code size={24} />, color: "#00599C" },
            { name: "Java", icon: <Box size={24} />, color: "#ED8B00" },
            { name: "SQL", icon: <Database size={24} />, color: "#336791" }
        ]
    },
    {
        title: "Libraries & Frameworks",
        theme: "#F2C94C",
        skills: [
            { name: "Pandas", icon: <LineChart size={24} />, color: "#150458" },
            { name: "Scikit-learn", icon: <Network size={24} />, color: "#F7931E" },
            { name: "Streamlit", icon: <BarChart size={24} />, color: "#FF4B4B" }
        ]
    },
    {
        title: "Databases & Tools",
        theme: "#1ccbbc",
        skills: [
            { name: "MySQL", icon: <Database size={24} />, color: "#4479A1" },
            { name: "Git / GitHub", icon: <GitBranch size={24} />, color: "#fafafa" }
        ]
    },
    {
        title: "Soft Skills",
        theme: "#9b51e0",
        skills: [
            { name: "Data Preprocessing", icon: <Activity size={24} />, color: "#1ccbbc" },
            { name: "Hypothesis Testing", icon: <Zap size={24} />, color: "#F2C94C" },
            { name: "Problem-Solving", icon: <Lightbulb size={24} />, color: "#f2994a" },
            { name: "Teamwork", icon: <Users size={24} />, color: "#0A66C2" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '100px 5%', background: 'radial-gradient(circle at bottom left, rgba(0, 136, 255, 0.05), #050706 70%)' }}>
            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-container {
                        overflow: hidden;
                        width: 100%;
                        position: relative;
                        flex: 1;
                        display: flex;
                        align-items: center;
                    }
                    .marquee-track {
                        display: flex;
                        gap: 1.5rem;
                        width: max-content;
                        /* The width of the track is doubled inside so it perfectly loops when reaching 50% */
                        animation: scrollLeft 20s linear infinite;
                    }
                    .marquee-container:hover .marquee-track {
                        animation-play-state: paused;
                    }
                `}
            </style>

            <h2 className="section-title" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>/ SKILLS & EXPERTISE</h2>

            {/* 4 Column Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {skillCategories.map((category, catIndex) => {
                    // Different Entrance Animations for each vertical column
                    const entranceAnimations = [
                        { y: 50, opacity: 0 },         // Slite up
                        { x: -50, opacity: 0 },        // Slide right
                        { scale: 0.8, opacity: 0 },    // Grow
                        { y: -50, opacity: 0 }         // Slide down
                    ];

                    return (
                        <motion.div
                            key={catIndex}
                            initial={entranceAnimations[catIndex % 4]}
                            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: catIndex * 0.15, type: 'spring', stiffness: 100 }}
                            style={{ minWidth: '280px', flex: 1 }}
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4 + catIndex * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                                whileHover={{
                                    y: -10,
                                    borderColor: category.theme,
                                    boxShadow: `0 20px 40px ${category.theme}25`,
                                    background: 'rgba(255,255,255,0.04)'
                                }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: `1px solid ${category.theme}40`,
                                    boxShadow: `inset 0 0 20px ${category.theme}10, 0 0 15px ${category.theme}15`,
                                    borderRadius: '24px',
                                    padding: '3rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '400px',
                                    transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                            <h3 style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-primary)',
                                textAlign: 'center',
                                marginBottom: 'auto',
                                paddingBottom: '1rem',
                                borderBottom: `2px solid ${category.theme}40`,
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                {category.title}
                            </h3>

                            {/* Scrolling Track Right to Left */}
                            <div className="marquee-container" style={{ marginTop: '3rem' }}>
                                {/* Fade Edges */}
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px', background: 'linear-gradient(to right, #0a0c0b, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40px', background: 'linear-gradient(to left, #0a0c0b, transparent)', zIndex: 2, pointerEvents: 'none' }} />

                                <div className="marquee-track">
                                    {/* Triplicate skills for infinite scrolling */}
                                    {[...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.5)',
                                                border: `1px solid ${skill.color}40`,
                                                borderRadius: '16px',
                                                padding: '1.25rem 2rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '1rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = `${skill.color}15`;
                                                e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                                                e.currentTarget.style.boxShadow = `0 10px 20px ${skill.color}30`;
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                                                e.currentTarget.style.transform = 'none';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <div style={{ color: skill.color }}>{skill.icon}</div>
                                            <span style={{ fontWeight: 600, fontSize: '1.2rem', color: '#fff' }}>
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
