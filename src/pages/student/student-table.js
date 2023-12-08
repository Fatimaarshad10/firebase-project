import React from "react";

function StudentTable({ students, handleEdit, handleDelete }) {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
          {students.map((data , index) => (
            <tr key={data.id}>
              <th scope="row" >{index}</th>
              <td>{data.name}</td>
              <td>{data.contactInfo}</td>
              <td>
                <span
                  class="material-icons-outlined text-red"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(data.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  edit
                </span>
                <span
                  class="material-icons-outlined text-red"
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

export default StudentTable;
