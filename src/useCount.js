import { useState } from "react"
export const useCount = (initialValue = 0)=>{
    const [state, setState] = useState(initialValue)
    const increase = ()=>{
        setState ((data)=> data + 1)
    }
    const decrease = ()=>{
        setState ((data)=> data - 1)
    }
    const restart = ()=>{
        setState (0)
    }
    return {state , increase , decrease , restart}
}