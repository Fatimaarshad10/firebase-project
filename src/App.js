import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CreateStudent } from './pages/student/student-create'
import { CreateCourse } from './pages/course/course-create'
import { CreateAttendence } from './pages/attendance/attendance-create'
import DashNavbar from './pages/dashboard/dashNavbar'
import GetStudents from './pages/student/student-get'
import GetCourses from './pages/course/course-get'
import GetAttendences from './pages/attendance/attendance-get'
import Login from './pages/loging'
import Home from './pages/home'
import './styles/app.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<CreateStudent />} />
          <Route path="/course" element={<CreateCourse />} />
          <Route path="/attendence" element={<CreateAttendence />} />
          <Route path="/dashboard" element={<DashNavbar />} />
          <Route path="/all/students" element={<GetStudents />} />
          <Route path="/all/courses" element={<GetCourses />} />
          <Route path="/all/attendences" element={<GetAttendences />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App