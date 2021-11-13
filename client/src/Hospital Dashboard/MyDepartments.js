import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyDepartments = () => {
  const id = "617f1c2059fae044a0883111";
  const [Alldepartment, setAlldepartment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/department`)
      .then((res) => setAlldepartment(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/department/${id}`)
      .then((res) => console.log(res));
  }
  return (
    <div>
      <div className="tbl-heading">All Departments in Hospitals</div>
      <div
        class="table_responsive"
        style={{ width: "700px", marginLeft: "500px" }}
      >
        <table>
          <thead>
            <tr>
              <th>dep-Name</th>
              <th>Action</th>
            </tr>
          </thead>
          {Alldepartment.map((department) => (
            <tbody>
              <tr>
                <td>{department.name}</td>
                <td>
                  <span class="action_btn">
                    <Link to={`/EditDepartment/${department._id}`}>
                      {" "}
                      <a href="#">Edit</a>
                    </Link>
                    <a href="#" onClick={() => delHospital(department._id)}>
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

export default MyDepartments;
