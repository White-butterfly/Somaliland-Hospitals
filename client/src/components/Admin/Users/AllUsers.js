import { useParams } from "react-router-dom";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import EditUser from "./EditUser";
import { useEffect, useState, Fragment} from 'react';
import { useHistory } from "react-router";
import axios from "axios";
import ReadUser from "./ReadUser";
const AllUsers = (props) => {
    const id = useParams(); 
    const user = props.value
    const [editFormData, setEditFormData]= useState({
        _id: '',
        name: '',
        userName: '',
        email: '',
        phone: '',
    });
    let history= useHistory();

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
        console.log("updatedUser", editFormData);
        console.log("users: ", user);

        let newUsers = user;
        const index = user.findIndex((user)=> user._id === editContactId);
        console.log("index: ", index);

        newUsers.splice(index, 1);  // Removing the prev user from table
        
        newUsers.splice(index, 0, editFormData) // Inserting the updated user to the table

        console.log(("newUsers:--------- ", newUsers));
        props.handleSettingUsers(newUsers)


        const data = await axios
        .post(`http://localhost:8000/users/updateUser`, editFormData)
        .then((res)=>console.log("&&&&&&&&",res.data.data));
        history.push('/AllUsers');
    }

        const handleEditClick = (event, user )=>{
            event.preventDefault();
            setContactid(user._id)
    
        const formValues= {
            _id: user._id,
            name: user.name,
            userName: user.userName,
            email: user.email,
            phone: user.phone
        }
        setEditFormData(formValues)
    };

    const handleDeleteClick = ()=>{
        // const newContacts= [...c]
    }
    return (
        <div>
         <form onSubmit= {handleEditFormSubmit}>
     <table class="table" style ={{width: 700}} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
      {user.map((user) => (
          <Fragment>
              {editContactId === user._id ? (
              <EditUser editFormData={editFormData}
              handleEditFormChange= {handleEditFormChange}/>
               ) : ( 
     <ReadUser user= {user} 
     handleEditClick = {handleEditClick}/>
               )}
     </Fragment>
      ))}

  </tbody>
</table>

</form>
        </div>
    )
}

export default AllUsers


