import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ data }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
      overflow: 'hidden',
      background: 'var(--bg-color)',
      backgroundColor: '#050706'
    }}>

      {/* Noise Grain Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.04%22/%3E%3C/svg%3E")',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Huge Background Text (Lukes Style) */}
      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '5%',
          width: '100%',
          textAlign: 'left',
          fontSize: 'clamp(3rem, 14vw, 18rem)',
          fontWeight: 400,
          lineHeight: 0.3,
          color: 'rgba(235, 240, 238, 0.96)',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '-0.04em',
          zIndex: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        Vinay
      </motion.div> */}

      {/* Right Edge Image Background (Masked) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '55%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
        }}
      >
        <img
          src="/profile.png"
          alt="Vinay"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right top'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '40%',
          background: 'linear-gradient(to bottom, transparent, #050706)'
        }} />
      </motion.div>

      <div className="section-padding" style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 3,
        alignItems: 'center',
        paddingBottom: '25vh',
      }}>

        {/* Left Column Content */}
        <div style={{ maxWidth: '750px', display: 'flex', flexDirection: 'column', gap: '3rem', paddingLeft: '2%', marginTop: '-8vh', zIndex: 10, position: 'relative' }}>

          <div style={{
            position: 'relative',
            zIndex: 10
          }}>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ color: '#fff', fontSize: '1.85rem', marginBottom: '0.25rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
            >
              Hi ! I am
            </motion.p>

            <motion.p
              key={`greeting-${data.greeting}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: 'var(--accent-green)', fontSize: '2.0rem', marginBottom: '1rem', fontWeight: 600 }}
            >
              {data.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', lineHeight: 1.2, marginBottom: '1.25rem', fontFamily: "'Inter', sans-serif", fontWeight: 700, whiteSpace: 'nowrap', position: 'relative', zIndex: 20 }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem' }}>
                <span>Data</span>
                {/* Toggling Effect for Scientist/Analyst */}
                <span style={{ color: 'var(--accent-green)', display: 'inline-flex', position: 'relative' }}>
                  <TypeAnimation
                    sequence={[
                      'Scientist', 3000,
                      'Analyst', 3000
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span>&</span>
                {/* Typewriter Effect for Software/App */}
                <span style={{ color: '#0088ff' }}>
                  <TypeAnimation
                    sequence={[
                      'Software', 2500,
                      'App', 2500
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </span>
                <span>Developer</span>
              </div>
            </motion.h1>

            <motion.p
              key={`subtitle-${data.subtitle}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontSize: '1.25rem', color: '#bbb', maxWidth: '700px', marginBottom: '2.5rem', lineHeight: 1.7 }}
            >
              {data.subtitle}
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
