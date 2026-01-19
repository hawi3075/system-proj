const Reports = () => (
  <div className="page" style={{ padding: '20px' }}>
    <h2>Production Trends</h2>
    <div className="industrial-card">
      <p>TOTAL OUTPUT</p>
      <h2 style={{ fontSize: '2.5rem' }}>124.5k</h2>
      <p style={{ color: '#3fb950' }}>+12.4% vs last week</p>
    </div>
    <div className="industrial-card" style={{ marginTop: '20px' }}>
      <h3>Planned vs. Actual</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '150px' }}>
        {[40, 70, 90, 60, 80].map((h, i) => (
          <div key={i} style={{ height: `${h}%`, width: '30px', background: 'var(--neon-cyan)', borderRadius: '4px' }}></div>
        ))}
      </div>
    </div>
  </div>
);

export default Reports;