// import React from 'react'
import {Link} from "react-router-dom"
import React from 'react'

const Homee = () => {
    return (
        <div>
            <div className="padding">
            <input type="checkbox" id='nav-toggle'  />
        <div className="adminsidebar">
            <div className="adminsidebar-brand">
               <h2><span className= "lab la-accusoft"></span>Somaliland-Hospitals</h2>
            </div>
            <div className="adminsidebar-menu">
                <ul>
                    <li>
                    <Link to = {'/AdminDashboard'}><span className= "las la-igloo"></span>
                       <span>Dashboard</span></Link>
                    </li>

                    <li>
                    <Link to = {'/AllHospitals'} ><a href=""><span className= "las la-users"></span>
                    <span>All Hospitals</span></a> </Link>
                    </li>

                    <li>
                       <Link to = {'/AllDepartments'} ><a href=""><span className= "las la-clipboard-list"></span>
                        <span>All Departments</span></a></Link>
                    </li>
                    <li>
                       <Link to = {'/AllDoctors'}> <a href=""><span className= "las la-shopping-bag"></span>
                        <span>All Doctors</span></a></Link>
                    </li>
                    <li>
                     <Link to = {'/TodayTAppoinments'} ><a href=""><span className= "las la-receipt"></span>
                        <span>All Appoinments</span></a></Link>
                    </li>
                    <li>
                      <Link to = {'/AddHospital'} > <a href=""><span className= "las la-user-circle"></span>
                        <span>Add Hospital</span></a></Link>
                    </li>
                    <li>
                        <Link to = {'/Adddepartment'}><a href=""><span className= "las la-clipboard-list"></span>
                        <span>Add Department </span></a></Link>
                    </li>
                    <li>
                        <Link to = {'/Appoinment'}><a href=""><span className= "las la-clipboard-list"></span>
                        <span>Add Appoinment</span></a></Link>
                    </li>
                </ul>
            </div>
            
        <label for="nav-toggle"> <span className="las la-bars"></span> </label>
        </div>

        </div>
        </div>
    )
}

export default Homee








// import {MdGroupAdd , MdAccountBalance, MdLibraryAdd, MdForum,
//     MdFormatAlignJustify, MdHotel} from "react-icons/md";
// const Home = () => {
//     return (
//         <>
//         <div>
//       <div className="main-content">

// </div>
// </div>
// <main className="main">
// <div className="dash-cards">

// <div className="card-single">
// <div className="card-body">
// <span className="ti-briefcase"></span>
// <div>
// <h5>All Hospitals</h5>
// <h3><MdHotel/></h3> 
// <h4>303++</h4>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/AllHospital/`}><button className="aaa">View All</button></Link>
// </div>
// </div>

// <div className="card-single">
// <div className="card-body">
// <span className="ti-reload"></span>
// <div>
// <h5>All Departments</h5>
// <h3><MdLibraryAdd/></h3>
// <h4>193++</h4>
// </div>
// </div>
// <div className="card-footer">
// <Link to = {`/department/`}><button className="aaa">View All</button></Link>
// </div>
// </div>

// <div className="card-single">
// <div className="card-body">
// <span className="ti-checkbox"></span>
// <div>
// <h5>All Doctors</h5>
// <h3><MdGroupAdd/></h3>
// <h4>2,300++</h4>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/AllDoctors/`}><button className="aaa">View All</button></Link>
// </div>

// </div>
// <div className="card-single">
// <div className="card-body">
// <span className="ti-briefcase"></span>
// <div>
// <h5> All Appoinments</h5>
// <h3><MdForum/></h3>
// <h4>20++</h4>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/TodayTAppoinments/`}><button className="aaa">View All</button></Link>
// </div>
// </div>
// <div className="card-single">
// <div className="card-body">
// <span className="ti-checkbox"></span>
// <div>
// <h5>Add Hospital</h5>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/hospitals/`}><button className="aaa">View All</button></Link>

// </div>

// </div>

// <div className="card-single">
// <div className="card-body">
// <span className="ti-briefcase"></span>
// <div>
// <h5> Add Appoinments</h5>
// <h3><MdForum/></h3>
// <h4>20++</h4>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/Appoinment/`}><button className="aaa">View All</button></Link>
// </div>
// </div>


// <div className="card-single">
// <div className="card-body">
// <span className="ti-reload"></span>
// <div>
// <h5>Record</h5>
// <h3><MdFormatAlignJustify/></h3>
// <h4>1,900++</h4>
// </div>
// </div>
// <div className="card-footer">

// <Link to = {`/Record/`}><button className="aaa">View All</button></Link>
// </div>
// </div>

// <div className="card-single">
// <div className="card-body">
// <span className="ti-checkbox"></span>
// <div>
// <h5>Users</h5>
// <h3><MdGroupAdd/></h3>
// <h4>2,300++</h4>
// </div>
// </div> 
// <div className="card-footer">

// <Link to = {`/Users/`}><button className="aaa">View All</button></Link>
// </div>
// </div>

// </div>
// </main>
//         </>
//     )
// }

// export default Home
