import React from 'react'

const EditHospital = ({editFormData, handleEditFormChange, handleEditFormSubmit}) => {
    console.log("editing Hospital:", editFormData);
    return (
        <tr>
       <td>
           <input type="text"
           required= 'required'
           placeholder="Enter a name"
           name= "name"
           value= {editFormData.name}
           onChange= {handleEditFormChange} />
</td>
       <td><button type= "submit">Update</button></td>
   </tr>
   
   )
}

export default EditHospital
