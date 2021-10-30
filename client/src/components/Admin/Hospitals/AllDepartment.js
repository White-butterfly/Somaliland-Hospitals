import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AllDepartment = () => {
  const [id, setId] = useState("");
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
      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>dep-Name</th>
              <th>Action</th>
            </tr>
          </thead>
          {Alldepartment.map((department) => (
            <tbody>
              <tr>
                <td>01</td>

                <td>{department.name}</td>
                <td>
                  <span class="action_btn">
                    <a href="#">Edit</a>
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

export default AllDepartment;
