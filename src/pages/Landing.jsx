import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="hero-content">
        <div className="status-badge">● SYSTEM LIVE</div>
        <h1 style={{fontSize: '3.5rem', margin: '20px 0'}}>INDUSTRY 4.0:<br/><span style={{color: 'var(--neon-cyan)'}}>OPERATIONAL INTELLIGENCE</span></h1>
        <p style={{color: 'var(--text-secondary)', marginBottom: '40px'}}>Real-time analytics and autonomous process control for modern manufacturing.</p>
        <button className="neon-button" onClick={() => navigate('/login')}>
          ENTER SECURE SYSTEM
        </button>
      </div>
    </div>
  );
};

export default Landing;