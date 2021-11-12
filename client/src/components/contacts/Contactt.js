import React from 'react'
import { useEffect, useState } from "react";
import { Link ,} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Contactt = () => {
    const [id, setId] = useState("");
    const [contact,setcontact]= useState([]);
    const [search, setsearch] = useState("");
useEffect(() => {
    axios
    .get(`http://localhost:8000/api/contact${id}`)
    .then((res) => {setcontact(res.data.data)
      console.log("Contact ",res) 
    })
    .catch((e) => console.log(e.response));
}, []);
    
    return (
        <div>
        <div className="tbl-heading">Contacted people</div>
         
        <div className="adminsearch-wrapper" style={{width: '40rem', marginLeft: '540px', marginTop: '10px'}}>
                     <span className="las la-search"></span>
                     <input type="search"
                     placeholder= "Search here" 
                     onChange={(e) => setsearch(e.target.value)}/>
              
  </div>
        <div class="table_responsive">
          <table>
            <thead>
              <tr>
            
                <th>user Name</th>
                <th>phone</th>
                <th>Email</th>
                <th>Message</th>
              
              </tr>
            </thead>
  
            {contact.filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.userName.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((contacts) => (
              <tbody>
                <tr>
              
   
                  <td>{contacts.userName}</td>
                  <td>{contacts.phone}</td>
                  <td>{contacts.email}</td>
                 
                  <td> {contacts.message}</td>
        
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        
        
      </div>
    )
}

export default Contactt
