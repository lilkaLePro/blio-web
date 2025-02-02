import { CookiesProvider, useCookies } from "react-cookie";
import React from "react"
import { Login } from "@/main/auth/login";
import { useAuthHook } from "@/main/auth/auth.hook";
import { useNavigate } from "react-router";

export const ProtectedRoutes = ({children}: {children: React.ReactNode}) => {
  const [cookies ] = useCookies(['BLIUSER']);
  const navigate = useNavigate();
  const { currentUserData, isCurrentUserLoading, isCurrentUserError } = useAuthHook();
  console.log(document.cookie);
  if (isCurrentUserLoading) {
    return (
      <div>LOADING...</div>
    )
  } else if (isCurrentUserError) {
    navigate('/login');
  }
  return (
    <div>
      <CookiesProvider>
        { cookies.BLIUSER && currentUserData?.user ? children : <Login />  }
      </CookiesProvider>
    </div>
  )
}