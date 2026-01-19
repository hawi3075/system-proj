import React from 'react';

const Overview = () => (
  <div className="page" style={{ padding: '20px', paddingBottom: '100px' }}>
    <header><h1>System Overview</h1></header>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div className="industrial-card">
        <p>OEE (Effectiveness)</p>
        <h2 style={{ color: 'var(--neon-cyan)' }}>84.5%</h2>
        <small style={{ color: '#3fb950' }}>↑ +2.4%</small>
      </div>
      <div className="industrial-card">
        <p>Downtime</p>
        <h2 style={{ color: 'var(--safety-orange)' }}>12m</h2>
        <small style={{ color: 'var(--error-red)' }}>↓ -5.1%</small>
      </div>
    </div>
    <div className="industrial-card" style={{ marginTop: '20px', height: '200px' }}>
      <h3>System Health Trends</h3>
      <div style={{ borderBottom: '2px dashed #30363d', height: '100px', position: 'relative' }}>
         {/* Simple CSS-based trend line representation */}
         <div style={{ position: 'absolute', bottom: '20px', width: '100%', height: '2px', background: 'var(--neon-cyan)' }}></div>
      </div>
    </div>
  </div>
);

export default Overview;