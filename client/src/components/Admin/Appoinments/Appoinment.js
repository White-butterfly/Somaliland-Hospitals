import React from 'react'
import { Link } from "react-router-dom";
import {useState, useEffect}from "react";
import axios from 'axios';

const Appoinment = () => {
  
    const [id,setId] = useState("");
    const [firstName, setfirstName]= useState("");
    const [middleName, setmiddleName]= useState("");
    const [lastName, setlastName]= useState("");
    const [syptoms ,setsyptoms ]= useState("");
    const [city ,setcity ]= useState("");
    const [region, setregion ]= useState("");
    
    const [hospitall, setHospitall]= useState("");
    const [departmentt, setDepartmentt]= useState("");
    const [doctorr, setdoctorr]=useState("");
    const [department, setdepartment]= useState([]);
    const [hospitals,sethospitals] = useState([]);
    const [Appoinment, setAppoinment]= useState([]);
    const [doctor, Setdoctor]=useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/appoinment/${id}`)
        .then((res)=> setAppoinment(res.data.data));
        

        axios
        .get(`http://localhost:8000/api/Department/`, department)
        .then((res)=> setdepartment(res.data.data));

        axios
        .get(`http://localhost:8000/api/hospital`, hospitals)
        .then((res)=> sethospitals(res.data.data))
        .catch(error => console.log(error)); 
        
        axios
        .get (`http://localhost:8000/api/doctor`,doctor)
        .then((res)=> Setdoctor(res.data.data));


   },[]);

   function AddAppoinment(){

        axios
        .post('http://localhost:8000/api/appoinment',{

        firstName: "",
        middleName: "",
        lastName: "", 
        syptoms: "",
        city: "",
        region: "",

        hospital: hospitall,
        department: departmentt,
        doctor:doctorr
       


    })
    .then((res)=> console.log(res))
     .catch((e)=> console.log( Appoinment,"uuuuuu",e.response))
   }

    return ( 
        <div>
            <div className="add">
            <h1>Great to see you !</h1>
            </div>
            <div className="container">
              <form onSubmit={ AddAppoinment}> 
              
                  <div className="hospital-details">

                      <div className="input-box">
                          <span className="details"> First Name</span>

                          <input 
                          type="text" 
                          placeholder="Enter your first name" 
                          name = "firstName"
                          required
                         
                          onChange={(e)=>setfirstName(e.target.value)}
                          />
                      </div>

                      <div className="input-box">
                          <span className="details"> Middle Name</span>

                          <input type="text" 
                          placeholder="Enter your middle Name" 
                          required
                          name= "middleName"
                         
                           onChange={(e)=>setmiddleName(e.target.value)}
                          />
                      </div>

                      <div className="input-box">
                          <span className="details"> Last Name</span>
                          <input type="text" 
                          placeholder="Enter Your Last name " 
                          required
                          
                          name= "lastName"
                           onChange={(e)=>setlastName(e.target.value)}
                          />
                      </div>
 
                      {/* Hospital map */}
                      <select
                      className= "selectt"
                       onChange={(e)=>{setHospitall(e.target.value)}}>
  <option>Choose Hospital</option>
    {hospitals.map((hospital)=>
    <option  value={hospital.name}>{hospital.name}</option>
    )}
    </select>
{/* Department map */}

<select 
className= "selectt" 
onChange={(e)=>{setDepartmentt(e.target.value)}}>
                      <option>Choose Depart</option>
                          {department.map((departments)=>
                              <option value= {departments.name}> {departments.name}</option>
                          )}
  </select>

  {/* doctor map */}
  
<select 
className= "selectt" 
onChange={(e)=>{setdoctorr(e.target.value)}}>
                      <option>Choose Doctor</option>
                          {doctor.map((doctors)=>
                              <option value= {doctors.name}> {doctors.name}</option>
                          )}
  </select>
    
                
                  

                      <div className="input-box">
                          <span className="details"> City</span>
                          <input type="text" 
                          placeholder="Choose City " 
                          required
                          
                          name= "city"
                           onChange={(e)=>setcity(e.target.value)}
                          />
                      </div>


                      <div className="input-box">
                          <span className="details"> Region</span>
                          <input type="text" 
                          placeholder="Choose Region" 
                          required
                          name= "region"
                         
                          onChange={(e)=>setregion(e.target.value)}
                          />
                      </div>

                  </div>

                  <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
                 {/* <button className= "button" >Appoinment</button> */}
              </form>
                
            </div>
            </div>
        
    )
}

export default Appoinment
