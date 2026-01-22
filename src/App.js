import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Overview from './pages/Overview';
import MachineStatus from './pages/MachineStatus';

// This wrapper handles the logic of when to show the sidebar
const MainLayout = ({ children }) => {
  const location = useLocation();
  // Don't show sidebar on Landing or Login pages
  const showSidebar = location.pathname !== '/' && location.pathname !== '/login';

  return (
    <div style={{ display: 'flex' }}>
      {showSidebar && <Sidebar />}
      <div style={{ 
        flex: 1, 
        marginLeft: showSidebar ? '80px' : '0px', // Pushes content so Sidebar doesn't cover it
        minHeight: '100vh',
        backgroundColor: '#0b0f14'
      }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/status" element={<MachineStatus />} />
          {/* Add other routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;