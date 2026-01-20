import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      width: '80px',
      height: '100vh',
      background: '#0d1117',
      borderRight: '1px solid #30363d',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
      position: 'fixed'
    }}>
      <div style={{ color: 'var(--neon-cyan)', fontSize: '24px', marginBottom: '40px' }}>🛡️</div>
      <div onClick={() => navigate('/overview')} style={{ cursor: 'pointer', marginBottom: '30px' }}>📊</div>
      <div onClick={() => navigate('/status')} style={{ cursor: 'pointer', marginBottom: '30px' }}>⚙️</div>
      <div onClick={() => navigate('/fracas')} style={{ cursor: 'pointer', marginBottom: '30px' }}>⚠️</div>
      <div onClick={() => navigate('/admin')} style={{ cursor: 'pointer', marginTop: 'auto', marginBottom: '20px' }}>⚙️</div>
    </div>
  );
};

export default Sidebar;