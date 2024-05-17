// component/card/Card.js
import React from 'react';

const Card = ({ title, total, icon, color }) => {
  return (
    <div className={`flex flex-col items-center p-4 rounded-lg shadow-md ${color} text-white w-64`}>
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-2xl font-bold">{total}</div>
      <div className="text-lg">{title}</div>
    </div>
  );
};

export default Card;
