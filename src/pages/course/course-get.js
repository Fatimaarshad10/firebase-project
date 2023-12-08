import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../dashboard/dashmain";
import CourseTable from "./course-table";
import CourseModal from "./course-model";
import {fetchcourses , deletecourse , updatecourse } from "../../utils/course";

function GetCourses() {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState(null);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchcourses();
      setCourses(data);
    };

    fetchData();
  }, [name,code , description]);

  const handleEdit = (courseId) => {
    const data = courses.find(
      (course) => course.id === courseId
    );
    setCourseId(courseId);
    setName(data.name);
    setCode(data.code);
    setDescription(data.description);

  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updatecourse(courseId, {
        name: name,
        code: code,
        description : description
      });

      setCourseId(null);
      setName("");
      setCode("");
      setDescription("");


      toast("Successfully updated course");
    } catch (error) {
      toast(error.message);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await deletecourse(courseId);
      setCourses((data) =>
        data.filter((course) => course.id !== courseId)
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
      <CourseModal
        Name={name}
        Code={code}
        Description = {description}
        setName={setName}
        setCode={setCode}
        setDescription={setDescription}
        handleUpdate={handleUpdate}
      />
      <main className="main-container">
        <h1>Course table</h1>
        <CourseTable
          courses={courses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default GetCourses;
