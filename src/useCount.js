import { useState } from "react"

export const useCount = (initialValue = 0)=>{
const [count , setCount] = useState(initialValue)

const increase = ()=>{
    setCount((data)=> data + 1)
}
 
const decrease = ()=>{
    setCount((data)=> data - 1)
}

const restart = ()=>{
    setCount(0)
}
return {count , increase  , decrease , restart}

}



