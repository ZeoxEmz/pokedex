import { useState } from "react"

export const UseOrd = ()=>{
    const [ord,setOrd] = useState("")

    
    const handleOrderChange = (event)=>{
        setOrd(event.target.value)
    }

    return { ord, handleOrderChange }
}