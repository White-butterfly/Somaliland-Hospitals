import { Link } from "react-router-dom";
import { useEffect ,useState } from 'react';
import axios from 'axios'; 

const AllHospitals = () => {

    const [id,setId] = useState("");
    const [AllHospitals, setAllHospitals]= useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/hospital/${id}`) 
        .then((res)=> setAllHospitals(res.data.data))

     .catch((e)=> console.log(e.response))
    },[]);

    return (
        <div className="bodyy"> 
        <div className="mainn">
          <h2>helooooow</h2>
            {AllHospitals.map((hospital)=>(

           
     <div className="cardd">
     <div className="postt">
       <img className="post-image" src="https://th.bing.com/th/id/OIP.zmT8WMtoF7CcUrhQ5JRCUQHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7"/>

       
       <div className="post-content">
         <p className="post-header"> 
       <div className= "yaya">Hospital Name : {hospital.name}</div> </p>
       

         <p> City: {hospital.address.city}  </p>
         <p> Region: {hospital.address.region}</p>
          
         
       </div>
       </div>
       </div>
))}
       </div>
       </div>
   
       
    )
}

export default AllHospitals
