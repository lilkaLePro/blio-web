import { Card } from "./components/cards"

const data = [{}, {}, {}]

export const Overview = () => {
  return (
    <div>
      {data.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  )
}