import React, { useEffect, useState, useRef } from "react";
import "../../styles/dashboard.css";
import DashboardNav from "./dashmain";
import { fetchStudents } from "../../utils/student";
import { fetchAttendances } from "../../utils/attendance";
import { fetchcourses } from '../../utils/course'
import Chart from 'chart.js/auto';
function DashNavbar() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalAttendance, setTotalAttendance] = useState(0);
  const [courseNames, setCourseNames] = useState([]);
  const [courseCodes, setCourseCodes] = useState([]);
  const [present, setPresent] = useState([]);
  const chartRefBar = useRef(null);
  const chartRefPie = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const students = await fetchStudents();
        const courses = await fetchcourses();
        const attendance = await fetchAttendances();
        setPresent(attendance)
        const courseNames = courses.map(course => course.name);
        const courseCodes = courses.map(course => course.code);
        setTotalStudents(students.length);
        setTotalCourses(courses.length);
        setTotalAttendance(attendance.length);
        setCourseNames(courseNames);
        setCourseCodes(courseCodes);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const ctx = chartRefBar.current.getContext("2d");

    // Filter the attendance data to get only those with status "Present"
    const presentCount = present?.filter(entry => entry.status === "Present").length;
    const absentCount = present?.filter(entry => entry.status === "Absent").length;
    const chartConfig = {
      type: "bar",
      data: {
        labels: ["Present", "Absent"],
        datasets: [
          {
            label: "Attendance",
            data: [presentCount, absentCount],
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const attendanceChart = new Chart(ctx, chartConfig);

    return () => {
      attendanceChart.destroy();
    };
  }, [present]);


  useEffect(() => {
    const ctxPie = chartRefPie.current.getContext("2d");

    const chartConfigPie = {
      type: "pie",
      data: {
        labels: courseNames,
        datasets: [
          {
            data: courseCodes.map(() => 1),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              // Add more colors as needed
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // Add more colors as needed
            ],
            borderWidth: 1,
          },
        ],
      },
    };

    const pieChart = new Chart(ctxPie, chartConfigPie);

    return () => {
      pieChart.destroy();
    };
  }, [courseNames, courseCodes]);

  return (
    <>
      <div class="grid-container">
        <DashboardNav />
        <main class="main-container">
          <div class="main-title">
            <p class="font-weight-bold">DASHBOARD</p>
          </div>

          <div class="main-cards">
            <div class="card">
              <div class="card-inner">
                <p class="text-primary">Total Students</p>
                <span class="material-icons-outlined text-blue">
                  calendar_month
                </span>

              </div>
              <span class="text-primary font-weight-bold">{totalStudents}</span>
            </div>

            <div class="card">
              <div class="card-inner">
                <p class="text-primary">Total Courses</p>
                <span class="material-icons-outlined text-orange">
                  calculate
                </span>

              </div>
              <span class="text-primary font-weight-bold">{totalCourses}</span>
            </div>

            <div class="card">
              <div class="card-inner">
                <p class="text-primary">Total Attendance</p>
                <span class="material-icons-outlined text-green">
                  group_add
                </span>

              </div>
              <span class="text-primary font-weight-bold">{totalAttendance}</span>
            </div>
          </div>

          <div className="charts">
            <div className="charts-card">
              <p className="chart-title">Present And Absent</p>
              <canvas ref={chartRefBar} width={400} height={50}></canvas>
            </div>

            <div className="charts-card">
              <p className="chart-title">Courses</p>
              <canvas ref={chartRefPie} width={100} height={50}></canvas>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}

export default DashNavbar;
