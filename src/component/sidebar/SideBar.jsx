import React from "react";
import {FiCheckSquare} from "react-icons/fi"
import { FaGraduationCap } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { 
    FaChevronLeft,
    FaHome, 
    FaUserGraduate, 
    FaChalkboardTeacher, 
    FaUsers,
    FaAlignCenter,
    FaList,
    FaSitemap
 } from 'react-icons/fa';

import {  } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const active = location.pathname;

  const SideBarLink = ({ to, children, icon }) => (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 px-2 py-2 rounded-md font-medium shadow-md 
      ${active === to || (active === '/' && to === '/home') ? 
      'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );

  return (
    <div className="flex flex-col bg-gray-100 w-64 h-screen">
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <FaChevronLeft className="text-blue-500 hover:text-blue-700" />
        <span className="text-lg font-medium">NKST SEC SCH</span>
      </div>
      <nav className="flex flex-col space-y-2 px-4 py-3">
        <SideBarLink to="/home" icon={<FaHome className="text-xl" />}>Home</SideBarLink>
        <SideBarLink to="/students" icon={<FaUserGraduate className="text-xl" />}>Students</SideBarLink>
        <SideBarLink to="/teachers" icon={<FaChalkboardTeacher className="text-xl" />}>Teachers</SideBarLink>
        <SideBarLink to="/parents" icon={<FaUsers className="text-xl" />}>Parents</SideBarLink>
        <SideBarLink to="/subject" icon={<FaAlignCenter className="text-xl" />}>Subject</SideBarLink>
        <SideBarLink to="/sections" icon={<FaList className="text-xl" />}>Section</SideBarLink>
        <SideBarLink to="/class" icon={<FaSitemap className="text-xl" />}>Class</SideBarLink>
        <SideBarLink to="/attendance" icon={<FiCheckSquare className="text-xl" />}>Attendance</SideBarLink>
        <SideBarLink to="/reports" icon={<TbReport className="text-xl" />}>School Report</SideBarLink>
        <SideBarLink to="/exams" icon={<FaGraduationCap className="text-xl" />}>Exams</SideBarLink>
        <SideBarLink to="/message" icon={<IoMailOpenSharp className="text-xl" />}>Parents</SideBarLink>
        {/* Add more SideBarLink components as needed */}
      </nav>
    </div>
  );
};

export default SideBar;
