import { Button } from "@/components/button"
import { Input } from "@/components/input"

export const AddEditBook = () => {
  return (
    <div className="pt-20">
      <p className="text-center">Ajouter un livre</p>
      <div className="flex mt-10 flex-col justify-center max-w-md m-auto">
        <Input 
          label="Nom du livre"
          placeholder="Entrez le nom ou titre du livre"
          name="name"
        />
        <Input 
          label="auteur"
        />
        <div className="grid grid-cols-2 gap-2">
          <Input label="Stocke" type='number' />
          <Input label="isbn" placeholder="Entrez le code isbn unique du livre" />
        </div>
        <Button className="w-full"> Ajouter </Button>
      </div>
    </div>
  )
}