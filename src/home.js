import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
function Home(props) {
const {username}  = useContext(AppContext)
  return (
    <div>This is the Home page and user name is {props.username}
    <h1>{username}</h1></div>
  )
}

export default Home



