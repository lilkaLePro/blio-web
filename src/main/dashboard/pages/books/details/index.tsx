import { useLocation } from "react-router"
import { useBook } from "../book.hook"
import { BookProps } from "@/lib/interfaces";

export const BookDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[3]
  
  const { bookData } = useBook(id)
  const book: BookProps = bookData?.book
  return (
    <div>
      <div className="max-w-4xl p-3 flex gap-3 w-full border rounded-md">
        <div className="h-[400px] border max-w-md w-full"></div>
        <div>
          <span className="text-muted-foreground">titre</span>
          <p className="text-xl font-semibold">{book?.title}</p>
        </div>
      </div>
    </div>
  )
}