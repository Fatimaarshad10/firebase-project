import React from 'react'
import {auth , provider} from '../src/config/firebase.js'
import {signInWithPopup} from 'firebase/auth'
function Login() {
    const withGoogle = async ()=>{
        const result = await signInWithPopup(auth,provider)
        console.log(result)
    }
  return (
    <div>Login
        <p>Sign in with google </p>
        <button onClick={withGoogle()}>With google </button>
    </div>
  )
}

export default Login