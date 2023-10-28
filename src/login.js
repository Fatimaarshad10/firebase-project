import { useContext } from 'react'
import { App1 } from './App'
import Home from './home'
function Login() {
const {username}  = useContext(App1)

  return (
    <div>Login {username} 
    <Home/>
    
    </div>

  )
}

export default Login