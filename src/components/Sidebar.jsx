import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHome, 
  FaUserGraduate, FaChalkboardTeacher, FaUsers, 
  FaAlignCenter, FaList, FaGraduationCap, FaBook, FaClipboardList, 
  FaBus, FaEnvelope, FaMoneyBill, FaCog, FaSchool, FaBookReader } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const active = location.pathname;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/main-page", name: "Home", icon: <FaHome /> },
    { to: "/main-page/students", name: "Students", icon: <FaUserGraduate /> },
    { to: "/main-page/teachers", name: "Teachers", icon: <FaChalkboardTeacher /> },
    { to: "/main-page/parents", name: "Parents", icon: <FaUsers /> },
    { to: "/main-page/subjects", name: "Subjects", icon: <FaBook /> },
    { to: "/main-page/sections", name: "Sections", icon: <FaAlignCenter /> },
    { to: "/main-page/class", name: "Class", icon: <FaSchool /> },
    { to: "/main-page/attendance", name: "Manage Attendance", icon: <FaClipboardList /> },
    { to: "/main-page/exam", name: "Exam", icon: <FaGraduationCap /> },
    { to: "/main-page/marks", name: "Manage Marks", icon: <FaBookReader /> },
    { to: "/main-page/payments", name: "Payments", icon: <FaMoneyBill /> },
    { to: "/main-page/message", name: "Message", icon: <FaEnvelope /> },
    { to: "/main-page/accounting", name: "Accounting", icon: <FaList /> },
    { to: "/main-page/transport", name: "Transport", icon: <FaBus /> },
    { to: "/main-page/library", name: "Library", icon: <FaBook /> },
    { to: "/main-page/configuration", name: "Configuration", icon: <FaCog /> },
  ];

  return (
    <div className={`flex flex-col h-screen transition-width duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-gray-100`}>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <button onClick={toggleSidebar} className="text-blue-500 hover:text-blue-700">
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        {isOpen && <span className="text-lg font-medium">MKMCH SEC SCH</span>}
      </div>
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold"></div>
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <div className="bg-gray-800 text-white h-full overflow-y-auto">
        <ul className="h-full">
          {links.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.to} 
                className={`flex items-center mx-2 px-2 py-2 mt-2 rounded-md font-medium transition-colors duration-200
                  ${active === link.to ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-blue-200'} 
                  ${isOpen ? 'justify-start' : 'justify-center'}`}
              >
                {link.icon}
                <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'}`}>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
