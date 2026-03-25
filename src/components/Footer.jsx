import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = ({ contact }) => {
  return (
    <footer id="footer-data" style={{ 
      position: 'relative', 
      padding: '60px 5% 40px', 
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
        opacity: 0.5,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 0', width: '100%', gap: '3rem' }}>
          <p style={{ color: 'white', fontSize: '1.85rem', lineHeight: 1.4, textAlign: 'center', maxWidth: '800px', fontWeight: 400, margin: 0, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Every project starts with a story. I turn those stories into digital experiences that feel effortless and expressive.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            {[
              { icon: <Mail size={20} />, href: `mailto:${contact?.email}` },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: contact?.github || '#' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: contact?.linkedin || '#' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, href: '#' } 
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: '50px', height: '50px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.02)'
              }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.transform = 'none'; }}>
                {social.icon}
              </a>
            ))}
          </div>

          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            width: '100%', 
            textAlign: 'center' 
          }}>
             <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, letterSpacing: '1px' }}>
               © {new Date().getFullYear()} Vinay Kalangi. All rights reserved.
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
