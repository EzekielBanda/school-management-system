import React from "react"
import { FaHome } from "react-icons/fa"

const TopBar = () => {
  return (
    <div className=" fixed top-0 w-full flex justify-between items-center px-4 py-2 bg-blue-500 shadow-md">
        <div className="flex items-center space-x-4 text-xl text-white font-bold">
          <FaHome className="mr-2"/>
          School Management System
        </div>
      </div>
      
  )
}

export default TopBar
