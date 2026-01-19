import React from 'react';

const Admin = () => {
  return (
    <div className="page" style={{ padding: '20px', paddingBottom: '100px' }}>
      <h2 style={{ marginBottom: '20px' }}>System Administration</h2>
      
      {/* Role Management Section */}
      <div className="industrial-card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Role Management</h3>
          <button className="neon-button" style={{ padding: '8px 15px', fontSize: '12px' }}>
            + New Role
          </button>
        </div>
        
        <div style={{ marginTop: '20px', borderLeft: '4px solid var(--neon-cyan)', paddingLeft: '15px' }}>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Administrator</p>
          <small style={{ color: 'var(--text-dim)' }}>Full access to system parameters and security protocols.</small>
        </div>
      </div>

      {/* Hardware Inventory & Retirement - Mandatory for Phase 6 */}
      <div className="industrial-card" style={{ border: '1px solid var(--error-red)' }}>
        <h3 style={{ color: 'var(--error-red)' }}>Hardware Decommissioning</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
          Retire legacy assets from the operational grid.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          background: 'rgba(255, 77, 77, 0.1)',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '15px'
        }}>
          <div>
            <p style={{ margin: '0', fontWeight: '500' }}>Legacy-P01 Node</p>
            <small style={{ color: 'var(--error-red)' }}>CRITICAL: DEPRECATED</small>
          </div>
          <button style={{ 
            background: 'var(--error-red)', 
            color: 'white', 
            border: 'none', 
            padding: '10px 15px', 
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Decommission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;