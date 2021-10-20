import React from 'react'
import { MdCreate, MdDeleteSweep, MdAdd } from "react-icons/md";
import axios from 'axios';
import {Link} from 'react-router-dom';
const ReadHospital = ({hospital, handleEditClick}) => {
    function EditHospital(id){
        axios
        .post(`http://localhost:8000/api/hospital/${id}`) 
        .then((res)=>console.log(res.data.data));
    }
    return (
        <tr>
                {/* <td ><Link to = {`Departments/${hospital._id}`}> {hospital.name}</Link></td>  */}
                
                <Link to = {`/Departments/${hospital._id}`}><button className="aaa departtt">{hospital.name}
                <MdCreate  onClick= {(event)=> handleEditClick(event, hospital)}/> <MdDeleteSweep/>
                

                <Link to = {`/AddDepartment`}> <MdAdd/></Link>
                 </button></Link>
    </tr>
            )}
    


export default ReadHospital
