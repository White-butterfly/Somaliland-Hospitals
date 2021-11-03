import React from 'react'
import axios from 'axios';
import { useState} from 'react';
import { useParams,} from "react-router-dom";
const AddHospital = () => {
    const [Addhospital, setAddhospital] = useState({ 
        name: "",
        logo: "",
        image: "",
        describtion: "",
        address: { 
            city: "",
            region: "", 
        },
            geolocation: {
              lat: '',
              long: '',
            }
         
    });
      const onChange = e => {
          let data= { ...Addhospital };
          let name= e.target.name;
          let val = e.target.value;
          // let vali = e.target.file[];
          if (name == "name" || name == "logo" || name == "image" || name == "describtion"){
              data = { ...data, [name]: val };
          }else if (name == 'region' || name == 'city' ){
              data = {
                  ...data,
                  address: {
                    ...data.address,
                      [name]: val
}};}
else if (name == 'lat' || name == 'long') {
      data = {
        ...data,
        geolocation: {
          ...data.geolocation,
            [name]: val
          }} };
          
console.log("on change ",onChange);
      setAddhospital(data);
};

      const register = e => {
        e.preventDefault();
        console.log(JSON.stringify("Added a hospital",Addhospital));
        axios
        .post(`http://localhost:8000/api/hospital`,Addhospital)
        .then((res)=> console.log(res)).catch((e)=> console.log(e.response))
      };
    return (
        <div>
               <div className="boddy">
        <div id="envelope">
        <form  className="formm" >
            <div className="headder">
              <h2>Register a new Hospital</h2>
            </div>
            <br/>
            <br/>
            <label>Hospital Name</label>
          <input
            type="text"
            className="form-control"
          
            name = "name"
            required
            value= {Addhospital.name}
            onChange={onChange}
          />
      

      <label>Hospital logo</label>
          <input
            type="text"
            className="form-control"
         
            required
            name= "logo"
            value= {Addhospital.logo}
            onChange= {onChange}
          />
     

     <label>Hospital image</label>
          <input
            type="text"
            className="form-control"
          
            required
           value= {Addhospital.image}
           name= "image"
           onChange= {onChange}
          />

<label>Hospital Description </label>
          <input
            type="text"
            className="form-control"
        
            required
           value= {Addhospital.describtion}
           name= "describtion"
           onChange= {onChange}
          />
    

    <label>Hospital City </label>
          <input
            type="text"
            className="form-control"
       
            required
            name= "city"
            value= {Addhospital.address.city}
            onChange= {onChange}
          />
   

        <label>Hospital Region</label>
          <input
            type="text"
            className="form-control"
         
            required
            name= "region"
            value= {Addhospital.address.region}
            onChange= {onChange}
          />
             <label>Hospital Lat</label>
          <input
            type="text"
            className="form-control"
           
            required
            name= "lat"
            value= {Addhospital.geolocation.lat}
            onChange= {onChange}
          />

<label>Hospital Long</label>
          <input
            type="text"
            className="form-control"
         
            required
            name= "long"
            value= {Addhospital.geolocation.long}
            onChange= {onChange}
          />
        
{/* 
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name of the Department"
            required
            name= "city"
            value= {Addhospital.address.city}
            onChange= {onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name of the Department"
            required
            name= "city"
            value= {Addhospital.address.city}
            onChange= {onChange}
          />
        </div>
     */}

<br/>
<br/>
      
          <button  onClick={register}> Register  </button>
       
      </form>



      
       




            
          </div>
          </div>
        </div>
    )
}

export default AddHospital
