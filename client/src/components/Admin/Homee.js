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
                        <a href=""className= 'active'><span className= "las la-igloo"></span>
                        <span>Dashboard</span></a>
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
        </div>

        <div className="adminmain-content">
            <div className="hheader">
               <h2>

        <label for="nav-toggle"> <span className="las la-bars"></span> </label>
                 
                    Dashboard
               </h2>

               <div className="adminsearch-wrapper">
                   <span className="las la-search"></span>
                   <input type="search"
                   placeholder= "Search here" />
               </div>
               <div className="user-wrapper">
                   login/register
               </div>
              

            </div>
            <div className="mmain">
                <div className="admincards">
                    <div className="admincard-single">
                        <div>
                            <h1>54</h1>
                            <span>Hospitals</span>
                        </div>
                        <div className="h11">
                    <span className="las la-users"></span>
                    </div>
</div>
                    <div className="admincard-single">
                        <div>
                            <h1>79</h1>
                            <span>Departments</span>
                        </div>
                        <div className="h11">
                    <span className="las la-clipboard-list"></span>
                    </div>

              </div>

                    <div className="admincard-single">
                        <div>
                            <h1>124</h1>
                            <span>Doctors</span>
                        </div>
                        <div className="h11">
                    <span className="las la-shopping-bag"></span>
                    </div>
</div>
                    <div className="admincard-single">
                        <div>
                            <h1>$6k</h1>
                            <span>Payments</span>
                        </div>
            <div className="h11">
                    <span className="lab la-google-wallet"></span>
                    </div>
                    </div>
                </div>
                <div className="recent-grid">
                    <div className="adminprojects">
                        <div className="admincard">
                            <div className="admincard-header">
                                <h2>Recent Appoinments</h2>

                                <button>See All <span className="las la-arrow-right"></span> </button>
                            </div>

                        </div>
                        <div className="admincard-body">
                            <div className="table-responsive">
                            <table width= '100%'>
                                <thead>
                                    <tr>
                                        <td>Patient Names</td>
                                        <td>Hospitals</td>
                                        <td>Department</td>
                                        <td>Doctors</td>
                                        <td>status</td>
                                    </tr>
                                </thead>
<tbody>
    <tr>
        <td>mohamed </td>
        <td>haldoor hospital</td>
        <td>X-Ray</td>
        <td>dr: ciise jama</td>
        
        <td>
            <span className="status purple"> Pending</span>
           
            </td>
    </tr>
    
</tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    <div className="admincustomers">

                        <div className="admincard">
                            <div className="admincard-header">
                                <h3>Doctors</h3>
                                
                                <button>See All <span className="las la-arrow-right"></span> </button>
                            </div>
                            <div className="admincard-body">
                                
                                <div className="admincustomer">
                                    <div className="adminInfo">
                                    <img src="doc1.jfif"  width= '40px' height= "40px" alt="" />
                                    <div>
                                    <h4>Dr.Faiza </h4>
                                        <small>Expert</small>
                                    </div>
                                </div>
                                    <div className="admincontact">
                                <div>
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-comment"></span>
                                    <span className="las la-phone"></span>
                           </div>
                           </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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
