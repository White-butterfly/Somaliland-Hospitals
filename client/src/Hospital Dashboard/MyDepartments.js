import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const MyDepartments = () => {
  const id = "6191f51925fc20fe991f771f";
  const [Alldepartment, setAlldepartment] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/department/${id}`)
      .then((res) => setAlldepartment(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  function delHospital(id) {
    axios
      .delete(`http://localhost:8000/api/department/${id}`)

      .then(() => {
        toast.success("Department successfully deleted");
        history.push("/MyDepartments");
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div>
      <div className="tbl-heading">All Departments in Hospital</div>
      <div
        class="table_responsive"
        style={{ width: "700px", marginLeft: "430px" }}
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
