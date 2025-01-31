import { useEffect, useState } from 'react';
import { TableProps } from './interfaces';
import TableRow from './table-row';
import { TableCell, TData } from './table-cell';

function Table<T>({ columns, data: incomData }: TableProps<T>) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    setData([...(incomData || [])]);
  }, [incomData]);
  return (
    <table className="max-w-3xl w-full">
      <thead className="my-2">
        <tr className="bg-gray-100 font-semibold">
          {columns?.map((col, index) => (
            <TData key={col?.key || index}> {col?.title} </TData>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <TableRow key={index}>
            {columns?.map(({ render, key }, index) => (
              <TableCell key={key || index}>{render ? render(item) : key}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
