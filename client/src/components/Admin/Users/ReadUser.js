import React from 'react'
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import axios from 'axios';
const ReadUser = ({user, handleEditClick}) => {
    function EditUser(id){
        axios
        .post(`http://localhost:8000/users/${id}`) 
        .then((res)=>console.log(res.data.data));
    }
    return (
        <tr>
        <th scope="row">{user._id}</th>
        <td>{user.name}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phone} </td> 
        <td><MdDeleteSweep /></td>
        <td><MdCreate  onClick= {(event)=> handleEditClick(event, user)}/> </td>
      </tr>
    )
}

export default ReadUser
