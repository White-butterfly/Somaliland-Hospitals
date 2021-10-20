import   {useState, useEffect, }  from 'react'
import { MdDone} from "react-icons/md";
import {BrowserRouter, Route, Switch, Link ,useParams} from 'react-router-dom';
import axios from 'axios';

const TotalRegisteredPatient = () => {
    return (
        <div>
            <div className="add">
                <h1>Total Registered Patients</h1>
            </div>
         <table className= "table border shadow">
<thead className= "thread-dark ">
    <tr>
        <th scope= "col">#</th>
        <th scope= "col">Full Name</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope = "row">1</th>
        <td>Ardo Geedi Mohamed </td>
        <td> <MdDone/></td>
    </tr>
</tbody>
         </table>
        </div>
    )
}

export default TotalRegisteredPatient
