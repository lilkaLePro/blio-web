import { useNavigate } from "react-router"

export const Card = () => {
  const navigate = useNavigate()
  return (
    <div className="p-3 border rounded-md cursor-pointer" onClick={() => navigate('/dashboard/books/cnezvgqkfe') }>
      <div className="h-52 border rounded-md bg-muted-foreground"></div>
      <p className="py-1 font-semibold"> Nation négre et culture </p>
      <div className="flex justify-between">
        <p className="text-muted-foreground text-sm">Cheikh Anta Diop</p>
        <span className="size-8 border flex items-center justify-center rounded-md text-sm">10</span>
      </div>
        <div className="flex gap-1 pt-2">
          <span className="bg-muted px-3 text-xs rounded-full">catégories</span>
          <span className="bg-muted px-3 text-xs rounded-full">catégories</span>
        </div>
    </div>
  )
};