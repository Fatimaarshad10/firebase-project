import React , {useState} from 'react'

function ChangeProfile(props) {
    const [newusername, setNewusername] = useState('')
  return (
<>
<input onChange={(e)=>{
setNewusername(e.target.value)
}}/>
<button onClick={()=>{props.setUsername(newusername)}}>Change Username</button>
</>
  )
}

export default ChangeProfile