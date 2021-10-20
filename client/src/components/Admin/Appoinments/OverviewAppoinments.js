import React from 'react'
import { MdAccountCircle, MdAssignment } from "react-icons/md";
import { Link } from 'react-router-dom';
const Appoinments = () => {
    return (
        <div>
                   <div>
            
            <div className="main-content">
      
      <header>
      
        <div className= "search-wrapper">
          <span className="ti-search"></span>
          <input type="Search"
          placeholder= "Search" />
        </div>
        <div className="social-icons">
          <span className="ti-bell"></span>
          <span className="ti-comment"></span>
          <div></div>
        </div>
      
      </header>
      </div>
      </div>
      <main className="main">
      
      <h2 className="dash-title">Overview</h2>
      <div className="dash-cards">
      
      <div className="card-single">
      <div className="card-body">
      <span className="ti-briefcase"></span>
      <div>
      <h5>Today Total Appoinment</h5>
      <h3><MdAccountCircle /></h3>
      <h4>10</h4>
      </div>
      </div>
      <div className="card-footer">
      <Link to = "/TodayTAppoinments"><a href="">View all</a></Link>
      </div>
      </div>
      
      
      <div className="card-single">
      <div className="card-body">
      <span className="ti-reload"></span>
      <div>
      <h5>Yesterday's Total Appoinment</h5>
      <h3><MdAccountCircle /></h3>
      <h4>4</h4>
      </div>
      </div>
      <div className="card-footer">
      <Link to = "/yesterdayTotalAppoinments"><a href="">View all</a></Link>
      </div>
      </div>
      
      <div className="card-single">
      <div className="card-body">
      <span className="ti-checkbox"></span>
      <div>
      <h5>Total Appoinment Till Date</h5>
      <h3><MdAccountCircle /></h3>
      <h4>5</h4>
      </div>
      </div>
      <div className="card-footer">
     <Link to = "/total Appoinments"> <a href="">View all</a></Link>
      </div>
      </div>

      <div className="card-single">
      <div className="card-body">
      <span className="ti-briefcase"></span>
      <div>
      <h5>Total Registered Patient</h5>
      <h3><MdAssignment/></h3>
      <h4>10</h4>
      </div>
      </div>
      <div className="card-footer">
      <Link to = "/TotalRegisteredPatient"><a href="">View all</a></Link>
      </div>
      
      

      </div>
      
      </div>
      </main>
     
        </div>

       
    )
}

export default Appoinments
