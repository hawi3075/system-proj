import React from 'react';

const StatusCard = ({ label, value, status }) => {
  // status can be 'standard', 'warning', or 'error'
  const getStatusColor = () => {
    if (status === 'standard') return 'var(--neon-cyan)';
    if (status === 'warning') return 'var(--safety-orange)';
    return 'var(--error-red)';
  };

  return (
    <div className="industrial-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <small style={{ color: 'var(--text-dim)', textTransform: 'uppercase' }}>{label}</small>
        <h2 style={{ margin: '5px 0' }}>{value}</h2>
      </div>
      <div style={{ 
        width: '12px', 
        height: '12px', 
        borderRadius: '50%', 
        background: getStatusColor(),
        boxShadow: `0 0 10px ${getStatusColor()}`
      }}></div>
    </div>
  );
};

export default StatusCard;