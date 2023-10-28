import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Navbar from './navbar'
import Profile from './profile'


export const AppContext = createContext()
function App() {
  const [username, setUsername] = useState('fatima')
  return (
    <>
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home username={username} />} />
            <Route path='/profile' element={<Profile username={username}
              setUsername={setUsername} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>

  )
}

export default App
