// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './component/login/Login'; 
import NavBar from './component/navbar/NavBar'; 
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Navigation />
        <div className="flex-grow overflow-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} /> {/* Nested routes for /dashboard */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return isDashboard ? null : <NavBar />; // Don't show NavBar on dashboard routes
};

export default App;
