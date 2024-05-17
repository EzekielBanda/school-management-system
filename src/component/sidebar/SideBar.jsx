// SideBar.js
import React, { useState, useEffect, useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FaGraduationCap, FaChevronLeft, FaChevronRight, FaHome, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaAlignCenter, FaList, FaSitemap } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const active = location.pathname;
  const navRef = useRef(null); // useRef hook to access the nav element

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SideBarLink = ({ to, children, icon }) => (
    <Link 
      to={to} 
      className={`flex items-center space-x-2 px-2 py-2 rounded-md font-medium shadow-md 
        ${active === to || (active === '/dashboard' && to === '/dashboard/') ? 
        'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
    >
      {icon}
      {isOpen && <span>{children}</span>}
    </Link>
  );

  // Scroll to last link on component mount (useEffect)
  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      const contentHeight = nav.scrollHeight;
      const containerHeight = nav.clientHeight;
      // Scroll only if content height is greater than container height
      if (contentHeight > containerHeight) {
        nav.scrollTop = contentHeight - containerHeight; // Adjust scroll position
      }
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className={`flex flex-col h-screen transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-gray-100`}>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <button onClick={toggleSidebar} className="text-blue-500 hover:text-blue-700">
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        {isOpen && <span className="text-lg font-medium">MKMCH SEC SCH</span>}
      </div>
      <nav className={`flex flex-col space-y-2 px-4 py-3 overflow-y-auto h-full`} ref={navRef}>
        <SideBarLink to="/dashboard/" icon={<FaHome className="text-xl" />}>Home</SideBarLink>
        <SideBarLink to="/dashboard/students" icon={<FaUserGraduate className="text-xl" />}>Students</SideBarLink>
        <SideBarLink to="/dashboard/teachers" icon={<FaChalkboardTeacher className="text-xl" />}>Teachers</SideBarLink>
        <SideBarLink to="/dashboard/parents" icon={<FaUsers className="text-xl" />}>Parents</SideBarLink>
        <SideBarLink to="/dashboard/subject" icon={<FaAlignCenter className="text-xl" />}>Subject</SideBarLink>
        <SideBarLink to="/dashboard/sections" icon={<FaList className="text-xl" />}>Section</SideBarLink>
        <SideBarLink to="/dashboard/class" icon={<FaSitemap className="text-xl" />}>Class</SideBarLink>
        <SideBarLink to="/dashboard/attendance" icon={<FiCheckSquare className="text-xl" />}>Attendance</SideBarLink>
        <SideBarLink to="/dashboard/reports" icon={<TbReport className="text-xl" />}>School Report</SideBarLink>
        <SideBarLink to="/dashboard/exams" icon={<FaGraduationCap className="text-xl" />}>Exams</SideBarLink>
        <SideBarLink to="/dashboard/message" icon={<IoMailOpenSharp className="text-xl" />}>Message</SideBarLink>
      </nav>  
    </div>
  );
}

export default SideBar;
