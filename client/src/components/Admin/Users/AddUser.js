import React from 'react'
import axios from "axios";
import { useState} from 'react';

const AddUser = () => {
  const [addUser, setAddUser]= useState ({
    name: "",
    userName: "",
    email: "",
    phone: 0, 
    password: "",
  });
  
  function Add(e){
    e.preventDefault();
    axios
    .post("http://localhost:8000/users/updateUser",addUser)
    .then((res)=> console.log(res)).catch((e)=> console.log(e.response))

  }
  return (
    <div>
      
<div className="add">

<h2>Add a User</h2> 
<form>
    <input 
    type="text" 
    name= "name"
    required = "required"
    placeholder= "Enter a name"
    onChange= {(e)=> setAddUser({...addUser, name: e.target.value})} />
<br/>
<br/>
<input 
    type="text" 
    name= "userName"
    required = "required"
    placeholder= "Enter a userName"
    onChange= {(e)=> setAddUser({...addUser, userName: e.target.value})} />
<br/>
<br/>
<input 
    type="email" 
    name= "email"
    required = "required"
    placeholder= "Enter an email" 
    onChange= {(e)=> setAddUser({...addUser, email: e.target.value})}/>
<br/>
<br/>

<input 
    type="text" 
    name= "phone"
    required = "required"
    placeholder= "Enter a phone"
    onChange= {(e)=> setAddUser({...addUser, phone: e.target.value})} />
<br/>
<br/>

<input 
    type="password" 
    name= "password"
    required = "required"
    placeholder= "Enter a password"
    onChange= {(e)=> setAddUser({...addUser, password: e.target.value})} />
    <br/>
<br/>
<button type="button"
 class="btn btn-primary"
 onClick= {(e)=> Add(e)} >Add</button>
</form>
    </div>
    </div>
  )}


export default AddUser;
