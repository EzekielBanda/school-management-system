import React from 'react';
import Card from '../card/Card';
import { FaUserGraduate, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const HomeDashboard = () => {
  const totalStudents = 100;
  const totalTeachers = 20;
  const totalParents = 80;

  return (
    <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
      <Card 
        title="Total Students" 
        total={totalStudents} 
        icon={<FaUserGraduate className="text-3xl" />} 
        color="bg-red-500" 
      />
      <Card 
        title="Total Teachers" 
        total={totalTeachers} 
        icon={<FaChalkboardTeacher className="text-3xl" />} 
        color="bg-blue-500" 
      />
      <Card 
        title="Total Parents" 
        total={totalParents} 
        icon={<FaUsers className="text-3xl" />} 
        color="bg-green-500" 
      />
    </div>
  );
};

export default HomeDashboard;
