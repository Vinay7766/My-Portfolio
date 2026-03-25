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
    title: "Core Competencies & Soft Skills",
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
        <section id="skills" style={{ padding: '100px 5%', background: 'transparent' }}>
            <h2 className="section-title" style={{ marginBottom: '4rem', textAlign: 'center' }}>SKILLS & EXPERTISE</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: '1400px', margin: '0 auto' }}>
                {skillCategories.map((category, catIndex) => (
                    <motion.div 
                        key={catIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ 
                            fontSize: '1.5rem', 
                            color: 'var(--text-primary)', 
                            marginBottom: '2rem',
                            paddingBottom: '0.5rem',
                            borderBottom: `2px solid ${category.theme}40`,
                            display: 'inline-block',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            {category.title}
                        </h3>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                            gap: '1.5rem' 
                        }}>
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{
                                        y: -5,
                                        borderColor: skill.color,
                                        boxShadow: `0 10px 30px ${skill.color}33`, // 33 hex = 20% opacity
                                        background: 'rgba(255, 255, 255, 0.05)'
                                    }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '16px',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.25rem',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                >
                                    <div style={{ 
                                        color: skill.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '0.85rem',
                                        background: `${skill.color}15`, // 15 hex = ~8% opacity
                                        borderRadius: '12px'
                                    }}>
                                        {skill.icon}
                                    </div>
                                    <span style={{ 
                                        fontWeight: 600, 
                                        fontSize: '1.15rem', 
                                        color: 'rgba(255,255,255,0.9)',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
