import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', path: '/overview', icon: '📊' },
    { name: 'Machine Status', path: '/status', icon: '⚙️' },
    { name: 'Inventory Lab', path: '/inventory', icon: '📦' },
    { name: 'FRACAS Log', path: '/fracas', icon: '⚠️' },
    { name: 'Analytics', path: '/analytics', icon: '📈' },
    { name: 'Admin', path: '/admin', icon: '🛡️' },
  ];

  return (
    <div className="sidebar" style={{
      width: '260px',
      height: '100vh',
      background: 'rgba(13, 17, 23, 0.95)',
      borderRight: '1px solid var(--border-glass)',
      padding: '20px',
      position: 'fixed',
      left: 0,
      top: 0
    }}>
      <div className="logo" style={{ color: 'var(--neon-cyan)', fontWeight: 'bold', marginBottom: '40px', fontSize: '1.2rem' }}>
        INDUSTRY 4.0
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              padding: '12px 15px',
              cursor: 'pointer',
              borderRadius: '8px',
              marginBottom: '10px',
              transition: '0.3s',
              background: location.pathname === item.path ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
              color: location.pathname === item.path ? 'var(--neon-cyan)' : 'var(--text-dim)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>{item.icon}</span>
            {item.name}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;