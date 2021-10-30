// import React from 'react'
// import { Link } from "react-router-dom";
// import { useEffect ,useState } from 'react';
// import axios from 'axios';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
// import { MdModeEdit, MdDelete , MdAdd } from "react-icons/md";
// const AllDoctors = () => {

//     const [id,setId] = useState("");
//     const [Doctors, setDoctors]= useState([]);

//     useEffect(()=> {
//       axios
//       .get(`http://localhost:8000/api/doctor/${id}`)
//       .then((res)=> setDoctors(res.data.data))

//    .catch((e)=> console.log(e.response))
//   },[]);

//     function delDoctor(id){
//       axios
//       .delete(`http://localhost:8000/api/doctor/${id}`)
//       .then((res)=>console.log(res));
//   }

//     return (
//          <>
//  <h1 style={{marginLeft: "345px", marginTop: "20px", color: "#000"}}>All Doctors </h1>
// <Table className= "center">
// 	<Thead>
// 		<Tr>
// 			<Th>Doctor Name</Th>
// 			<Th>Expirence</Th>
// 			<Th>Language</Th>
// 			<Th>Email</Th>
//       <Th>Hours</Th>
// 			<Th>hospital Name</Th>
//       <Th>Depart Name</Th>
//       <Th>Actions</Th>

// 		</Tr>
// 	</Thead>
//              {Doctors.map((doctor)=>(
// 	<Tbody>
// 	 <Tr>
// 			<Td>{doctor.docName}</Td>
// 				<Td>{doctor.expirence}</Td>
// 			<Td>{doctor.language}</Td>
// 			<Td>{doctor.email}</Td>
//       <Td>{doctor.hours}</Td>
//       <Td>{doctor.department.hospital.name}</Td>
//       <Td>{doctor.department.name}</Td>

// 			<Td><MdModeEdit/> <MdDelete onClick= {()=>delDoctor(doctor._id)}/> </Td>
// 		<Link to = {'/AddHospital'} ><Td> <MdAdd/> </Td></Link>
// 		</Tr>
// 	</Tbody>
// 		))}
// </Table>

//          </>

//     )
// }

// export default AllDoctors
