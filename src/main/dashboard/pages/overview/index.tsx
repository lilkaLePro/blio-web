import { Card } from "./components/cards"

const data = [{}, {}, {}]

export const Overview = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((data, index) => (
        <Card key={index} />
      ))}
    </div>
  )
}