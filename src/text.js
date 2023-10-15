import React , {useState , useEffect} from 'react'

function Text() {
    const [text, setText] = useState("")

    useEffect(()=>{
    console.log('COMPONENT MOUNTED')
    return ()=>{
        console.log('COMPONENT UNMOUNTED')
    }
    } , [])
    // we can specify what state or props we want to triggered 

  return (
    <div>

        <input onChange={(event)=>{
            setText(event.target.value)
        }}/>
        <h1>{text}</h1>
    </div>
  )
}

export default Text