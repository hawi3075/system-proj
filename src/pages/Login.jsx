import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    // Logic for Phase 5: Implementation
    navigate('/overview'); 
  };

  return (
    <div className="page-container" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div className="industrial-card" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        {/* Fixed: CSS variables must be in strings */}
        <div style={{ color: 'var(--neon-cyan)', fontSize: '2rem', marginBottom: '10px' }}>🛡️</div>
        <h2 style={{ margin: '0' }}>Operations Portal</h2>
        <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>Industrial Management Authentication</p>
        
        <form onSubmit={handleAuth} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-dim)' }}>CORPORATE EMAIL</label>
            <input type="email" className="industrial-input" placeholder="name@company.com" required />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-dim)' }}>EMPLOYEE ID</label>
            <input type="text" className="industrial-input" placeholder="EMP-0000" required />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-dim)' }}>SECURITY KEY</label>
            <input type="password" className="industrial-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="neon-button" style={{ width: '100%', padding: '15px' }}>
            AUTHORIZE LOGIN →
          </button>
        </form>
        
        <div style={{ 
          marginTop: '20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '12px', 
          color: 'var(--text-dim)' 
        }}>
          <span style={{ cursor: 'pointer' }}>Forgot Credentials?</span>
          <span style={{ cursor: 'pointer' }}>Request Access</span>
        </div>
      </div>
    </div>
  );
};

export default Login;