import React from 'react'
import { useCount } from '../useCount'
function Profile() {

   const {count , increase ,decrease , restart} = useCount()

  return (
    <>
    <h1>{count}</h1>
<button onClick={increase}>add</button>
<button onClick={decrease}>delete</button>
<button onClick={restart}>restart</button>


    </>
  )
}

export default Profile