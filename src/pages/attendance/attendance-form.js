import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; 

const AddAttendanceForm = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchStudentsAndCourses = async () => {
      try {
        // Fetch the list of students
        const studentsCollection = collection(db, 'students');
        const studentsSnapshot = await getDocs(studentsCollection);
        const studentList = studentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setStudents(studentList);

        // Fetch the list of courses
        const coursesCollection = collection(db, 'courses');
        const coursesSnapshot = await getDocs(coursesCollection);
        const courseList = coursesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(courseList);
      } catch (error) {
        console.error('Error fetching students and courses:', error);
      }
    };

    fetchStudentsAndCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new attendance record to the 'attendance' collection using Firestore
      const attendanceCollection = collection(db, 'attendance');

      await addDoc(attendanceCollection, {
        studentId: selectedStudent,
        courseId: selectedCourse,
        date,
        status,
      });

      setSelectedStudent('');
      setSelectedCourse('');
      setDate('');
      setStatus('');
    } catch (error) {
      console.error('Error adding attendance record:', error);
    }
  };

  return (
    <>
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="selectedStudent"></label>
    <select
      id="selectedStudent"
      className="form-control"
      value={selectedStudent}
      onChange={(e) => setSelectedStudent(e.target.value)}
      required
    >
      <option value="" disabled>Select a student</option>
      {students.map((student) => (
        <option key={student.id} value={student.id}>{student.name}</option>
      ))}
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="selectedCourse"></label>
    <select
      id="selectedCourse"
      className="form-control"
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
      required
    >
      <option value="" disabled>Select a course</option>
      {courses.map((course) => (
        <option key={course.id} value={course.id}>{course.name}</option>
      ))}
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="date"></label>
    <input
      type="date"
      id="date"
      className="form-control"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
      style={{margin :"none"}}
    />
  </div>

  <div className="form-group">
    <label htmlFor="status"></label>
    <select
      id="status"
      className="form-control"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      required
    >
      <option value="Present">Present</option>
      <option value="Absent">Absent</option>
    </select>
  </div>

  <button type="submit" className="btn btn-light mt-4">Submit</button>
</form>
</>
  );
};

export default AddAttendanceForm;
