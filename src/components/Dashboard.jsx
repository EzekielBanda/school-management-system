import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUserGraduate, FaChalkboardTeacher, 
  FaUsers, FaAlignCenter, FaList, FaBook, FaClipboardList,
  FaMoneyBill, FaSchool, FaBookReader, FaSitemap } from 'react-icons/fa';

const Dashboard = () => {
  const quickLinks = [
    { name: 'Students', icon: <FaUserGraduate className="text-xl" />, path: '/main-page/students' },
    { name: 'Teachers', icon: <FaChalkboardTeacher className="text-xl" />, path: '/main-page/teachers' },
    { name: 'Parents', icon: <FaUsers className="text-xl" />, path: '/main-page/parents' },
    { name: 'Subjects', icon: <FaBook className="text-xl" />, path: '/main-page/subjects' },
    { name: 'Sections', icon: <FaAlignCenter className="text-xl" />, path: '/main-page/sections' },
    { name: 'Class', icon: <FaSchool className="text-xl" />, path: '/main-page/class' },
    { name: 'Attendance', icon: <FaClipboardList className="text-xl" />, path: '/main-page/attendance' },
    { name: 'Exams', icon: <FaGraduationCap className="text-xl" />, path: '/main-page/exam' },
    { name: 'Exams Marks', icon: <FaBookReader className="text-xl" />, path: '/main-page/marks' },
    { name: 'Payments', icon: <FaMoneyBill className="text-xl" />, path: '/main-page/payments' },
    { name: 'Accounting', icon: <FaList className="text-xl" />, path: '/main-page/accounting' },
    { name: 'Library', icon: <FaBook className="text-xl" />, path: '/main-page/library' },
    { name: 'Reports', icon: <FaSitemap className="text-xl" />, path: '/main-page/reports' },
  ];

  return (
    <div className="flex-1 p-4 sm:p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-red-500 text-white p-4 rounded">
          <h3 className="text-xl">3</h3>
          <div className="flex items-center space-x-2">
            <FaUserGraduate className="text-xl" />
            <p>Total Students</p>
          </div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h3 className="text-xl">3</h3>
          <div className="flex items-center space-x-2">
            <FaChalkboardTeacher className="text-xl" />
            <p>Total Teachers</p>
          </div>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded">
          <h3 className="text-xl">1</h3>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-xl" />
            <p>Total Parents</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Schools Management System Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {quickLinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col items-center space-y-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            {item.icon}
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
