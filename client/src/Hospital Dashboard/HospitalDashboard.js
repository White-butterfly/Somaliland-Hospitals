import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegSmileBeam, FaProcedures, FaBuilding } from "react-icons/fa";

function HospitalDashboard() {
  const [appiontment, setappiontment] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);
  const [review, setreview] = useState([]);
  var id = "617f1c2059fae044a0883111";

  const [Appoinments, setAppionments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appoinment`)
      .then((res) => setappiontment(res.data.data));

    axios
      .get(`http://localhost:8000/api/Department`)
      .then((res) => setdepartment(res.data.data));

    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => setdoctor(res.data.data));

    axios
      .get(`http://localhost:8000/api/review`)
      .then((res) => setreview(res.data.reviews));

    axios
      .get(`http://localhost:8000/api/appoinment`)
      .then((res) => setAppionments(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  return (
    <div>
      <div className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>

          <div className="profile-details">
            <span className="admin_name">Manager</span>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Departments</div>
                <div className="number">{department.length}</div>
              </div>
              <i
                class="fa fa-bed"
                style={{ fontSize: "40px", color: "blue" }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic"> Doctors</div>
                <div className="number">{doctor.length}</div>
              </div>
              <i
                class="fa fa-user-md"
                style={{ fontSize: "40px", color: "blue" }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic"> Appoinments</div>
                <div className="number">{appiontment.length}</div>
              </div>
              <i
                class="fa fa-book"
                style={{ fontSize: "40px", color: "blue" }}
                aria-hidden="true"
              ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic"> Reviews</div>
                <div className="number">{review.length}</div>
              </div>
              <i
                class="fa fa-commenting-o"
                style={{ fontSize: "40px", color: "blue" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div
            className="tbl-headin"
            style={{ marginLeft: "300px", fontSize: "30px", color: "gray" }}
          >
            Our Appiontments
          </div>

          <div
            class="table_responsiv"
            style={{ marginRight: "60px", paddingLeft: "20px" }}
          >
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>firstName</th>
                  <th>middleName</th>
                  <th>lastName</th>
                  <th>city</th>
                  <th>region</th>
                </tr>
              </thead>
              {Appoinments.map((Appoinment) => (
                <tbody>
                  <tr>
                    <td>01</td>

                    <td>{Appoinment.firstName}</td>
                    <td>{Appoinment.middleName}</td>
                    <td>{Appoinment.lastName}</td>
                    <td>{Appoinment.city}</td>
                    <td>{Appoinment.region}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalDashboard;
