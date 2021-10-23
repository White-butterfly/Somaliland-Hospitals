import React from 'react'
import DeleteHospital from './DeleteHospital';
import { MdCreate, MdDeleteSweep, MdAdd } from "react-icons/md";
import axios from 'axios';
import {Link} from 'react-router-dom';

import { useEffect ,useState } from 'react';

const ReadHospital = ({hospital, handleEditClick}) => {

    const [deleteHos, setdeleteHos]= useState([]);

    useEffect(()=> {
        axios
        .get("http://localhost:8000/api/hospital/")
        .then((res)=>setdeleteHos(res.data.data));
    });

    function delHospital(id){
        axios
        .delete(`http://localhost:8000/api/hospital/${id}`)
        .then((res)=>console.log(res));
    


    }
    // function EditHospital(id){
    //     axios
    //     .post(`http://localhost:8000/api/hospital/${id}`) 
    //     .then((res)=>console.log(res.data.data));
    // }
    return (
        <tr>
               
                <Link to = {`/Departments/${hospital._id}`}><button className="aaa departtt">{hospital.name}
                <MdCreate  onClick= {(event)=> handleEditClick(event, hospital)}/>
                 <MdDeleteSweep onClick= {()=>delHospital(hospital._id, hospital.department)}/>
                
                <Link to = {`/AddDepartment`}> <MdAdd/></Link>
                 </button></Link>
    </tr>
            )}
    


export default ReadHospital
