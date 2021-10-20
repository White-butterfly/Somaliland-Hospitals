import React from 'react'
const EditUser = ({editFormData, handleEditFormChange, handleEditFormSubmit}) => {
    console.log("editing user:", editFormData);
    return (
    <tr>
         <td>
            <input type="id"
            required= 'required'
            placeholder="Enter an id"
            name= "id" 
            disabled
            value = {editFormData._id}
            onChange= {handleEditFormChange} />

        </td>

        <td>
            <input type="text"
            required= 'required'
            placeholder="Enter a name"
            name= "name"
            value= {editFormData.name}
            onChange= {handleEditFormChange} />

        </td>
        <td>
        <input type="text"
            required= 'required'
            placeholder="Enter a userName"
            name= "userName"
            value= {editFormData.userName}
            onChange= {handleEditFormChange} />
            
        </td>
        <td>
        <input type="email"
            required= 'required'
            placeholder="Enter an email"
            name= "email"
            value= {editFormData.email}
            onChange= {handleEditFormChange} />
            
        </td>
        <td>
        <input type="text"
            required= 'required'
            placeholder="Enter a phone number"
            name= "phone"
            value= {editFormData.phone}
            onChange= {handleEditFormChange} />
            
        </td>
        <td><button type= "submit" >Update</button></td>
    </tr>
    
    )
}

export default EditUser






























