import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Overview from './pages/Overview';
import MachineStatus from './pages/MachineStatus';
import FracasLog from './pages/FracasLog';
import Analytics from './pages/Analytics';
import Admin from './pages/Admin';

// This helper component checks the current path to hide/show Sidebar
const Layout = ({ children, isLoggedIn }) => {
  const location = useLocation();
  // Hide sidebar on Landing (/) and Login (/login)
  const hideSidebar = location.pathname === '/' || location.pathname === '/login';

  return (
    <div style={{ display: 'flex' }}>
      {!hideSidebar && isLoggedIn && <Sidebar />}
      <div style={{ 
        flex: 1, 
        marginLeft: (!hideSidebar && isLoggedIn) ? '260px' : '0',
        transition: 'margin 0.3s ease'
      }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          
          {/* Protected Industrial Routes */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/status" element={<MachineStatus />} />
          <Route path="/fracas" element={<FracasLog />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;