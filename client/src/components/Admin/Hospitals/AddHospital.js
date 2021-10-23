import React from 'react'
import axios from 'axios';
import { useState} from 'react';
import { useParams,} from "react-router-dom";
const AddHospital = () => {
    const [Addhospital, setAddhospital] = useState({ 
        name: "",
        logo: "",
        image: "",
        address: { 
            city: "",
            region: "",
        } 
    });
      const onChange = e => {
          let data= { ...Addhospital };
          let name= e.target.name;
          let val = e.target.value;
          if (name == "name" || name == "logo" || name == "image"){
              data = { ...data, [name]: val };
          }else if (name == 'region' || name == 'city'){
              data = {
                  ...data,
                  address: {
                    ...data.address,
                      [name]: val
}

};
}
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
            <div className="add">
            <h1>Register a new Hospital</h1>
            </div>
            <div className="container">
              <form action="#">
                  <div className="hospital-details">
                      <div className="input-box">
                          <span className="details"> Hospital Name</span>

                          <input 
                          type="text" 
                          placeholder="Enter hospital name" 
                          name = "name"
                          required
                          value= {Addhospital.name}
                          onChange={onChange}/>
                      </div>

                      <div className="input-box">
                          <span className="details"> Hospital logo</span>

                          <input type="text" 
                          placeholder="Enter hospital Logo" 
                          required
                          name= "logo"
                          value= {Addhospital.logo}
                          onChange= {onChange}/>
                      </div>

                      <div className="input-box">
                          <span className="details"> Hospital Image</span>
                          <input type="text" 
                          placeholder="Enter hospital Image" 
                          required
                          value= {Addhospital.image}
                          name= "image"
                          onChange= {onChange}/>
                      </div>

                      <div className="input-box">
                          <span className="details">  City</span>
                          <input type="text" 
                          placeholder="Enter the city" 
                          required
                          name= "city"
                          value= {Addhospital.address.city}
                          onChange= {onChange}/>
                      </div>

                      <div className="input-box">
                          <span className="details"> Region</span>
                          <input type="text" 
                          placeholder="Enter the region" 
                          required
                          name= "region"
                          value= {Addhospital.address.region}
                          onChange= {onChange}/>
                      </div>

                    
                  </div>
                 <button className= "button" onClick={register}>Register</button>
              </form>
            </div>




            
          
        </div>
    )
}

export default AddHospital
