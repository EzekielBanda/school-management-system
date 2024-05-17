import React from 'react'
import Card from "../card/Card";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const HomeDashboard = () => {


    const totalStudents = 100;
    const totalTeachers = 20;
    const totalParents = 80;
  return (
    <div className="flex flex-row ml-4 items-center justify-center space-x-4 card-container">
        <Card title="Total Students" total={totalStudents} icon={<FaUserGraduate className="text-3xl" />} color="bg-red" />
        <Card title="Total Teachers" total={totalTeachers} icon={<FaChalkboardTeacher className="text-3xl" />} color="bg-blue" />
        <Card title="Total Parents" total={totalParents} icon={<FaUsers className="text-3xl" />} color="bg-green" />
    </div>
  )
}

export default HomeDashboard