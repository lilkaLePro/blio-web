import { BookProps } from "@/lib/interfaces"
import { BASE_URL } from "@/lib/utils"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router"

export const useAddEditBook = (userId?: string) => {
 
  const navigate = useNavigate();
  const [values, setValue] = useState<BookProps>({
    title: '',
    categories: '',
    stok: 0,
    author: '',
    isbn: '',
    userId: userId,
  })
  const addBookMutation = useMutation({
    mutationKey: ['addBook'],
    mutationFn: async (formData: BookProps) => {
      const response = await fetch(`${BASE_URL}/books/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if(!response.ok) {
        throw new Error('Failed to add a book')
      }
      if(response.ok) {
        setValue({title: '', categories: '', author: '', stok: 0});
      }

      const data = await response.json();
      return data;
    },
    onMutate: async () => {
      if (!userId) {
        throw new Error('User ID is required to add a book');
      }
    },
    onSuccess: async () => {
      navigate(-1)
    }
  })
  
  return {
    values,
    addBookMutation
  }
}