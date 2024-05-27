import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from "../components/login/Login";

const Home = () => {
  const location = useLocation();
  
  // Check if the current route is "/login"
  const isLoginPage = location.pathname === "/login";
  
  return (
    <div className="flex justify-center mt-8"> {/* Add margin-top to create space */}
      {/* Render Login component only when the current route is "/login" */}
      {isLoginPage && <Login /> }
    </div>
  );
}

export default Home;
