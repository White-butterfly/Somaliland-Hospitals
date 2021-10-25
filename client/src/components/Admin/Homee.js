import React from 'react'
import {Link} from "react-router-dom"
import {MdGroupAdd , MdAccountBalance, MdLibraryAdd, MdForum,
    MdFormatAlignJustify, MdHotel} from "react-icons/md";
const Home = () => {
    return (
        <>
        <div>
      <div className="main-content">

</div>
</div>
<main className="main">
<div className="dash-cards">

<div className="card-single">
<div className="card-body">
<span className="ti-briefcase"></span>
<div>
<h5>All Hospitals</h5>
<h3><MdHotel/></h3> 
<h4>303++</h4>
</div>
</div>
<div className="card-footer">

<Link to = {`/AllHospital/`}><button className="aaa">View All</button></Link>
</div>
</div>

<div className="card-single">
<div className="card-body">
<span className="ti-reload"></span>
<div>
<h5>All Departments</h5>
<h3><MdLibraryAdd/></h3>
<h4>193++</h4>
</div>
</div>
<div className="card-footer">
<Link to = {`/department/`}><button className="aaa">View All</button></Link>
</div>
</div>

<div className="card-single">
<div className="card-body">
<span className="ti-checkbox"></span>
<div>
<h5>All Doctors</h5>
<h3><MdGroupAdd/></h3>
<h4>2,300++</h4>
</div>
</div>
<div className="card-footer">

<Link to = {`/AllDoctors/`}><button className="aaa">View All</button></Link>
</div>

</div>
<div className="card-single">
<div className="card-body">
<span className="ti-briefcase"></span>
<div>
<h5> All Appoinments</h5>
<h3><MdForum/></h3>
<h4>20++</h4>
</div>
</div>
<div className="card-footer">

<Link to = {`/TodayTAppoinments/`}><button className="aaa">View All</button></Link>
</div>
</div>
<div className="card-single">
<div className="card-body">
<span className="ti-checkbox"></span>
<div>
<h5>Add Hospital</h5>
</div>
</div>
<div className="card-footer">

<Link to = {`/hospitals/`}><button className="aaa">View All</button></Link>

</div>

</div>

<div className="card-single">
<div className="card-body">
<span className="ti-briefcase"></span>
<div>
<h5> Add Appoinments</h5>
<h3><MdForum/></h3>
<h4>20++</h4>
</div>
</div>
<div className="card-footer">

<Link to = {`/Appoinment/`}><button className="aaa">View All</button></Link>
</div>
</div>


<div className="card-single">
<div className="card-body">
<span className="ti-reload"></span>
<div>
<h5>Record</h5>
<h3><MdFormatAlignJustify/></h3>
<h4>1,900++</h4>
</div>
</div>
<div className="card-footer">

<Link to = {`/Record/`}><button className="aaa">View All</button></Link>
</div>
</div>

<div className="card-single">
<div className="card-body">
<span className="ti-checkbox"></span>
<div>
<h5>Users</h5>
<h3><MdGroupAdd/></h3>
<h4>2,300++</h4>
</div>
</div> 
<div className="card-footer">

<Link to = {`/Users/`}><button className="aaa">View All</button></Link>
</div>
</div>

</div>
</main>
        </>
    )
}

export default Home
