import React from "react";

interface TableRowProps {
  children: React.ReactNode;
}

function TableRow ({children}: TableRowProps) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {children}
    </tr>
  )
}

export default TableRow;