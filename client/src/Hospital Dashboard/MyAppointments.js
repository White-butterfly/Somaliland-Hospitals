import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function MyAppointments() {
  const history = useHistory();

  const id = "6191f51925fc20fe991f771f";
  const [Appoinments, setAppionments] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appoinment`)
      .then((res) => {
        setAppionments(res.data.data);
        console.log("Appoiments are ", res.data.data);
      })
      .catch((e) => console.log(e.response));
  }, []);

  function delAppiontment(id) {
    axios
      .delete(`http://localhost:8000/api/appoinment/${id}`)

      .then(() => {
        toast.success("Appoinment successfully deleted");
        history.push("/MyAppoinments");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <div>
      <div className="tbl-heading">Appoinments</div>
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>middleName</th>
              <th>lastName</th>
              <th>city</th>
              <th>region</th>
              <th>department</th>
              <th>doctor</th>
              <th>Action</th>
            </tr>
          </thead>
          {Appoinments.map((Appoinment) => (
            <tbody>
              <tr>
                <td>{Appoinment.firstName}</td>
                <td>{Appoinment.middleName}</td>
                <td>{Appoinment.lastName}</td>
                <td>{Appoinment.city}</td>
                <td>{Appoinment.region}</td>
                <td>{Appoinment.department.name}</td>
                <td>{Appoinment.doctor.docName}</td>
                <td>
                  <span class="action_btn">
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
