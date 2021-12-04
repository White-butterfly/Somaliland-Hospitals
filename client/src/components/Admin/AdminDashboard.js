import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Homee from "./Homee";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const AdminDashboard = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [hospital, sethospital] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);
  const [contact, setcontact] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/contact`)
      .then((res) => {
        setcontact(res.data.data);
        console.log("Contact ", res);
      })
      .catch((e) => console.log(e.response));

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

  function delContact(id) {
    axios
      .delete(`http://localhost:8000/api/contact/${id}`)

      .then(() => {
        toast.success("Contact successfully Removed");
        history.push("/Contactt/:id");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

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
        </div>
        <div className="mmain">
          <div className="admincards">
            <div className="admincard-single">
              <div>
                <h1>{hospital.length}</h1>
                <span>Hospitals</span>
              </div>
              <div className="h11">
                <span>
                  <i
                    class="fa fa-hospital-o"
                    style={{ color: "violet" }}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <div className="admincard-single">
              <div>
                <h1>{department.length}</h1>
                <span>Departments</span>
              </div>
              <div className="h11">
                <i
                  class="fa fa-bed"
                  style={{ color: "violet" }}
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className="admincard-single">
              <div>
                <h1>{doctor.length}</h1>
                <span>Doctors</span>
              </div>
              <div className="h11">
                <span>
                  <i
                    class="fa fa-user-md"
                    style={{ color: "violet" }}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <div className="admincard-single">
              <div>
                <h1>{contact.length}</h1>
                <span>Messages</span>
              </div>
              <div className="h11">
                <span>
                  <i
                    class="fa fa-commenting-o"
                    style={{ color: "violet" }}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
          <div className="recent-grid">
            <div className="adminprojects">
              <div className="admincard">
                <div className="admincard-header">
                  <h2>Contacted People</h2>
                </div>
              </div>
              <div className="admincard-body">
                <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>User Name</td>
                        <td>Message</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    {contact.map((contacts) => (
                      <tbody>
                        <tr>
                          <td>{contacts.userName} </td>
                          <td>{contacts.message}</td>
                          <td>
                            <td>
                              <span class="action_btn">
                                <Link to={`/Contactt/${contacts._id}`}>
                                  See All
                                </Link>
                                <a
                                  href="#"
                                  onClick={() => delContact(contacts._id)}
                                >
                                  Remove
                                </a>
                              </span>
                            </td>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
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
