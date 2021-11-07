import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();
  function logout() {
    return localStorage.removeItem("user");
  }
  return (
    <div>
      <div className="sidebar-dashboard">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Haldoor</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={"/HospitalDashboard"}>
              <a href="#" className="active">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/MyDepartments"}>
              {" "}
              <a href="#">
                <i className="bx bx-box"></i>
                <span className="links_name">Departments</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/MyDoctors"}>
              {" "}
              <a href="#">
                <i className="bx bx-list-ul"></i>
                <span className="links_name">Doctors</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/AddBlog"}>
              {" "}
              <a href="#">
                <i className="bx bx-pie-chart-alt-2"></i>
                <span className="links_name">Add Blog</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/MyReviews"}>
              {" "}
              <a href="#">
                <i className="bx bx-coin-stack"></i>
                <span className="links_name">Reviews</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/MyAppointments"}>
              {" "}
              <a href="#">
                <i className="bx bx-book-alt"></i>
                <span className="links_name">Appoinments</span>
              </a>
            </Link>
          </li>

          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name" onClick={() => logout()}>
                Log out
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
