import { Link } from "react-router-dom";
import {useState, useEffect}from "react";
import axios from 'axios';
import Line1 from "../../Line1";

const TodayTAppoinments = () => {

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
        <div>
                  <div className="add">
            <h1>Today's Total Appoinments</h1>
            </div>
           
         <table className= "table border shadow">
<thead className= "thread-dark "> 
    <tr> 
        <th scope= "col">#</th>
        <th scope= "col">First Name</th>
        {/* <th scope= "col">Middle Name</th>
        <th scope= "col">Last Name</th> */}
        <th scope= "col">Hospital</th>
        <th scope= "col">Department</th>
        <th scope= "col">Doctor</th>
        {/* <th scope= "col">Syptoms</th> */}
        <th>Action</th>

    </tr>
</thead>
{Appoinment.map((Appoinments) =>(
                
<tbody>
    <tr>
        <th scope = "row">1</th>
 
       <Link to = {`/Line1/${Appoinments._id}`} ><td>{Appoinments.firstName}</td></Link>
<td>{Appoinments.department.hospital.name}</td>
        <td>{Appoinments.department.name}</td>
        <td>{Appoinments.department.doctor[0].docName}</td>
        <td>{Appoinments.syptoms}</td>
    </tr>
</tbody>
))}
         </table>
        </div>
    )
}

export default TodayTAppoinments
