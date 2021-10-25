import React from 'react'
import {  MdStar } from "react-icons/md";


function ReviewForm() {
    return (
        <>
        <div style={{width:"50%" ,marginLeft:"30%" , border:"1px solid"}}>
        <h1  style={{width:"50%" ,marginLeft:"30%", color:"#000",fontSize:"36px"}}> Add Review</h1>
            <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Patient Name</label>
</div>

 <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">age</label>
</div>

 <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Patient country</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Review</label>
   
   </div>
   

   
   <div className="review-stars flex" >

   <h4>Rating</h4>
   <div style={{marginLeft:"47%"}}>
   <MdStar  />
    <MdStar />
     <MdStar />
      <MdStar />
      </div>
      </div>




        </div>
        <button type="button" class="btn btn-primary" style={{width:"10%" ,marginLeft:"47%" , border:"1px solid" , marginTop:"40px" , marginBottom:"20px"}}>Primary</button>
        </>
    )
}

export default ReviewForm
