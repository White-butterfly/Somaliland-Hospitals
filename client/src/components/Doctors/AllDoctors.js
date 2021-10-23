import React from 'react'
import { Link } from "react-router-dom";
import { useEffect ,useState } from 'react';
import axios from 'axios';
const AllDoctors = () => {

    const [id,setId] = useState("");
    const [Doctors, setDoctors]= useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/doctor/${id}`)
        .then((res)=> setDoctors(res.data.data))

     .catch((e)=> console.log( Doctors,e.response))
    },[]);


    return (
        <>
<div className="bodyy">
           <div className="mainn">
               {Doctors.map((doctor)=>(

              
        <div className="cardd">
        <div className="postt">
          <img className="post-image" src="https://th.bing.com/th/id/OIP.zmT8WMtoF7CcUrhQ5JRCUQHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7"/>

          
          <div className="post-content">
            <p className="post-header"> 
          <div className= "yaya">Doctor Name : {doctor.docName}</div> </p>
          

            <p> experience: {doctor.expirence}  </p>
            <p> Works in: {doctor.department.hospital.name}</p>
             <p>Specialist in: {doctor.department.name}</p>
                <p >Speaks: {doctor.language}</p>
               <p>Email: {doctor.email}</p>
           <p>Hours of working:{doctor. hours}</p>
            
          </div>
          </div>
          </div>
 ))}
          </div>
          

          </div>
          <h1 style= {{alignItems: 'center'}}> Haldoor Doctors </h1>
        
               {Doctors.map((doctor)=>(
<div className="hh">
    if (doctor) {
        
    }
</div>
          ))}
          
      </>
          
    )
}

export default AllDoctors
