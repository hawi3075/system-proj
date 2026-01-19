import React from 'react';

const Analytics = () => {
  return (
    <div className="page-container">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ margin: '0' }}>Production Trends</h1>
        <p style={{ color: 'var(--text-dim)' }}>Industrial Operations Overview</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
        <div className="industrial-card">
          <small style={{ color: 'var(--text-dim)' }}>TOTAL OUTPUT</small>
          <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>124.5k</h2>
          <span style={{ color: '#3fb950' }}>+12.4% vs last wk</span>
        </div>
        <div className="industrial-card">
          <small style={{ color: 'var(--text-dim)' }}>OEE SCORE</small>
          <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>92.4%</h2>
          <span style={{ color: 'var(--error-red)' }}>-1.5% vs goal</span>
        </div>
      </div>

      <div className="industrial-card">
        <h3>Planned vs. Actual</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>Daily units comparison</p>
        
        {/* Simple Bar Chart Implementation */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', marginTop: '20px', padding: '0 10px' }}>
          {[
            { day: 'Mon', val: 60 }, { day: 'Tue', val: 85 }, { day: 'Wed', val: 95 },
            { day: 'Thu', val: 50 }, { day: 'Fri', val: 75 }, { day: 'Sat', val: 40 }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', width: '12%' }}>
              <div style={{ 
                background: 'var(--neon-cyan)', 
                height: `${item.val}%`, 
                borderRadius: '4px 4px 0 0',
                boxShadow: '0 0 10px rgba(0, 242, 255, 0.2)' 
              }}></div>
              <p style={{ fontSize: '10px', marginTop: '8px' }}>{item.day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;