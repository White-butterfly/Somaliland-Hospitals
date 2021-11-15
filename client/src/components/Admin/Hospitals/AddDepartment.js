import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const AddDepartment = () => {
  const history = useHistory();
 const [id, setId]= useState("")
const [hospitall, setHospitall]= useState("");
const [hospitals,sethospitals] = useState([]);
const [department, setdepartment]= useState([]);
const [name, setname]= useState("");


useEffect(()=> { 
  axios
  .get(`http://localhost:8000/api/Department/${id}`)
  .then((res)=> setdepartment(res.data.data));

  axios
  .get(`http://localhost:8000/api/hospital`, hospitals)
  .then((res)=> sethospitals(res.data.data))
  .catch(error => console.log(error)); 

},[]);



function saveDepartment(){
  axios
    .post(`http://localhost:8000/api/Department`,{
      name,
      hospital: hospitall
    })
    .then(
      (res) => toast.success("Department created successfully"),
      history.push("/AllDepartment")
    ) 
    .catch((e) => console.log(e));
};
    return (
              <div className="boddy" style={{width: "700px" , alignItems: "center", marginLeft: "340px" , marginTop: "100px"}}>
        <div id="envelope" >
            <form onSubmit={ saveDepartment}>
            <div className="headder">
              <h2>Register new Department</h2>
            </div>
            <br/>
            <br/> 
            <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name of the Department"
            name="name"
              required
       
              onChange= {(e)=> setname(e.target.value)}
          />

        </div>
        <br/>
        <br/>

<select onChange={(e)=>{setHospitall(e.target.value)}}>

  <option>Select Hospital</option>
    {hospitals.map((hospital)=>
    <option  value={hospital.name}>{hospital.name}</option>
    )}
    
    </select>

<br/> 
<br/>
      
          <button type="submit" className="btn btn-primary"> Submit  </button>
       
      </form>
    </div>

            </div>

    )
    }
  
export default AddDepartment
