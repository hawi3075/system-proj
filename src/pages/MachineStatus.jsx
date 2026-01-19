const MachineStatus = () => (
  <div className="page" style={{ padding: '20px' }}>
    <h2>Live Machine Status</h2>
    <div className="industrial-card" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>Assembly Line A</h3>
        <p style={{ color: 'var(--text-dim)' }}>Standard Operation</p>
      </div>
      <div className="status-indicator glow-cyan"></div>
    </div>
    <div className="industrial-card" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h3>Packaging Unit B</h3>
        <p style={{ color: 'var(--text-dim)' }}>Maintenance Required</p>
      </div>
      <div className="status-indicator glow-orange"></div>
    </div>
  </div>
);

export default MachineStatus;