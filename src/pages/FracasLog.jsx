import React from 'react';

const FracasLog = () => {
  return (
    <div className="page-container" style={{padding: '40px'}}>
      <h2 style={{display: 'flex', alignItems: 'center'}}><span style={{color: 'var(--neon-cyan)', marginRight: '10px'}}>⚙</span> FRACAS Management Log</h2>
      
      <div className="glass-panel" style={{padding: '25px', maxWidth: '600px', marginBottom: '30px'}}>
        <h3>New Failure Report</h3>
        <form style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <label>ASSET ID</label>
          <input type="text" placeholder="e.g. TURB-01" className="industrial-input" />
          
          <label>FAILURE MODE</label>
          <select className="industrial-input">
            <option>Select Mode</option>
            <option>Mechanical Wear</option>
            <option>Electrical Fault</option>
          </select>
          
          <button className="neon-button">SUBMIT REPORT</button>
        </form>
      </div>
    </div>
  );
};

export default FracasLog;