const data = ["Kaly Diallo", "770171389", "Etudiant", "kaly100diallo@gmail.com"]
const datahead = ["Nom Complet", "Num", "Function", "Email"]

export const Subscribers = () => {
  return (
    <div>
      <div className="h-32 border"></div>
      <table className="max-w-4xl m-auto w-full">
        <thead>
          <tr className="border grid grid-cols-4">
            {datahead.map((data, index) => (
              <td key={index} className="px-3"> {data} </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-4 border mt-3">
            {data.map((data, index) => (
              <td key={index} className="px-3 py-2" > {data} </td>
            ))}
            {data.map((data, index) => (
              <td key={index} className="px-3 py-2" > {data} </td>
            ))}
            {data.map((data, index) => (
              <td key={index} className="px-3 py-2" > {data} </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}