import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../dashboard/dashmain";
import AttendanceTable from "./attendance-table";
import AttendanceModel from "./attendance-model";
import {
  fetchAttendances,
  deleteAttendance,
  updateAttendance,
  fetchCourseName,
  fetchStudentName,
} from "../../utils/attendance";

function GetAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [attendanceId, setAttendanceId] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAttendances();
      setAttendance(data);
    };

    fetchData();
  }, [date, attendanceId]);

  const handleEdit = async (attendanceId) => {
    const data = attendance.find(
      (attendance) => attendance.id === attendanceId
    );
    setAttendanceId(attendanceId);
    setDate(data.date);
    setStatus(data.status);

    // Fetch and set courseName and studentName
    const fetchedCourseName = await fetchCourseName(data.courseId);
    const fetchedStudentName = await fetchStudentName(data.studentId);

    setCourseName(fetchedCourseName);
    setStudentName(fetchedStudentName);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateAttendance(attendanceId, {
        status: status,
        date: date,
        courseId: courseName, // Pass courseName instead of courseId
        studentId: studentName, // Pass studentName instead of studentId
      });

      setStudentName("");
      setCourseName("");
      setAttendanceId(null);
      setDate("");
      setStatus("");

      toast("Successfully updated student");
    } catch (error) {
      toast(error.message);
    }
  };
  const handleDelete = async (attendanceId) => {
    try {
      await deleteAttendance(attendanceId);
      setAttendance((prevData) =>
        prevData.filter((data) => data.id !== attendanceId)
      );
      console.log(attendance);
      toast("Successfully deleted student");
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div className="grid-container">
      <DashboardNav />
      <ToastContainer />
      <AttendanceModel
        status={status}
        date={date}
        courseName={courseName}
        studentName={studentName}
        setStatus={setStatus}
        setCourseName={setCourseName}
        setStudentName={setStudentName}
        setDate={setDate}
        handleUpdate={handleUpdate}
      />
      <main className="main-container">
        <h1>Attendance table</h1>
        <AttendanceTable
          attendance={attendance}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default GetAttendance;
