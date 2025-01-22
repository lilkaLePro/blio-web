import { useState } from "react"

export const useBoolean = () => {
    const [value, setValue] = useState<boolean>(false);

    const on = () => setValue(true)
    const off = () => setValue(false)
    
    const toggle = () => setValue(!value)

    return{
        value, on, off, toggle
    }
}