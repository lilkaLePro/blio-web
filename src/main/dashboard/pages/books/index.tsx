import { PlusSquare } from "lucide-react";
import { Card } from "./components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useNavigate } from "react-router";
import { useBook } from "./book.hook";
import { useQuery } from "@tanstack/react-query";
import { BookProps } from "@/lib/interfaces";
import { userCurrentUserStore } from "@/main/auth/store";


export const Books = () => {
  const id = userCurrentUserStore.use.id();
  
  const { useGetBooks } = useBook(id);
  const { data } = useQuery({
    enabled: !!id,
    queryKey: ['books'],
    queryFn: useGetBooks,
  })
  
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-20 my-3 flex justify-between px-5">
        <div className="max-w-lg w-full">
          <Input />
        </div>
        <Button icon={<PlusSquare />} onClick={() => navigate("/dashboard/books/add")}> Ajouter un livre </Button>
      </div>
      <div className=" flex flex-wrap gap-4 px-5">
      {data?.books?.map((book: BookProps) => {
        return <div key={book?._id}> 
          <Card
            categories={book?.categories}
            title={book?.title}
            stok={book?.stok}
            author={book?.author}
            _id={book?._id}
          />
        </div>
      })}
    </div>
    </div>
  )
};
