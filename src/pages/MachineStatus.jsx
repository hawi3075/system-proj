import React from 'react';
import GlassContainer from '../components/GlassContainer';
import StatusCard from '../components/StatusCard';

const MachineStatus = () => {
  return (
    <div className="page-container">
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ margin: '0' }}>Machine Status Grid</h1>
        <p style={{ color: 'var(--text-dim)' }}>Live telemetry from production floor</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        <StatusCard label="CNC Milling Station" value="Active" status="standard" />
        <StatusCard label="Robotic Arm 04" value="Overheat" status="warning" />
        <StatusCard label="Conveyor Belt" value="OFFLINE" status="error" />
        <StatusCard label="Hydraulic Press" value="Active" status="standard" />
      </div>

      <div style={{ marginTop: '30px' }}>
        <GlassContainer title="Maintenance Schedule">
          <p style={{ fontSize: '14px' }}>Next Inspection: **Friday, 23rd Jan**</p>
          <div style={{ height: '4px', background: '#30363d', borderRadius: '2px', marginTop: '10px' }}>
            <div style={{ width: '70%', height: '100%', background: 'var(--neon-cyan)', borderRadius: '2px' }}></div>
          </div>
        </GlassContainer>
      </div>
    </div>
  );
};

export default MachineStatus;