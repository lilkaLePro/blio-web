import { BASE_URL } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export const useSubcriber = (id: string) => {
  
  const useGetSubscribers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/subscriber/user/${id}`, {
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
    enabled: !!id,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  })

  return {
    allSubcribers
  }

};