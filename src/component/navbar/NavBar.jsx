import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-gray-800">
      <div className=" relative h-16  px-8 flex items-center justify-between">
        <div className=" text-white font-bold text-lg hover:text-blue-500" >
          <a href="/">School Management System</a>
        </div>

        <div className=" flex px-20 ">
          <div className=" text-white font-bold mr-4 hover:text-blue-500">
            <a href="/login"> Login</a>
          </div>

          <div className=" text-white font-bold hover:text-blue-500">
            <a href="/register"> Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
