import {Navbar} from './pages/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/loging'
import {CreatePost} from './pages/create-post/create-post'
import './app.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App