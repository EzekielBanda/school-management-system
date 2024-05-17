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
      <div className="py-8 shadow border-b mt-6"></div>
      <div className="flex flex-grow mt-0"> {/* Adjust margin to fit below the TopBar */}
        <SideBar />
        <div className="dashboard-content flex flex-col flex-grow p-4">
          <div className="overflow-auto h-full">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="students" element={<StudentForm />} />
              {/* Add more nested routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
