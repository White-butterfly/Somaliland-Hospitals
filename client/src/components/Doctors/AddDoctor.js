import React from 'react'

const AddDoctor = () => {
    return (
  <>

<div className="boddy">
<div id="envelope">
   
<form action="" className="formm" method="post">
<div className="headder">
<h2>Register new Doctor</h2>

</div>
<label>Your Name</label>

<input name="name"
className="innput"
 placeholder="Ashley Peterson" 
 type="text" 
 width="100px;"/>

<label>Email Id</label>
<input name="email"
className="innput" 
placeholder="yourname@gmail.com" 
type="text"/>

<label>Contact Number</label>
<input name="contact" 
className="innput"
placeholder="123456789" 
type="text"/>

<label>Website URL</label>
<input name="website" 
className="innput"
placeholder="www.yoursite.com" 
type="text"/>

{/* <label>Message</label>
<textarea cols="15" name="message" placeholder="Message" rows="10">
</textarea> */}
<input id="submit" type="submit" value="Send Message"/>
</form>
</div>
</div>

  </>
    )
}

export default AddDoctor
