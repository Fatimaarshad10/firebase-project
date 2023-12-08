import React, { useEffect, useState } from "react";
import {
  fetchCourseName,
  fetchStudentName,
} from "../../utils/attendance"; // Import your fetch functions

function AttendanceTable({ attendance, handleEdit, handleDelete }) {
  const [dataWithNames, setDataWithNames] = useState([]);

  useEffect(() => {
    const fetchDataWithNames = async () => {
      const newData = await Promise.all(
        attendance.map(async (data) => {
          const courseName = await fetchCourseName(data.courseId);
          const studentName = await fetchStudentName(data.studentId);

          return {
            ...data,
            courseName,
            studentName,
          };
        })
      );
      setDataWithNames(newData);
    };

    fetchDataWithNames();
  }, [attendance]);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Course Name</th>
            <th scope="col">Student Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataWithNames.map((data, index) => (
            <tr key={data.id}>
              <th scope="row">{index}</th>
              <td>{data.courseName}</td>
              <td>{data.studentName}</td>
              <td>{data.date}</td>
              <td>{data.status}</td>
              <td>
                <span
                  className="material-icons-outlined text-red"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(data.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  edit
                </span>
                <span
                  className="material-icons-outlined text-red"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(data.id)}
                >
                  delete_forever
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AttendanceTable;
