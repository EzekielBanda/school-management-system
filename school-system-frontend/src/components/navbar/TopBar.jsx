// component/navbar/TopBar.js
import React from 'react';
import { FaHome } from 'react-icons/fa';
import Profile from '../profile/Profile';

const TopBar = ({ user }) => {
  return (
    <div className="fixed top-0 w-full flex justify-between
     items-center px-4 py-3 bg-blue-500 shadow-md z-10">
      <div className="flex items-center space-x-4 text-lg sm:text-xl text-white font-bold">
        <FaHome className="mr-2" />
        School Management System
      </div>
      <div>
        {user ? <Profile user={user} /> : <p className="text-white">Loading...</p>}
      </div>
    </div>
  );
};

export default TopBar;
