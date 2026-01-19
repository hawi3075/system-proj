import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Overview from './pages/Overview';
import FracasLog from './pages/FracasLog';
import MachineStatus from './pages/MachineStatus';
import Reports from './pages/Reports';
import Admin from './pages/Admin';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* These would eventually be protected routes */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/status" element={<MachineStatus />} />
        <Route path="/fracas" element={<FracasLog />} />
        <Route path="/analytics" element={<Reports />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;