import React from "react";

interface TableRowProps<T> {
  data: T;
  children: React.ReactNode;
}

function TableRow <T>({data, children}: TableRowProps<T>) {
  return (
    <tr className="border h-10 w-full">
      {children}
    </tr>
  )
}

export default TableRow;