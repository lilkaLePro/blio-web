import { Button } from "@/components/button"
import { Input } from "@/components/input"

export const AddEditBook = () => {
  return (
    <div className="pt-20">
      <p className="text-center">Ajouter un livre</p>
      <div className="flex mt-16 flex-col justify-center max-w-md m-auto">
        <Input />
        <Input />
        <Input />
        <Button className="w-full"> Ajouter </Button>
      </div>
    </div>
  )
}