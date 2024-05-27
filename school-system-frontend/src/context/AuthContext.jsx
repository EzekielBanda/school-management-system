// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
      });
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
