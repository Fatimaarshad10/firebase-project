import { useContext, useEffect, useState } from "react"

export const useToggle = (initialValue = false)=>{
const [state, setState] = useState(initialValue)

// we are already toggling inside this function
const toggle = ()=>{
    setState((data)=> !data)
}
return [state, toggle]
}

// but we can also custom variable names in our app 
// hooks are use to handle logic not ui (userInterface)
