// Dashboard.js
import React from 'react';
import TopBar from '../component/navbar/TopBar';
import SideBar from '../component/sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from '../component/home/HomeDashboard';
import StudentForm from "../component/students/StudentForm";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="py-10 shadow border-b"></div>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="students" element={<StudentForm />} />
            {/* Add more nested routes here */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
