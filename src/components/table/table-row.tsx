import React from "react";

interface TableRowProps<T> {
  data: T;
  children: React.ReactNode;
}

function TableRow <T>({data, children}: TableRowProps<T>) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {children}
    </tr>
  )
}

export default TableRow;