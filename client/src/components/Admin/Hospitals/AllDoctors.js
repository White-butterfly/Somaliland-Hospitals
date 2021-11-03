import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const AllDoctors = () => {
  const [id, setId] = useState("");
  const [Alldoctors, setAlldoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => {setAlldoctors(res.data.data)
        console.log("doctors ",res) 
      })
      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/doctor/${id}`)
      .then((res) => console.log(res));
  }

  return (
    <div>
      <div className="tbl-heading">All Doctors in Somaliland</div>
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>doc-Name</th>
              <th>expirence</th>
              <th>language</th>
              <th>email</th>
              <th>hours</th>
              <th>Action</th>
            </tr>
          </thead>
          {Alldoctors.map((doctor) => (
            <tbody>
              <tr>
                <td>01</td>

                <td>{doctor.docName}</td>
                <td>{doctor.expirence}</td>
                <td>{doctor.language}</td>
                <td>{doctor.email}</td>
                <td>{doctor.hours}</td>
                <td>
                  <span class="action_btn">
                    <a href="#">Edit</a>
                    <a href="#" onClick={() => delHospital(doctor._id)}>
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
};

export default AllDoctors;
