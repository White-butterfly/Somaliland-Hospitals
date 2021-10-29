import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { MdStar } from "react-icons/md";
import DoctorsUser from "./DoctorsUser";

function DepartmentCards() {
  const { id } = useParams();
  const [department, setdepartment] = useState([]);
  const [selected, setSelected] = useState();
  const [info, setinfo] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Department/${id}`)
      .then((res) => setdepartment(res.data.data));
  });
  return (
    <>
      <h1 className="dept-head">Welcome our Departments</h1>
      {department.map((department) => (
        <div>
          <h1 className="hos-head"> Department of {department.name}</h1>
          <DoctorsUser />
          <div className="flex boxes"></div>
        </div>
      ))}
    </>
  );
}

export default DepartmentCards;
