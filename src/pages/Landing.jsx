import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, #161b22 0%, #0b0f14 100%)',
      padding: '0 20px'
    }}>
      {/* Badge */}
      <div style={{ color: '#00f2ff', fontSize: '12px', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '20px' }}>
        ● SYSTEM LIVE
      </div>
      
      {/* Main Title */}
      <h1 style={{ 
        fontSize: 'clamp(2rem, 8vw, 3.5rem)', 
        fontWeight: '900', 
        margin: '0 0 20px 0', 
        lineHeight: '1.1',
        color: '#ffffff' 
      }}>
        INDUSTRY 4.0:<br/>
        <span style={{ color: '#00f2ff' }}>OPERATIONAL INTELLIGENCE</span>
      </h1>
      
      {/* Subtext */}
      <p style={{ color: '#8b949e', maxWidth: '550px', marginBottom: '40px', fontSize: '1.1rem' }}>
        Real-time analytics and autonomous process control for the modern factory floor.
      </p>

      {/* Modern Neon Button */}
      <button 
        onClick={() => navigate('/login')}
        style={{
          background: '#00f2ff',
          color: '#0b0f14',
          border: 'none',
          padding: '16px 40px',
          borderRadius: '50px',
          fontWeight: '800',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 0 25px rgba(0, 242, 255, 0.4)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        Enter Secure System
      </button>

      {/* Footer Version Info */}
      <div style={{ position: 'absolute', bottom: '20px', color: '#30363d', fontSize: '10px' }}>
        SECURITY PROTOCOL 7.2.0 | © 2026 INDUSTRIAL NEURAL SYSTEMS
      </div>
    </div>
  );
};

export default Landing;