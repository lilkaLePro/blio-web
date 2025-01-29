import { useState } from "react"

export const useSubscriber = () => {
  
  const [values, setValues] = useState({})
  
  return {
    values
  }
}