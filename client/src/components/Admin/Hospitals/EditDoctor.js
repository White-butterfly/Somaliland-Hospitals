import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function EditDoctor() {
  const { id } = useParams();
  const history = useHistory();
  const [doctor, setdoctor] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/doctor/${id}`).then((res) => {
      console.log(res.data.data);
      setdoctor(res.data.data);
    });
  }, []);

  function updateDoctor(e) {
    e.preventDefault();

    const formData = new FormData();

    console.log(id);
    axios
      .put(`http://localhost:8000/api/doctor/${id}`, doctor)
      .then((res) => {
        toast.success("Edited doctor");
        history.push("/AllDoctor");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <>
      <div className="edit-hospital">
        <form className="hospital-form" enctype="multipart/form-data">
          <h2 className="edit-heading">Edit Doctor</h2>
          <input
            type="text"
            className="edit-input"
            placeholder="hospital Name"
            value={doctor.docName}
            onChange={(e) => setdoctor({ ...doctor, docName: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="edit-input"
            placeholder="date"
            value={doctor.expirence}
            onChange={(e) =>
              setdoctor({ ...doctor, expirence: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            className="edit-input"
            placeholder="city"
            value={doctor.language}
            onChange={(e) => setdoctor({ ...doctor, language: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="edit-input"
            placeholder="region"
            value={doctor.email}
            onChange={(e) => setdoctor({ ...doctor, email: e.target.value })}
          />
          <br />

          <input
            type="number"
            name="logo"
            value={doctor.hours}
            className="edit-input"
            onChange={(e) => {
              setdoctor({ ...doctor, hours: e.target.value });
            }}
          />
          <br />
          <button className="edit-input-btn" onClick={(e) => updateDoctor(e)}>
            Edit hospital
          </button>
        </form>
      </div>
      )
    </>
  );
}

export default EditDoctor;
