import React from 'react'

const YesterdayTAppoinments = () => {
    return (
        <div>
            <div className="add">
            <h1>Yesterday's Total Appoinments</h1>
            </div>
         <table className= "table border shadow">
<thead className= "thread-dark ">
    <tr>
        <th scope= "col">#</th>
        <th scope= "col">Name</th> 
        <th scope= "col">Hospital</th>
        <th scope= "col">Department</th>
        <th scope= "col">Doctor</th>
        <th scope= "col">Syptoms</th>
        <th>Action</th>

    </tr>
</thead>
<tbody>
    <tr>
        <th scope = "row">1</th>
        <td>Ardo</td>
        <td>Haldoor Hospital</td>
        <td>General</td>
        <td>Dr.Asia</td>
        <td>Xumad</td>

        

    </tr>
</tbody>
         </table>
        
            </div>
      
    )
}

export default YesterdayTAppoinments
