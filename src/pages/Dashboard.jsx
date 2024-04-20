import React from 'react'
import TopBar from '../component/navbar/TopBar'
import SideBar from '../component/sidebar/SideBar'
import Card from '../component/card/Card' // import the Card component
import { BrowserRouter as Router } from 'react-router-dom'
import { FaUserGraduate, FaUsers, FaChalkboardTeacher} from "react-icons/fa"

const Dashboard = () => {
  // Replace these with actual data
  const totalStudents = 100;
  const totalTeachers = 20;
  const totalParents = 80;

  return (
    <>
        <TopBar />
        <div className="py-10 shadow border-b">
          
        </div>
        <Router>
          <div className="flex">
            <SideBar />
            <div className="flex flex-row ml-4 items-center justify-center space-x-4 card-container">
            <Card title="Total Students" total={totalStudents} icon={<FaUserGraduate className="text-3xl" />} color="bg-red" />
            <Card title="Total Teachers" total={totalTeachers} icon={<FaChalkboardTeacher className="text-3xl" />} color="bg-blue" />
            <Card title="Total Parents" total={totalParents} icon={<FaUsers className="text-3xl" />} color="bg-green" />
            </div>
          </div>
        </Router>
    </>
  )
}

export default Dashboard;
