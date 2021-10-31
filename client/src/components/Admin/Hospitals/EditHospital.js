import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function EditHospital() {
  const { id } = useParams();
  const history = useHistory();
  const [hospital, sethospital] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/hospital/${id}`).then((res) => {
      console.log(hospital);
      sethospital(res.data.data);
    });
  }, []);
  console.log(hospital);
  function edithospital(e) {
    e.preventDefault();
    const formData = new FormData();
    for (const key in hospital) {
      if (hospital[key]) {
        formData.append(key, hospital[key]);
      } else formData.append(key, undefined);
    }
    // formData.append("name", hospital.name);
    // formData.append("logo", hospital.logo);
    // formData.append("image", hospital.image);
    // formData.append("date", hospital.date);
    // formData.append("describtion", hospital.describtion);
    // formData.append("city", hospital.city);
    // formData.append("region", hospital.region);
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
      <div className="edit-hospital">
        <form className="hospital-form" enctype="multipart/form-data">
          <h2 className="edit-heading">Edit hospital</h2>
          <input
            type="text"
            className="edit-input"
            placeholder="hospital Name"
            value={hospital.name}
            onChange={(e) => sethospital({ ...hospital, name: e.target.value })}
          />
          <br />
          <input
            type="date"
            className="edit-input"
            placeholder="date"
            value={hospital.date}
            onChange={(e) => sethospital({ ...hospital, date: e.target.value })}
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
          />{" "}
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
    </>
  );
}

export default EditHospital;
