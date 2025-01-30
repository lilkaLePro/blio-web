import React, { ReactNode } from "react"

export const TableCell = ({children}: {children: ReactNode}) => {
  return (
    <>
      <td> {children} </td>
    </>
  )
}