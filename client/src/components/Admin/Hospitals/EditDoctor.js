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
      <div
        className="boddy"
        style={{
          width: "700px",
          alignItems: "center",
          marginLeft: "340px",
          marginTop: "100px",
        }}
      >
        <div id="envelope">
          <form>
            <div className="headder">
              <h2>Edit Doctor</h2>
            </div>
            <br />
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Doctor Name"
                value={doctor.docName}
                onChange={(e) =>
                  setdoctor({ ...doctor, docName: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Expirence"
                value={doctor.expirence}
                onChange={(e) =>
                  setdoctor({ ...doctor, expirence: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Language"
                value={doctor.language}
                onChange={(e) =>
                  setdoctor({ ...doctor, language: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={doctor.email}
                onChange={(e) =>
                  setdoctor({ ...doctor, email: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Hours"
                value={doctor.hours}
                onChange={(e) => {
                  setdoctor({ ...doctor, hours: e.target.value });
                }}
              />
            </div>
            <button className="edit-input-btn" onClick={(e) => updateDoctor(e)}>
              Edit hospital
            </button>
          </form>
        </div>
      </div>
      )
    </>
  );
}

export default EditDoctor;
