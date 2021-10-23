import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
// import { useParams,} from "react-router-dom";

const AddDepartment = () => {

const [id,setId] = useState("")
const [ name, setName] = useState("");
const [ docName, setdocName] = useState("");
const [expirence, setexpirence]= useState("");
const [language, setlanguage]= useState("");
const [ email, setEmail]= useState("");
const [hours, sethours]= useState("");
const [hospitall, setHospitall]= useState("");
const [hospitals,sethospitals] = useState([])
const [department, setdepartment]= useState([]);
    useEffect(()=> { 
         axios
         .get(`http://localhost:8000/api/Department/${id}`)
         .then((res)=> setdepartment(res.data.data));

         axios
         .get(`http://localhost:8000/api/hospital`, hospitals)
         .then((res)=> sethospitals(res.data.data))
         .catch(error => console.log(error)); 

    },[]);

    function savedepartment(){

        axios
        .post('http://localhost:8000/api/Department',{ 

            name,
            doctor:[
              {  docName,
                expirence,
                language, 
                email,
                hours,}
            ],
            hospital: hospitall
        }) 

        .then((res)=> console.log(res))
        .catch((e)=> console.log(e.response))
    }
    
    return (
        <>
        <div>
            <div className="add">
            <h1> Create a New Department</h1>

            <form onSubmit={ savedepartment}>
            <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name of the Department"
            required
            onChange={(e)=>setName(e.target.value)}
            name="name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a doctor name"
            onChange= {(e)=> setdocName(e.target.value)}
            name="docName"
            required
             
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter expirence of the doctor"
            onChange= {(e)=> setexpirence(e.target.value)}
            name="expirence"
            required
            
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the languages"
            onChange= {(e)=> setlanguage(e.target.value)}
            name="language"
            required
           

          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter the Email"
            onChange= {(e)=>setEmail(e.target.value)}
            name="email"
            required
        
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Hours"
            onChange= {(e)=> sethours(e.target.value)}
            name="hours"
            required
            
          />
        </div>
        <br/>
        <br/>


<select onChange={(e)=>{setHospitall(e.target.value)}}>
  <option>Select Department</option>
    {hospitals.map((hospital)=>
    <option  value={hospital.name}>{hospital.name}</option>
    )}
    
    </select>

<br/>
<br/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>

            </div>
       
        </>
    )
}

export default AddDepartment
