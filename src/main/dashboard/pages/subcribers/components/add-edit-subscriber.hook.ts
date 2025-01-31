import { BASE_URL } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { SubscribersProps } from "../data";

export const useSubscriber = (userId?: string) => {
  
  const [values, setValues] = useState<SubscribersProps>({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    job: '',
    userId: userId,
  });

  const addSubscriber = useMutation({
    mutationKey: ['addsubscriber'],
    mutationFn: async (formData: SubscribersProps) => {
      const response = await fetch(`${BASE_URL}/subscriber/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(!response.ok) {
        setValues(values);
        
      }
      if(!response.ok) {
        throw new Error('creation failed');
      }
      const data = await response.json();
      return data;
    },
    onMutate: async () => {
      if (!userId) {
        throw new Error('User ID is required to add a subscriber');
      }
    },
  })

  return {
    values,
    addSubscriber
  }
}