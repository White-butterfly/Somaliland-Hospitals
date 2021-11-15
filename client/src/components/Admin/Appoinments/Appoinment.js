import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Appoinment = () => {
  const [id, setId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [syptoms, setsyptoms] = useState("");
  const [city, setcity] = useState("");
  const [region, setregion] = useState("");

  const [hospitall, setHospitall] = useState("");
  const [departmentt, setdepartmentt] = useState("");
  const [doctorr, setdoctorr] = useState("");
  const [department, setdepartment] = useState([]);
  const [hospitals, sethospitals] = useState([]);
  const [doctor, Setdoctor] = useState([]);
  const [AddAppoinment, setAddAppoinment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Department/`, department)
      .then((res) => setdepartment(res.data.data));

    axios
      .get(`http://localhost:8000/api/hospital`, hospitals)
      .then((res) => sethospitals(res.data.data))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/api/doctor`, doctor)
      .then((res) => Setdoctor(res.data.data));

      axios
      .get(`http://localhost:8000/api/Appoinment/${id}`)
      .then((res) => {setAddAppoinment(res.data.data)
      console.log("Appoinments : ",res.data.data)})
      .catch((error) => console.log("Appoinments: ",error)); 
  }, []);

  function AddAppoinments() {
    axios
      .post("http://localhost:8000/api/appoinment", {
        firstName,
        middleName,
        lastName,
        city,
        region,

        hospital: hospitall,
        department: departmentt,
        doctor: doctorr,
      })    .then(
        (res) => toast.success("Appoinment created successfully"),
      ) 
      .catch((e) => console.log("wax baa jidha",e.response.data.message));
  }

  return (
    <div>
      <div
        className="boddy"
        style={{
          marginLeft: "340px",
          width: "700px",
          height: "200px",
          marginBottom: "900px",
        }}
      >
        <div id="envelope">
          <form className="formm" onSubmit={AddAppoinments}>
            <div className="headder">
              <h2>Great to see you </h2>
            </div>
            <label>First Name</label>

            <input
              className="innput"
              placeholder=""
              onChange={(e) => setfirstName(e.target.value)}
              name="firstName"
              required
              type="text"
              width="100px;"
            />

            <label>Middle Name</label>
            <input
              className="innput"
              placeholder="Enter expirence of the doctor"
              onChange={(e) => setmiddleName(e.target.value)}
              name="middleName"
              required
              type="text"
            />

            <label>Last Name</label>
            <input
              name="contact"
              className="innput"
              placeholder="Enter the Hours"
              onChange={(e) => setlastName(e.target.value)}
              name="lastName"
              required
              type="text"
            />

            <label> City </label>
            <input
              name="website"
              className="innput"
              placeholder="Enter the Email"
              onChange={(e) => setcity(e.target.value)}
              name="city"
              required
              type="text"
            />

            <label>Region</label>
            <input
              name="website"
              className="innput"
              placeholder="Enter the Email"
              onChange={(e) => setregion(e.target.value)}
              name="region"
              required
              type="text"
            />

            <br />
            <br />

            <label>Hospital</label>
            <select
              onChange={(e) => {
                setHospitall(e.target.value);
              }}
              className="w3-select w3-border"
              name="option"
            >
              <option value="" disabled selected>
                {" "}
                Choose a Hospital
              </option>
              {hospitals.map((hospital) => (
                <option value={hospital.name}>{hospital.name}</option>
              ))}
            </select>

            <br />
            <br />

            <label>Department</label>
            <select
              onChange={(e) => {
                setdepartmentt(e.target.value);
              }}
              className="w3-select w3-border"
              name="option"
            >
              <option value="" disabled selected>
                {" "}
                Choose a Department{" "}
              </option>
              {department.map((departments) => (
                <option value={departments.name}>{departments.name}</option>
              ))}
            </select>
            <br />
            <br />
            <label>Doctor</label>
            <select
              onChange={(e) => {
                setdoctorr(e.target.value);
              }}
              className="w3-select w3-border"
              name="option"
            >
              <option value="" disabled selected>
                {" "}
                Choose a Doctor{" "}
              </option>
              {doctor.map((doctors) => (
                <option value={doctors.docName}>{doctors.docName}</option>
              ))}
            </select>
            <br />
            <br />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
