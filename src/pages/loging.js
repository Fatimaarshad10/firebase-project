import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Loging() {
  const navigate = useNavigate()

  const withGoogle = async () => {
  const result = await signInWithPopup(auth, provider)
  console.log(result)
  navigate('/')
}
  return (
    <div>Loging
      <p>Sign in with google </p>
      <button onClick={withGoogle}>With google</button>
    </div>
  )
}

export default Loging

