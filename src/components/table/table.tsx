import { useEffect, useState } from 'react';
import { TableProps } from './interfaces';
import TableRow from './table-row';
import { TableCell } from './table-cell';

function Table<T>({ columns, data: incomData }: TableProps<T>) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    setData([...(incomData || [])]);
  }, [incomData]);
  return (
    <table className='max-w-4xl w-full border flex flex-col gap-2'>
      <thead>
        <tr className={`my-2 grid-cols-${columns.length}`}>
          {columns?.map((col, index) => {
            return (
              <>
                <td key={col?.key ? col?.key : index}> {col?.title} </td>
              </>
            );
          })}
        </tr>
      </thead>
      <tbody className='w-full'>
          { data?.map((item, index) => (
            <TableRow 
              data={item}
              key={index}
            >
              {columns?.map(({render, key}) => {
                return (
                  <>
                    <TableCell key={key}>
                      {render ? render(item) : key}
                    </TableCell>
                  </>
                )
              }) }
            </TableRow>
          )) }
      </tbody>
    </table>
  );
}

export default Table;
