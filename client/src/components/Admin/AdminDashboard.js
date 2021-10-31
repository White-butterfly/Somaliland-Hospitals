import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [hospital, sethospital] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital`)
      .then((res) => sethospital(res.data.data));

    axios
      .get(`http://localhost:8000/api/Department`)
      .then((res) => setdepartment(res.data.data));

    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => setdoctor(res.data.data));
  }, []);
  return (
    <div>
      <div className="adminmain-content">
        <div className="hheader">
          <h2>
            <label for="nav-toggle">
              {" "}
              <span className="las la-bars"></span>{" "}
            </label>
            Dashboard
          </h2>

          {/* <div className="adminsearch-wrapper">
                   <span className="las la-search"></span>
                   <input type="search"
                   placeholder= "Search here" />
               </div> */}
        </div>
        <div className="mmain">
          <div className="admincards">
            <div className="admincard-single">
              <div>
                <h1>{hospital.length}</h1>
                <span>Hospitals</span>
              </div>
              <div className="h11">
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="admincard-single">
              <div>
                <h1>{department.length}</h1>
                <span>Departments</span>
              </div>
              <div className="h11">
                <span className="las la-clipboard-list"></span>
              </div>
            </div>

            <div className="admincard-single">
              <div>
                <h1>{doctor.length}</h1>
                <span>Doctors</span>
              </div>
              <div className="h11">
                <span className="las la-shopping-bag"></span>
              </div>
            </div>
            <div className="admincard-single">
              <div>
                <h1>$6k</h1>
                <span>Payments</span>
              </div>
              <div className="h11">
                <span className="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
          <div className="recent-grid">
            <div className="adminprojects">
              <div className="admincard">
                <div className="admincard-header">
                  <h2>Recent Appoinments</h2>

                  <button>
                    See All <span className="las la-arrow-right"></span>{" "}
                  </button>
                </div>
              </div>
              <div className="admincard-body">
                <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Patient Names</td>
                        <td>Hospitals</td>
                        <td>Department</td>
                        <td>Doctors</td>
                        <td>status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>mohamed </td>
                        <td>haldoor hospital</td>
                        <td>X-Ray</td>
                        <td>dr: ciise jama</td>

                        <td>
                          <span className="status purple"> Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="admincustomers">
              <div className="admincard">
                <div className="admincard-header">
                  <h3>contact message</h3>

                  <button>
                    See All <span className="las la-arrow-right"></span>{" "}
                  </button>
                </div>
                <div className="admincard-body flex">
                  <div className="admincustomer">
                    <div className="adminInfo">
                      <img src="doc1.jfif" width="40px" height="40px" alt="" />
                      <div>
                        <h4>Dr.Faiza </h4>
                        <small>Expert</small>
                      </div>
                    </div>
                    <div className="admincontact">
                      <div>
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
