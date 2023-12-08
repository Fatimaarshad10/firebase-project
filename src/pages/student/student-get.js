import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../dashboard/dashmain";
import StudentTable from "./student-table";
import StudentModal from "./student-model";
import { fetchStudents, deleteStudent, updateStudent } from "../../utils/student";

function GetStudents() {
  const [students, setStudents] = useState([]);
  const [StudentId, setStudentId] = useState(null);
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const studentList = await fetchStudents();
      setStudents(studentList);
    };

    fetchData();
  }, [Name, Contact]);

  const handleEdit = (studentId) => {
    const selectedStudent = students.find(
      (student) => student.id === studentId
    );
    setStudentId(studentId);
    setName(selectedStudent.name);
    setContact(selectedStudent.contactInfo);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(StudentId, {
        name: Name,
        contactInfo: Contact,
      });

      setStudentId(null);
      setName("");
      setContact("");

      toast("Successfully updated student");
    } catch (error) {
      toast(error.message);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      await deleteStudent(studentId);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== studentId)
      );
      toast("Successfully deleted student");
    } catch (error) {
      toast(error.message);
    }
  };


  return (
    <div class="grid-container">
      <DashboardNav />
      <ToastContainer />
      <StudentModal
        Name={Name}
        Contact={Contact}
        setName={setName}
        setContact={setContact}
        handleUpdate={handleUpdate}
      />
      <main className="main-container">
        <h1>Student table</h1>
        <StudentTable
          students={students}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default GetStudents;
