import React from 'react'
import { Link } from "react-router-dom";
import Appoinments from './Admin/Appoinments/OverviewAppoinments';
import TotalAppoinments from './Admin/Appoinments/TotalAppoinments';
import { useEffect ,useState } from 'react';
import axios from 'axios'; 

const Line1 = (props) => {
    const [id,setId] = useState("");
    const [Appoinment, setAppoinment]= useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/appoinment/${id}`)
        .then((res)=> setAppoinment(res.data.data))

     .catch((e)=> console.log( "Hello",Appoinment,e.response))
        
    },[]);
    function delAppoinment(id){
        axios
        .delete(`http://localhost:8000/api/Appoinment/${id}`)
        .then((res)=>console.log(res));
    }
    
    return (
      
     <div className= "all">
  
<div className="cardCenter hello">
{Appoinment.map((Appoinmentss) =>( 
<div className="card text-end" style={{width: "40rem"}}>
  <div className="card-body">
    <h5 className="card-title"> </h5>
    <p className="card-text">{Appoinmentss.firstName} {Appoinmentss.middleName} {Appoinmentss.lastName}</p>

    <a href="#" class="btn btn-primary" onClick= {()=>delAppoinment(Appoinmentss._id)}>Delete</a>
  </div>
</div>

 ))}
</div>
       </div>
    )
}

export default Line1
