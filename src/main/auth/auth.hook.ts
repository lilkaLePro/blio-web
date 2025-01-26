import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BASE_URL } from '@/lib/utils';
import { IUser } from './utils';
import { useCookies } from 'react-cookie';

export const useAuthHook = () => {
  const [cookies, setCookies] = useCookies(['BLIUSER']);

  const router = useNavigate();

  const [values, setValues] = useState<IUser>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (formData: IUser) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to connectUser');
      }
      if (response.ok) {
        setValues({ email: '', password: '' });
        router('/dashboard');
      }
      const data = await response.json();
      
      setCookies('BLIUSER', data?.sessionToken, { path: '/' });
      return data;
    },
  });

  const registerMutation = useMutation({
    mutationKey: ['register'],
    mutationFn: async (formData: IUser) => {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      if (response.ok) {
        setValues({ firstname: '', lastname: '', email: '', password: '' });
        router('/dashboard');
      }
      const data = await response.json();
      setCookies('BLIUSER', data?.token, { path: '/' });
      return data;
    },
  });

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = response.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
  const { data: currentUserData, isLoading: isCurrentUserLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchUser,
  });

  return {
    router,
    loginMutation,
    values,
    registerMutation,
    cookies,
    currentUserData,
    isCurrentUserLoading,
  };
};
