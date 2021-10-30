// import { Link } from "react-router-dom";
// import {useState, useEffect}from "react";
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// const Departments = () => {

// const {id} = useParams();

// const [department, setdepartment]= useState(
// []
// );
// useEffect(()=> {
//      axios
//      .get(`http://localhost:8000/api/Department/${id}`)
//      .then((res)=> setdepartment(res.data.data));
// },[]);
//     return (

// <>

// <Link to = {`/Appoinment/`}><button className="aaa ">Make Appoinment</button></Link>

// <div className="ab">
// <div className="containerrr">
// {department.map((department)=>(
//     <div className="boxx">
//         <div className="iconn">😊</div>
//         <div className="contentt">

//             <p>{department.name}</p>
//                 {department.doctor.map((doctors)=>(
//                     <div className="aa">
//                     <div className="bb">
//                         <div className="cc">
//                 {/* <Link to = {`/Doctors/${department._id}`}><button className="aaa">Read More</button></Link> */}

//                    <br/>
//  Name:  {doctors.docName}
// <br/>
// experience:  {doctors.expirence}
// <br/>
// Language:  {doctors.language}
// <br/>
// Email:  {doctors.email}
// <br/>
// Hours:  {doctors.hours}
// <br/>
//                 </div>
//                    </div>
//                </div>
//                 ))}

//         </div>
//     </div>
//     ))}
//     </div>
// </div>

// </>
//     )
// }

// export default Departments

//     // <div className="boxx">
//     //     <div className="iconn">03</div>
//     //     <div className="contentt">
//     //         <h3>Service Name</h3>
//     //         <p>Lorem ipsum dolor sit amet consectetur,
//     //             adipisicing elit. Nihil, ipsam ea. Perspiciatis
//     //             consequuntur distinctio est.</p>
//     //             <a href="#" className="aaa">Read More</a>
//     //     </div>
//     // </div>

// //     <div className="boxx">
// //     <div className="iconn">02</div>
// //     <div className="contentt">
// //         <h3>Service Name</h3>
// //         <p>Lorem ipsum dolor sit amet consectetur,
// //             adipisicing elit. Nihil, ipsam ea. Perspiciatis
// //             consequuntur distinctio est.</p>
// //             <a href="#" className="aaa">Read More</a>

// //     </div>
// // </div>
