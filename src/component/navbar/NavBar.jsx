import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NavBar = () => {
  return (
    <div className="bg-gray-800 fixed top-0 left-0 w-full z-50"> {/* Fixed positioning for persistence */}
      <div className="relative h-16 px-8 flex items-center justify-between">
        <div className="text-white font-bold text-lg hover:text-blue-500">
          <Link to="/">School Management System</Link>
        </div>

        <div className="flex px-20">
          <div className="text-white font-bold mr-4 hover:text-blue-500">
            <Link to="/login">Login</Link>
          </div>

          <div className="text-white font-bold hover:text-blue-500">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;