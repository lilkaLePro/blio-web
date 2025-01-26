import { CookiesProvider, useCookies } from "react-cookie";
import React from "react"
import { Login } from "@/main/auth/login";

export const ProtectedRoutes = ({children}: {children: React.ReactNode}) => {
  const [cookies ] = useCookies(['BLIUSER']);
  
  return (
    <div>
      <CookiesProvider>
        { cookies.BLIUSER ? children : <Login />  }
      </CookiesProvider>
    </div>
  )
}