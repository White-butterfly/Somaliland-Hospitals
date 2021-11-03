import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function EditDepartment() {
  const { id } = useParams();
  const history = useHistory();
  const [department, setdepartment] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/Department/${id}`).then((res) => {
      console.log(res);
      setdepartment(res.data.data);
    });
  }, []);

  function editdepartment(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/Department/${id}`, department)
      .then((res) => {
        console.log(res);
        toast.success("Edited department");
        history.push("/AllDepartment");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <>
      <div className="edit-hospital">
        <form className="hospital-form" enctype="multipart/form-data">
          <h2 className="edit-heading">Edit department</h2>
          <input
            type="text"
            className="edit-input"
            placeholder="hospital Name"
            value={department.name}
            onChange={(e) =>
              setdepartment({ ...department, name: e.target.value })
            }
          />

          <button className="edit-input-btn" onClick={(e) => editdepartment(e)}>
            Update
          </button>
        </form>
      </div>
      )
    </>
  );
}

export default EditDepartment;
