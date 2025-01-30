import { BASE_URL } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useSubcriber = (id: string) => {
  
  const useGetSubscribers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/subscriber/user/${"678b9c995ff3c3775f765641"}`, {
        method: 'GET',
      });
      const data = await response.json();

      return data;
    }catch (error) {
      throw error
    }
  };

  const { data: allSubcribers } = useQuery({
    queryKey: ['getSubcribers'],
    queryFn: useGetSubscribers,
    // enabled: !!id,
  })

  return {
    allSubcribers
  }

};