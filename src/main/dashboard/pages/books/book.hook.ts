import { BASE_URL } from "@/lib/utils";

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
  }

  return {
    useGetBooks,
    useGetBook
  }
}