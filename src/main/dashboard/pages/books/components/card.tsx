import { BookProps } from "@/lib/interfaces";
import { useNavigate } from "react-router"

export const Card = ({title, categories, stok, author, _id} : BookProps ) => {
  const navigate = useNavigate()
  
  return (
    <div className="p-3 border rounded-md cursor-pointer min-w-60" onClick={() => navigate(`/dashboard/books/${_id?.toString()}`) }>
      {/* <img src="/natio-negre-et-culture.png" alt="" className="h-40 w-32 m-auto" /> */}
      <p className="py-1 font-semibold"> {title} </p>
      <div className="flex justify-between">
        <p className="text-muted-foreground text-sm"> {author} </p>
        <span className="size-8 border flex items-center justify-center rounded-md text-sm"> {stok} </span>
      </div>
        <div className="flex gap-1 pt-2">
          <span className="bg-muted px-3 text-xs rounded-full"> {categories} </span>
          {/* <span className="bg-muted px-3 text-xs rounded-full">catégories</span> */}
        </div>
    </div>
  )
};