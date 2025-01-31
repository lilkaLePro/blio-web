import { BASE_URL } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

export const useBook = (id?: string) => {
  const location = useLocation();
  
  const useGetBooks = async () => {
    try {
      const response = await fetch(`${BASE_URL}/books/books/${id}`, {
        method: 'GET',
      });
      const data = await response.json()
      return data
    } catch (error) {
      throw error;
    }
  };

  const useGetBook = async () => {
    try {
      const response = await fetch(`${BASE_URL}/books/${id}`, {
        method: 'GET',
      });
      const data = await response.json();

      return data;
    }catch (error) {
      throw error
    }
  }

  const { data: bookData } = useQuery({
    enabled: location.pathname !== 'dashboard/hooks',
    queryKey: ['bookById'],
    queryFn: useGetBook,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  })

  return {
    useGetBooks,
    bookData
  }
}