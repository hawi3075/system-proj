import React from 'react';

const GlassContainer = ({ children, title }) => {
  return (
    <div className="industrial-card" style={{ 
      marginBottom: '20px', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Cyan Glow at the top */}
      <div style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', 
        background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' 
      }}></div>
      
      {title && <h3 style={{ marginTop: 0, color: 'var(--text-dim)', fontSize: '0.9rem', textTransform: 'uppercase' }}>{title}</h3>}
      {children}
    </div>
  );
};

export default GlassContainer;