import React, { useState } from 'react';
// This is a React Router v6 app
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action here, such as clearing user session
    // After logout, redirect to the home page
    navigate('/home');
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        {/* Display user profile image here */}
        <img src={user.profileImage} alt="User Profile" className="w-8 h-8 rounded-full" />
        <span className="text-white">{user.username}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => console.log('My Profile')}>
              My Profile
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => console.log('Edit Profile')}>
              Edit Profile
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
