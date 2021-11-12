// import React from 'react'
import { Link } from "react-router-dom";
import React from "react";

const Homee = () => {
  function logout() {
    return localStorage.removeItem("user");
  }
  return (
    <div>
      <div className="padding">
        <input type="checkbox" id="nav-toggle" />
        <div className="adminsidebar">
          <div className="adminsidebar-brand">
            <h2>
              <span className="lab la-accusoft"></span>Somaliland-Hospitals
            </h2>
          </div>
          <div className="adminsidebar-menu">
            <ul
              style={{
                padding: "2rem",
                width: "100%",
                marginBottom: "1.7rem",
                paddingLeft: "rem",
                fontSize: "15px",
                padding: "0px",
              }}
            >
              <li>
                <Link to={"/AdminDashboard"} className="active">
                  <span className="las la-igloo"></span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <br />

              <li>
                <Link to={"/AllHospitals"}>
                  <a href="">
                    <span className="las la-users"></span>
                    <span>All Hospitals</span>
                  </a>{" "}
                </Link>
              </li>
              <br />

              <li>
                <Link to={"/AllDepartment"}>
                  <a href="">
                    <span className="las la-clipboard-list"></span>
                    <span>All Departments</span>
                  </a>
                </Link>
              </li>

              <br />

              <li>
                <Link to={"/AllDoctors"}>
                  {" "}
                  <a href="">
                    <span className="las la-shopping-bag"></span>
                    <span>All Doctors</span>
                  </a>
                </Link>
              </li>

              <br />

              <li>
                <Link to={"/AddHospital"}>
                  {" "}
                  <a href="">
                    <span className="las la-user-circle"></span>
                    <span>Add Hospital</span>
                  </a>
                </Link>
              </li>

              <br />

              <li>
                <Link to={"/AddDepartment"}>
                  <a href="">
                    <span className="las la-clipboard-list"></span>
                    <span>Add Department </span>
                  </a>
                </Link>
              </li>
              <br />

              <li>
                {" "}
                <Link to={"/AddDoctor"}>
                  <a href="">
                    <span className="las la-clipboard-list"></span>
                    <span>Add Doctor</span>
                  </a>
                </Link>{" "}
              </li>
              <button
                onClick={() => logout()}
                style={{
                  marginLeft: "70%",
                  padding: "6px",
                  borderRadius: "10px",
                }}
              >
                LogOut
              </button>
            </ul>
          </div>

          <label for="nav-toggle">
            {" "}
            <span className="las la-bars"></span>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Homee;
