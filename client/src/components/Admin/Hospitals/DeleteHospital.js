import React from 'react'
import axios from "axios";
import { useEffect ,useState } from 'react';
import { MdDelete } from "react-icons/md";
import ReadHospital from './ReadHospital';
const DeleteHospital = () => {

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
    return (
        <div>
            
        </div>
    )
}

export default DeleteHospital
