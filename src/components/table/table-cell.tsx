import { ReactNode } from "react"

export const TableCell = ({children}: {children: ReactNode}) => {
  return (
    <>
      <TData> {children} </TData>
    </>
  )
}

export const TData = ({children}: {children: ReactNode}) => {
  return (
    <>
     <td className="px-4 py-2 text-gray-700">
      {children}
     </td>
    </>
  )
}