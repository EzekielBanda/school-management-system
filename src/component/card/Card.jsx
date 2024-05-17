import React from 'react'

const Card = ({ title, total, icon, color }) => {
  return (
    <div className={`flex items-center space-x-4 p-5 rounded-lg shadow-md ${color}`}>
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="text-xl font-bold">{total}</h2>
      </div>
      <h3 className="text-lg">{title}</h3>
    </div>
  )
}

export default Card
