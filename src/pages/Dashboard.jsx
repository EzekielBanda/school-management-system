// pages/Dashboard.js
import React, { useContext } from 'react';
import TopBar from '../component/navbar/TopBar';
import SideBar from '../component/sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from '../component/home/HomeDashboard';
import StudentForm from "../component/students/StudentForm";
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen">
      <TopBar user={user} />
      <div className="flex flex-grow mt-16">
        <SideBar />
        <div className="flex flex-col flex-grow p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="students" element={<StudentForm />} />
            {/* Add more nested routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
