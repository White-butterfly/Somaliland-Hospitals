import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AddDoctor = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [docName, setdocName] = useState("");
  const [expirence, setexpirence] = useState("");
  const [language, setlanguage] = useState("");
  const [email, setEmail] = useState("");
  const [hours, sethours] = useState("");
  const [hospitall, setHospitall] = useState("");
  const [departmentt, setdepartmentt] = useState("");
  const [hospitals, sethospitals] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/department/`, department)
      .then((res) => setdepartment(res.data.data))
      .catch((error) => console.log(error));

    axios 
      .get(`http://localhost:8000/api/hospital`, hospitals)
      .then((res) => sethospitals(res.data.data))
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/api/doctor ${id}`)
      .then((res) => setdoctor(res.data.data))
      .catch((error) => console.log("Doctors: ",error)); 
  }, []);

  function savedoctor() {
    axios
      .post("http://localhost:8000/api/doctor", {
        docName,
        expirence,
        language,
        email,
        hours,
        department: departmentt,
        hospital: hospitall,
      })
      .then(
        (res) => toast.success("Doctor created successfully"),
         history.push("/AllDoctors")
      ) 
      .catch((e) => console.log(e));

  }

  return (
    <>
      <div 
        className="boddy"
        style={{ marginLeft: "340px", width: "700px", height: "300px" }}
      >
        <div id="envelope">
          <form className="formm" onSubmit={savedoctor}>
            <div className="headder">
              <h2>Register a new Doctor</h2>
            </div>
            <label>Doctor Name</label>

            <input
              className="innput"
              placeholder="Enter a doctor name"
              onChange={(e) => setdocName(e.target.value)}
              name="docName"
              required
              type="text"
              width="100px;"
            />

            <label>Expirence</label>
            <input
              className="innput"
              placeholder="Enter expirence of the doctor"
              onChange={(e) => setexpirence(e.target.value)}
              name="expirence"
              required
              type="text"
            />

            <label>Hours</label>
            <input
              name="contact"
              className="innput"
              placeholder="Enter the Hours"
              onChange={(e) => sethours(e.target.value)}
              name="hours"
              required
              type="text"
            />

            <label>Email</label>
            <input
              name="website"
              className="innput"
              placeholder="Enter the Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              type="text"
            />

            <label>Language</label>
            <input
              name="website"
              className="innput"
              placeholder="Enter the Email"
              onChange={(e) => setlanguage(e.target.value)}
              name="language"
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

            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;

{
  /* <label>Language</label>
            <select  onChange= {(e)=> setlanguage(e.target.value)}
            className="w3-select w3-border" 
            name="option">
              <option value="" disabled selected>
                Choose a language
              </option>
              <option value="1">Somali</option>
              <option value="2">Arabic</option>
              <option value="3">English</option>
            </select> */
}
