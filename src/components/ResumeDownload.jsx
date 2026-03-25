import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, File } from 'lucide-react';

const ResumeDownload = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const baseUrl = import.meta.env.BASE_URL;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    border: '1px solid var(--glass-border)',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            >
                <Download size={16} />
                Download Resume
            </button>

            {isOpen && (
                <div
                    className="glass-panel"
                    style={{
                        position: 'absolute',
                        top: '110%', left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', gap: '0.5rem',
                        padding: '1rem',
                        minWidth: '200px',
                        zIndex: 10
                    }}
                >
                    <a href={`${baseUrl}resume.pdf`} download style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', padding: '0.5rem', borderRadius: '8px', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                        <FileText size={18} color="var(--accent-green)" />
                        Download PDF
                    </a>
                    <a href={`${baseUrl}resume.docx`} download style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none', padding: '0.5rem', borderRadius: '8px', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                        <File size={18} color="var(--accent-blue)" />
                        Download DOCX
                    </a>
                </div>
            )}
        </div>
    );
};

export default ResumeDownload;
