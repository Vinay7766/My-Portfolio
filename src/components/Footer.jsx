import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Link, Mail, Send } from 'lucide-react';

const Footer = ({ contact }) => {
  return (
    <footer id="contact" style={{
      position: 'relative',
      padding: '80px 5% 40px',
      background: 'var(--bg-color)',
      borderTop: '1px solid var(--glass-border)',
      overflow: 'hidden'
    }}>
      {/* Aluro style strong Neon Glow at the very bottom edge */}
      <div style={{
        position: 'absolute',
        marginLeft: 'auto', marginRight: 'auto',
        bottom: '-150px', left: '50%',
        transform: 'translateX(-50%)',
        width: '95%', height: '150px',
        background: 'var(--accent-blue)',
        borderRadius: '50%',
        filter: 'blur(75px)',
        opacity: 1,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', width: '100%' }}>
          <p style={{ color: 'white', fontSize: '2.85rem', lineHeight: 1.15, textAlign: 'center', maxWidth: '1100px', fontWeight: 400, margin: 0, padding: '80px 60px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Every project starts with a story. I turn those stories into digital experiences that feel effortless and expressive.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { icon: <Mail size={18} />, href: `mailto:${contact.email}` },
              { icon: <Link size={18} />, href: contact.github },
              { icon: <Globe size={18} />, href: contact.linkedin },
              { icon: <Send size={18} />, href: "#" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--glass-border)' }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
