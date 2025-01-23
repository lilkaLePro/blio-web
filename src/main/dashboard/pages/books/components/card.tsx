import { BookProps } from "@/lib/interfaces";
import { useNavigate } from "react-router"

export const Card = ({title, categories, stock, author, _id} : BookProps ) => {
  const navigate = useNavigate()
  console.log(_id);
  
  return (
    <div className="p-3 border rounded-md cursor-pointer min-w-60" onClick={() => navigate(`/dashboard/books/${_id?.toString()}`) }>
      <div className="h-52 border rounded-md bg-muted-foreground"></div>
      <p className="py-1 font-semibold"> {title} </p>
      <div className="flex justify-between">
        <p className="text-muted-foreground text-sm"> {author} </p>
        <span className="size-8 border flex items-center justify-center rounded-md text-sm"> {stock} </span>
      </div>
        <div className="flex gap-1 pt-2">
          <span className="bg-muted px-3 text-xs rounded-full"> {categories} </span>
          {/* <span className="bg-muted px-3 text-xs rounded-full">catégories</span> */}
        </div>
    </div>
  )
};