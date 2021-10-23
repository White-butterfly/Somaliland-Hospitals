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

     .catch((e)=> console.log( Appoinment,"uuuuuu",e.response))
         console.log('hhh',Appoinment);
    },[]);
    
    
    return (
      
     <div className= "all">
        {Appoinment.map((Appoinments) =>(
          
            
     <div className= "cards">
          
         <div className="card" style={{width: 300, height: 400}}>

             

{/* <img src="https://th.bing.com/th/id/OIP.WCYtTJcc_qaElfnKLYV2dwAAAA?w=185&h=185&c=7&r=0&o=5&pid=1.7" class="card-img-top" alt="..."/> */}

<div className="card-body">
    <div className="wawa">
   <h5 className= "card-text ">{Appoinments.firstName} {Appoinments.middleName} {Appoinments.lastName}</h5>
   
   <h5 className= "card-text ">{Appoinments.department.hospital.name}</h5>
   <h5 className= "card-text ">{Appoinments.department.name}</h5>
  
   <h5 className= "card-text ">{Appoinments.department.doctor[0].docName}</h5>
   {/* <select className="selectt">
       <option value="">Systems</option>
       <option value="" onClick= {()=> huuhaa} />

      
   
   </select> */}
</div>
   <Link/>
 
 <a href= "#" className= "btn2">

 </a>
       </div>
       </div>
       </div>
       ))}
       </div>
    )
}

export default Line1
