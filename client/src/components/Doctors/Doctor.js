import React from 'react'
import { MdAssignmentLate, MdHotelClass , MdAutorenew} from "react-icons/md";
const Doctor = () => {



    return (
        <div className= "j">
            <div className="docAll">
            <div className="docContainer">
                <div className="docNavbar">
                    <div className="hosLogo">
                        <img src="https://th.bing.com/th/id/OIP.leM0W9jUVUeGc8gbwdh3tgHaKc?w=118&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                        <span className= "logoname">Doctor Safa</span>
                    </div>
                    <div className="time-period">
                        <div className="select">
                            <div className="from">
                                <i className= "fa-fa-calender"></i>
                                Oct 7,2021
                            </div>
                            <span>: </span>
                            <div className="to">
                                <i className= "fa-fa-calender"></i>
                                Oct 20, 2021
                            </div>
                        </div>
                        <div className="docPatient">
                            <select name="" id="">
                                <option value="">Patients</option> 
                            </select>
                        </div>
                    </div>
                </div>

                
                <div className="container-body">
                    <div className="docSidebar">
                        <ul >
                            <li className= "">
                                <i className="fa fa-pie-chart"></i>
                                <a href="#">Check-ups</a>
                            </li>

                            <div className="doctorDropdown " style={{position: 'relative', display:'flex', flexDirection: 'column'}}>

                          
                           </div>


                            <li className= "">
                                <i className="fa fa-sliders"></i>
                                <a href="#">Blocked</a>
                            </li>

                            <div className="doctorDropdown " style={{display:'flex', flexDirection: 'column'}}>


</div>

                          <li className= "notification">
                                <i className="fa fa-bell"></i>
                                <a href="#">notifications</a>
                                <span>12</span>
                            </li>

                            <li className= "">
                                <i className="fa fa-history"></i>
                                <a href="#">Logout</a>
                            </li>

                            <li className= "docProfile">
                               <img src="doc1.jfif"  width= "50px" height= "50px" alt="" />
                               <div className="doctorName">Safa Warfaa</div>
                               <div className="docUsername">The Safa</div>
                               <a href="#"> standard plan </a>
                            </li>
                        </ul>
                    </div>

                    <div className="docMain-body">
                        <div className="docTittle">
                            <span className="greet">hii dwaney</span>

                            <h2>OverView</h2>
                        </div>

                            <div className="docCards">
                                <div className="docRow row-1">
                                    <div className="col">
                                    <div className="docCard">
                                        <div className="logoo">
                                        <h3> <MdAssignmentLate/></h3>
                                        </div>

                                        <div className="docContent">
                                            <h5>Rejected Patients</h5>
                                            <h5>43</h5>
                                            <h5>20%  of all rejected patients</h5>
                                            <a href="">view more detail</a>
                                        </div>
</div>
                                    </div>
                                    <div className="col">
                                    <div className="docCard">
                                        <div className="logoo">
                                    <h3> <MdAutorenew/></h3>
                                        </div>
                                        <div className="docContent">
                                        <h5>Rejected Patients</h5>
                                            <h5>43</h5>
                                            <h5>20%  of all rejected patients</h5>
                                            <a href="">view more detail</a>
                                        </div>
</div>
                                    </div>
                                    <div className="col three">
                                        <div className="docCard">
                                    <div className="logoo">
                                   <h3> <MdAssignmentLate/></h3>
                                        </div>
                                        <div className="docContent">
                                        <h5>Rejected Patients</h5>
                                            <h5>43</h5>
                                            <h5>20%  of all rejected patients</h5>
                                            <a href="">view more detail</a>
                                        </div>
                                    </div>
                                </div>
                                </div>


                              <div className="docRow row-2">
                                  <div className="chart">
                                      <div className="status">
                                          <span className= "one">Accepted patients</span>
                                          <span className= "two">Check ups</span>
                                          <span className="three">Visitor From other countries</span>

                                      </div>

                                      <div className="docbox">

                                          <li><span className= "doctext">0ct 25</span><span className= "bar bar1"></span></li>
                                          <li><span className= "doctext">0ct 26</span><span className= "bar bar2"></span></li>
                                          <li><span className= "doctext">0ct 27</span><span className= "bar bar3"></span></li>
                                          <li><span className= "doctext">0ct 28</span><span className= "bar bar4"></span></li>
                                          <li><span className= "doctext">0ct 29</span><span className= "bar bar5"></span></li>
                                          <li><span className= "doctext">0ct 30</span><span className= "bar bar6"></span></li>
                                          <li><span className= "doctext">0ct 30</span><span className= "bar bar7"></span></li>

                                      </div>
                                     
                                  </div>
                              </div>

                              <div className="docRow row-3">
                                  <div className="col">
                                    <div className="docCard">
                                    <div className="logoo">
                                            <i className= "fa fa-file"></i>
                                        </div>
                                        <div className="docContent">
                                            <h1>Clients</h1>
                                            <h2>43</h2>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col">
                                    <div className="docCard">
                                    <div className="logoo">
                                            <i className= "fa fa-file"></i>
                                        </div>
                                        <div className="docContent">
                                            <h1>Rejected Patients</h1>
                                            <h2>43</h2>
                                        </div>
                                        </div>

                                    </div>
                                    <div className="col">
                                    <div className="docCard">
                                    <div className="logoo">
                                            <i className= "fa fa-file"></i>
                                        </div>
                                        <div className="docContent">
                                            <h1>Rejected Patients</h1>
                                            <h2>43</h2>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div className="docCard">
                                    <div className="logoo">
                                            <i className= "fa fa-file"></i>
                                        </div>
                                        <div className="docContent">
                                            <h1>Rejected Patients</h1>
                                            <h2>43</h2>
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

export default Doctor
