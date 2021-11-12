import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllDepartment = () => {
  const [id, setId] = useState("");
  const [Alldepartment, setAlldepartment] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/department`)
      .then((res) => setAlldepartment(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  function delDepartment(id) {
    axios
      .delete(`http://localhost:8000/api/department/${id}`)
      .then((res) => console.log(res));
  }
  return (
    <div>
      <div className="tbl-heading">All Departments in Hospitals</div>

      <div
        className="adminsearch-wrapper"
        style={{
          width: "40rem",
          marginLeft: "540px",
          marginTop: "10px",
          color: "black",
        }}
      >
        <span className="las la-search"></span>
        <input
          type="search"
          placeholder="Search here"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <div class="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>dep-Name</th>

              <th>Action</th>
            </tr>
          </thead>
          {Alldepartment.filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((department) => (
            <tbody>
              <tr>
                <td>{department._id}</td>

                <td>{department.name}</td>

                <td>
                  <span className="action_btn">
                    <Link to={`/EditDepartment/${department._id}`}> Edit </Link>

                    <a href="#" onClick={() => delDepartment(department._id)}>
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
