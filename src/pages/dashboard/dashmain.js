import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";

function DashboardNav() {
  return (
    <>
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">inventory</span> Student System
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">
            close
          </span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <span class="material-icons-outlined">dashboard</span>
            <Link to="/dashboard"> Dashboard </Link>
          </li>
          <li class="sidebar-list-item">
            <span class="material-icons-outlined">support_agent</span>
            <Link to="/all/attendences"> Attendence</Link>
          </li>
          <li class="sidebar-list-item">
          <span class="material-icons-outlined">groups</span>
            <Link to="/all/students"> Student </Link>
          </li>
          <li class="sidebar-list-item">
          <span class="material-icons-outlined">menu_book</span>
            <Link to="/all/courses"> Course </Link>
          </li>
          
          <li class="sidebar-list-item">
          <button type="button" class="btn btn-light"><Link to="/">home</Link></button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default DashboardNav;
