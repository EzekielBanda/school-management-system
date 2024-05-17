import React from 'react'
import { Card } from "@material-tailwind/react";

const TABLE_HEAD = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const TABLE_ROWS = [
  { January: "Data1", February: "Data2", March: "Data3", April: "Data4", May: "Data5", June: "Data6", July: "Data7", August: "Data8", September: "Data9", October: "Data10", November: "Data11", December: "Data12" },
  // Add more rows as needed
];

function getColor(month) {
  // Only add a shadow for the month of January
  if (month === 'January') {
    return 'bg-red';
  } else if (month === 'May') {
    return 'bg-blue';
  } else if (month === 'August') {
    return 'bg-green';
  } else if (month === 'December') {
    return ' bg-brown';
  } else {
  // Return an empty string for other months
  return '';
  }
}

const Table = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={index}>
                {TABLE_HEAD.map((month) => (
                  <td key={month} className={`${classes} ${getColor(month)} m-4`}>
                    {/* Removed the text */}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default Table
