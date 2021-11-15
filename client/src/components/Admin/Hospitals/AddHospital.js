import React from "react";

import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const AddHospital = () => {
  const history = useHistory();
  const [Addhospital, setAddhospital] = useState({
    name: "",
    describtion: "",
    date: "",
    location: "",
    address: {
      city: "",
      region: "",
    },
  });
  const onChange = (e) => {
    let data = { ...Addhospital };
    let name = e.target.name;
    let val = e.target.value;

    if (
      name == "name" ||
      name == "describtion" ||
      name == "date" ||
      name == "location"
    ) {
      data = { ...data, [name]: val };
    } else if (name == "region" || name == "city") {
      data = {
        ...data,
        address: {
          ...data.address,
          [name]: val,
        },
      };
    }

    console.log("on change ", onChange);
    setAddhospital(data);
  };

  const register = (e) => {
    e.preventDefault();
    console.log(JSON.stringify("Added a hospital", Addhospital));
    axios
      .post(`http://localhost:8000/api/hospital`, Addhospital)
      .then(
        (res) => toast.success("Hospital created successfully"),
        history.push("/AllHospitals")
      )
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div
        className="boddy"
        style={{ marginLeft: "340px", width: "700px", height: "300px" }}
      >
        <div id="envelope">
          <form className="formm">
            <div className="headder">
              <h2>Register a new Hospital</h2>
            </div>
            <br />
            <br />
            <label>Hospital Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={Addhospital.name}
              onChange={onChange}
            />

            <label>Hospital Description </label>
            <input
              type="text"
              className="form-control"
              required
              value={Addhospital.describtion}
              name="describtion"
              onChange={onChange}
            />
            <label>Hospital Location </label>
            <input
              type="text"
              className="form-control"
              required
              value={Addhospital.location}
              name="location"
              onChange={onChange}
            />

            <label>Hospital City </label>
            <input
              type="text"
              className="form-control"
              required
              name="city"
              value={Addhospital.address.city}
              onChange={onChange}
            />

            <label>Hospital Region</label>
            <input
              type="text"
              className="form-control"
              required
              name="region"
              value={Addhospital.address.region}
              onChange={onChange}
            />
            <label>Add a Date</label>
            <input
              type="date"
              className="form-control"
              required
              name="date"
              value={Addhospital.date}
              onChange={onChange}
            />

            <br />
            <br />

            <button onClick={register}> Register </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHospital;
