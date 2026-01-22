import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', path: '/overview', icon: '📊' },
    { name: 'Status', path: '/status', icon: '⚙️' },
    { name: 'FRACAS', path: '/fracas', icon: '⚠️' },
    { name: 'Analytics', path: '/analytics', icon: '📈' },
    { name: 'Admin', path: '/admin', icon: '🛡️' },
  ];

  return (
    <div style={{
      width: '80px',
      height: '100vh',
      background: '#0d1117',
      borderRight: '1px solid #30363d',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '30px',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000
    }}>
      {/* Brand Logo Icon */}
      <div style={{ color: '#00f2ff', fontSize: '24px', marginBottom: '50px', filter: 'drop-shadow(0 0 5px #00f2ff)' }}>
        ⚡
      </div>

      {menuItems.map((item) => (
        <div
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '12px',
            marginBottom: '20px',
            fontSize: '20px',
            transition: '0.3s',
            background: location.pathname === item.path ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
            border: location.pathname === item.path ? '1px solid rgba(0, 242, 255, 0.3)' : '1px solid transparent',
          }}
          title={item.name}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;