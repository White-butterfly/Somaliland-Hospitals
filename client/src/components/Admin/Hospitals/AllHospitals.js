import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EditHospital from "./EditHospital";

const AllHospitals = () => {
  const [id, setId] = useState("");
  const [AllHospitals, setAllHospitals] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital/${id}`)
      .then((res) => setAllHospitals(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/hospital/${id}`)
      .then((res) => console.log(res));
  }
  return (
    <>
      <div className="tbl-heading">All Hospitals in Somaliland</div>
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Logo</th>
              <th> Hospital-Name</th>
              <th>City</th>
              <th>Region</th>
              <th>Action</th>
            </tr>
          </thead>
          {AllHospitals.map((hospital) => (
            <tbody>
              <tr>
                <td>01</td>
                <td>
                  <img
                    src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100"
                    alt=""
                  />
                </td>
                <td>{hospital.name}</td>
                <td>{hospital.address.city}</td>
                <td>{hospital.address.region}</td>
                <td>
                  <span class="action_btn">
                    <Link to={`/EditHospital/${hospital._id}`}>
                      {" "}
                      <a href="#">Edit</a>
                    </Link>
                    <a href="#" onClick={() => delHospital(hospital._id)}>
                      Remove
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllHospitals;
