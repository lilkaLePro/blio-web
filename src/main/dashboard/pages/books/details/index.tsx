import { useLocation } from "react-router"
import { useBook } from "../book.hook"
import { BookProps } from "@/lib/interfaces";
import { useQuery } from "@tanstack/react-query";

export const BookDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[3]
  
  const { useGetBook } = useBook(id)

  const { data: bookData } = useQuery({
    enabled: location.pathname !== 'dashboard/hooks',
    queryKey: ['bookById'],
    queryFn: useGetBook,
    refetchOnWindowFocus: false,
  })

  const book: BookProps = bookData?.book
  return (
    <>
      <div className="max-w-4xl p-3 flex gap-3 w-full border rounded-md">
        <div className="h-[400px] border max-w-md w-full"></div>
        <div className="flex flex-col gap-3">
          <TextElement title={"Title"} value={book?.title} />
          <TextElement title={"Author"} value={book?.author} />
          
          <div className="h-20 border w-full rounded-sm p-1">
            <p className="text-xs font-semibold text-gray-500">Catégories</p>
            <div>
              <span className="border rounded-full px-2 text-xs bg-gray-100 text-gray-400"> {book?.categories} </span>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export const TextElement = ({title, value}: {title: string, value: string | undefined}) => {
  return (
    <div>
      <span className="text-muted-foreground">{title}</span>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  )
}