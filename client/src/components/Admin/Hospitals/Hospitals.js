import EditHospital from './EditHospital';
import ReadHospital from './ReadHospital'; 
import { useEffect, useState, Fragment} from 'react';
import { useHistory } from "react-router";
import {BrowserRouter, Route, Switch, Link ,useParams} from 'react-router-dom';
 import axios from 'axios'; 
const Hospitals = (props) => {

    const id = useParams(); 
    const hospital = props.value
    const [editFormData, setEditFormData]= useState({
        _id: '',
        name: '',
        logo: '',
        image: '',
        address: {
            city: "",
            region: "",
        }
    });
const [editContactId, setContactid]= useState(null);

const handleEditFormChange= (event)=>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData= {...editFormData};
    newFormData[fieldName]= fieldValue;
    setEditFormData(newFormData);
}


const handleEditFormSubmit= async(event)=>{
    event.preventDefault();
    console.log('id: ',editContactId);
    console.log("updatedHospital", editFormData);
    console.log("users: ", hospital);


    let newhospital = hospital;
    const index = hospital.findIndex((hospital)=> hospital._id === editContactId);
    console.log("index: ", index);

    newhospital.splice(index, 1);  // Removing the prev hospital from table
    
    newhospital.splice(index, 0, editFormData) // Inserting the updated hospital to the table

    console.log(("newHospital:--------- ", newhospital));
    props.handeleSettingHospitals(newhospital)

    const data = await axios
    .put(`http://localhost:8000/api/hospital/updateHospital`, editFormData)
    .then((res)=>console.log("mmmmmmmm",res.data.data));
    // history.push('/Hospitals'); 
}


const handleEditClick = (event, hospital)=>{
    event.preventDefault();
    setContactid(hospital._id)

const formValues= {
    id: hospital._id,
    name:hospital.name,
}
setEditFormData(formValues)
};
    return (
        <div>  
<form onSubmit= {handleEditFormSubmit}>
    
<table class="table" style ={{width: 700}} >
  <thead>
  <div className="all">
     
<h2>All Registered Hospitals</h2>
</div>
    <tr>
      <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody>
{hospital.map((hospital) => (
     <Fragment>
              {editContactId === hospital._id ? (
              <EditHospital editFormData={editFormData}
              handleEditFormChange= {handleEditFormChange}/>
               ) : ( 
     <ReadHospital hospital = {hospital} 
     handleEditClick = {handleEditClick}/>
               )}
     </Fragment>
      ))}
          </tbody>
</table>
         </form>
          </div>
    )}
export default Hospitals
