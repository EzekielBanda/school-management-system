// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main-page/*" element={<MainPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/main-page");

  return isDashboard ? null : <NavBar />; // Don't show NavBar on dashboard routes
};

export default App;