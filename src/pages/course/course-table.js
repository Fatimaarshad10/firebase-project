import React from "react";

function CourseTable({ courses, handleEdit, handleDelete }) {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((data , index) => (
            <tr key={data.id}>
              <th scope="row">{index}</th>
              <td>{data.name}</td>
              <td>{data.code}</td>
              <td>{data.description}</td>
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

export default CourseTable;
