import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import DoctorsUser from "./DoctorsUser";
var iframe = require("iframe");

function DepartmentCards() {
  const { id } = useParams();
  const [department, setdepartment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Department/${id}`)
      .then((res) => {
        setdepartment(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log("department", department, e.response));
  }, []);
  return (
    <>
      <h1 className="dept-head">Welcome our Departments</h1>
      {department.map((value) => (
        <div>
          <h1 className="hos-head"> Department of {value.name}</h1>
          <DoctorsUser id={value.id} />

          <div className="flex boxes"></div>
        </div>
      ))}
    </>
  );
}

export default DepartmentCards;
