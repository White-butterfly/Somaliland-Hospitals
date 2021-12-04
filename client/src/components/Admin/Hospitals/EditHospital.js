import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function EditHospital() {
  const { id } = useParams();
  const history = useHistory();
  const [hospital, sethospital] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/hospital/${id}`).then((res) => {
      console.log(res.data.data);
      sethospital(res.data.data);
      setloading(false);
    });
  }, []);
  console.log(hospital);

  function edithospital(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("data", JSON.stringify(hospital));

    console.log(id);
    axios
      .put(`http://localhost:8000/api/hospital/${id}`, formData)
      .then((res) => {
        console.log(res, "hiii");
        toast.success("Edited hospital");
        history.push("/AllHospitals");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <>
      {loading === false && (
        <div
          className="boddy"
          style={{
            width: "700px",
            alignItems: "center",
            marginLeft: "400px",
            marginTop: "100px",
          }}
        >
          <div id="envelope">
            <form className="formm" style={{ width: "80%" }}>
              <div className="headder">
                <h2>Edit Hospital</h2>
              </div>
              <br />
              <br />
              <label>Hospital Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                value={hospital.name}
                onChange={(e) =>
                  sethospital({ ...hospital, name: e.target.value })
                }
              />
              <label>location map </label>
              <input
                type="text"
                className="form-control"
                value={hospital.location}
                onChange={(e) =>
                  sethospital({ ...hospital, location: e.target.value })
                }
              />

              <label>Hospital City </label>
              <input
                type="text"
                className="form-control"
                value={hospital.address.city}
                onChange={(e) =>
                  sethospital({
                    ...hospital,
                    address: { ...hospital.address, city: e.target.value },
                  })
                }
              />

              <label>Hospital Region</label>
              <input
                type="text"
                className="form-control"
                value={hospital.address.region}
                onChange={(e) =>
                  sethospital({
                    ...hospital,
                    address: { ...hospital.address, region: e.target.value },
                  })
                }
              />
              <label>Hospital Description </label>
              <input
                type="text"
                className="form-control"
                value={hospital.describtion}
                onChange={(e) =>
                  sethospital({ ...hospital, describtion: e.target.value })
                }
              />

              <input
                type="date"
                className="form-control"
                placeholder="date"
                value={hospital.date}
                onChange={(e) =>
                  sethospital({ ...hospital, date: e.target.value })
                }
              />
            </form>
            <button className="edit-input-btn" onClick={(e) => edithospital(e)}>
              Edit hospital
            </button>
          </div>
        </div>
      )}
      {/* {loading === false && (
        <div className="edit-hospital">
          <form className="hospital-form" enctype="multipart/form-data">
            <h2 className="edit-heading">Edit hospital</h2>
            <input
              type="text"
              className="edit-input"
              placeholder="hospital Name"
              value={hospital.name}
              onChange={(e) =>
                sethospital({ ...hospital, name: e.target.value })
              }
            />
            <br />
            <input
              type="date"
              className="edit-input"
              placeholder="date"
              value={hospital.date}
              onChange={(e) =>
                sethospital({ ...hospital, date: e.target.value })
              }
            />{" "}
            <br />
            <input
              type="text"
              className="edit-input"
              placeholder="city"
              value={hospital.address.city}
              onChange={(e) =>
                sethospital({
                  ...hospital,
                  address: { ...hospital.address, city: e.target.value },
                })
              }
            />
            <br />
            <input
              type="text"
              className="edit-input"
              placeholder="region"
              value={hospital.address.region}
              onChange={(e) =>
                sethospital({
                  ...hospital,
                  address: { ...hospital.address, region: e.target.value },
                })
              }
            />{" "}
            <br />
            <h4 className="edit-inputt">logo</h4>
            <input
              type="file"
              name="logo"
              className="edit-inputt"
              onChange={(e) => {
                sethospital({ ...hospital, logo: e.target.files[0] });
              }}
            />{" "}
            <br />
            <h4 className="edit-inputt">image</h4>
            <input
              type="file"
              name="image"
              className="edit-inputt"
              onChange={(e) => {
                sethospital({ ...hospital, image: e.target.files[0] });
              }}
            />{" "}
            <br />
            <textarea
              type="text"
              className="edit-inputt"
              rows="4"
              cols="28"
              placeholder="hospital Description"
              value={hospital.description}
              onChange={(e) =>
                sethospital({ ...hospital, description: e.target.value })
              }
            ></textarea>
            <button className="edit-input-btn" onClick={(e) => edithospital(e)}>
              Edit hospital
            </button>
          </form>
        </div>
      )} */}
    </>
  );
}

export default EditHospital;
