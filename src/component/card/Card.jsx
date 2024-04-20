import React from 'react';

const Card = ({ title, total, icon, color }) => (
  <div className={`flex flex-col items-center justify-center px-20 py-6 shadow-md rounded-md ${color}`}>
    <p className="text-2xl">{total}</p>
    <div className="flex items-center space-x-2">
      {icon}
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  </div>
);

export default Card;
