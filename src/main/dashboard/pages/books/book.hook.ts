import { BASE_URL } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useBook = (id?: string) => {
  
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
  };

  const useGetBookCounts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/books/counts/${id}`, {
        method: 'GET',
      });
      const data = await response.json();

      return data;
    } catch (error) {
      throw error
    }
  }
  const { data: booksCounts } = useQuery({
    enabled: !!id,
    queryKey: ['bookCount'],
    queryFn: useGetBookCounts,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  })  

  return {
    useGetBooks,
    useGetBook,
    booksCounts
  }
}