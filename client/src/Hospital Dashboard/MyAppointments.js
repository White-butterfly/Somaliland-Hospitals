import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MyAppointments() {
  const id = "61856e519f8b39af14ea0d06";
  const [Appoinments, setAppionments] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appoinment`)
      .then((res) => setAppionments(res.data.data))
      .catch((e) => console.log(e.response));

    // axios
    //   .get(`http://localhost:8000/api/Department/${id}`)
    //   .then((res) => setdepartment(res.data.data))
    //   .catch((e) => console.log(e.response));

    // axios
    //   .get(`http://localhost:8000/api/doctor/${id}`)
    //   .then((res) => setdoctor(res.data.data))
    //   .catch((e) => console.log(e.response));
  }, []);

  function delAppiontment(id) {
    axios
      .delete(`http://localhost:8000/api/appoinment${id}`)
      .then((res) => console.log(res));
  }
  return (
    <div>
      <div className="tbl-heading">Appiontment</div>
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>middleName</th>
              <th>lastName</th>
              <th>city</th>
              <th>region</th>
              {/* <th>department</th>
              <th>doctor</th> */}
              <th>Action</th>
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
                {/* <td>{Appoinment.doctor.department.hospital.name}</td>
                <td>{Appoinment.doctor.department.docName}</td> */}
                <td>
                  <span class="action_btn">
                    <Link to={`/EditDoctor/${Appoinment._id}`}>
                      {" "}
                      <a href="#">Edit</a>
                    </Link>
                    <a href="#" onClick={() => delAppiontment(Appoinment._id)}>
                      Remove
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyAppointments;
