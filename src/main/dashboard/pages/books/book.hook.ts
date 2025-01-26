import { BASE_URL } from "@/lib/utils";

export const useBook = () => {
  const useGetBooks = async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/books/books/${id}`, {
        method: 'GET',
      });
      const data = await response.json()
      return data
    } catch (error) {
      throw error;
    }
  }

  return {
    useGetBooks
  }
}