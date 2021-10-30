import { Link } from "react-router-dom";
import { useEffect ,useState } from 'react';
import axios from 'axios'; 
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { MdModeEdit, MdDelete , MdAdd } from "react-icons/md";
const AllHospitals = () => {

    const [id,setId] = useState("");
    const [AllHospitals, setAllHospitals]= useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/hospital/${id}`) 
        .then((res)=> setAllHospitals(res.data.data))

     .catch((e)=> console.log(e.response))
    },[]);
 
    function delHospital(id){
        axios
        .delete(`http://localhost:8000/api/hospital/${id}`)
        .then((res)=>console.log(res));
    }
    return (
      <>
	  <h1 style={{marginLeft: "345px", marginTop: "20px", color: "#000"}}>All Hospitals </h1>
<Table className= "center">
	<Thead>
		<Tr>
			<Th>Hospital Name</Th>
			<Th>Images</Th>
			<Th>City</Th>
			<Th>Region</Th>
			<Th>Action</Th>
			
		</Tr>
	</Thead>
             {AllHospitals.map((hospital)=>( 
	<Tbody>
		<Tr>
			<Td>{hospital.name}</Td>
			<Td>{hospital.image}</Td>
			<Td>{hospital.address.city}</Td>
			<Td>{hospital.address.region}</Td>
			<Td><MdModeEdit/> <MdDelete onClick= {()=>delHospital(hospital._id)}/> </Td>
		<Link to = {'/AddHospital'} ><Td> <MdAdd/> </Td></Link> 
       

			
		</Tr>
	</Tbody>
		))}
</Table>



{/* 
<div style={{overflowX: "auto"}}>
<table className="center">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
</div> */}
















   
       
 





























       </>
    )
}

export default AllHospitals
