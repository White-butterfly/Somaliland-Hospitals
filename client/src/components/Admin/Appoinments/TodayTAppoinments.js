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
            <table width= '100%'>
                                <thead>
                                    <tr>
                                        <td>Patient Names</td>
                                        <td>Hospitals</td>
                                        <td>Department</td>
                                        <td>Doctors</td>
                                        <td>status</td>
                                    </tr>
                                </thead>
                                {Appoinment.map((Appoinments) =>(
<tbody>
    <tr>
        
       <Link to = {`/Line1/${Appoinments._id}`} ><td>{Appoinments.firstName}</td></Link>
       
<td>{Appoinments.department.hospital.name}</td>
        <td>{Appoinments.department.name}</td>
        <td>{Appoinments.department.doctor[0].docName}</td>
       
        
        <td>
            <span className="status purple"> Pending</span>
           
            </td>
    </tr>
    
</tbody>
))}
                            </table>

        </div>
    )
}

export default TodayTAppoinments
