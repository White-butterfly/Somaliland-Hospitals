import { Link } from "react-router-dom";
import {useState, useEffect}from "react";
import axios from 'axios';
import Line1 from "../../Line1";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { MdModeEdit, MdDelete , MdAdd } from "react-icons/md";
const TodayTAppoinments = () => {

    const [id,setId] = useState("");
    const [Appoinment, setAppoinment]= useState([]);

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/api/appoinment/`)
        .then((res)=> {setAppoinment(res.data.data)
            console.log(res.data.data) 
        } )

     .catch((e)=> console.log( Appoinment,"uuuuuu",e.response))
        
    },[]);
 
    function delDoctor(id){
        axios
        .delete(`http://localhost:8000/api/Appoinment/${id}`)
        .then((res)=>console.log(res));
    }
    return (
     <>
 <h1 style={{marginLeft: "345px", marginTop: "20px", color: "#000"}}>All Appoinments </h1>
<Table className= "center">
	<Thead>
		<Tr>
			<Th>First Name</Th>
			<Th>Hospital Name</Th>
			<Th>Depart Name</Th>
			<Th>Doctor Name</Th>
      <Th>Actions</Th>
		</Tr>
	</Thead>
             {Appoinment.map((Appoinments)=>( 
	<Tbody style={{marginLeft: "345px"}}>
	 <Tr>
     <Td >{Appoinments.firstName}</Td>
            <Link to= {`/Line1/${Appoinments._id}`} > <Td>See More</Td></Link>
            </Tr>
	</Tbody>
	

	
		))}
</Table>

















     </>
    )
}

export default TodayTAppoinments




// <td>{Appoinments.department.hospital.name}</td>
//         <td>{Appoinments.department.name}</td>
//         <td>{Appoinments.department.doctor[0].docName}</td>
       
     