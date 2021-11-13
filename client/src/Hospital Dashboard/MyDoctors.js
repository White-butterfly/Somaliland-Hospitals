import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const MyDoctors = () => {
  //const [id, setId] = useState("");
  const id = "617f1c2059fae044a0883111";
  const [Alldoctors, setAlldoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => setAlldoctors(res.data.data))

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
              <th></th>
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
                <td>
                  {" "}
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </td>

                <td>{doctor.docName}</td>
                <td>{doctor.expirence}</td>
                <td>{doctor.language}</td>
                <td>{doctor.email}</td>
                <td>{doctor.hours}</td>
                <td>
                  <span class="action_btn">
                    <Link to={`/EditDoctor/${doctor._id}`}>
                      {" "}
                      <a href="#">Edit</a>
                    </Link>
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

export default MyDoctors;
