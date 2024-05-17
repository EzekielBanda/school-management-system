// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './component/login/Login';
import NavBar from './component/navbar/NavBar';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return isDashboard ? null : <NavBar />; // Don't show NavBar on dashboard routes
};

export default App;
