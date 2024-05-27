import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from '../components/Dashboard';
import TopBar from "../components/navbar/TopBar";
import StudentForm from "../components/students/StudentForm";
import Parent from "../components/parents/Parent";
import { Routes, Route } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <TopBar />
      <div className="">
        <div className="py-8 shadow-md border-b mt-6"></div>
      </div>
      <div className="flex flex-grow mt-0">
        <Sidebar />
        <div className="flex-grow ml-64 md:ml-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="students" element={<StudentForm />} />
            <Route path="parents" element={<Parent />} />
            {/* Add more nested routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
