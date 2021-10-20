import { Link } from "react-router-dom";
import {useState, useEffect}from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Doctors = () => {
const {id} = useParams();
const [depart, setdepart]= useState(
    []
    );
    useEffect(()=> {
         axios
         .get(`http://localhost:8000/api/Department/${id}`)
         .then((res)=> setdepart(res.data.data));
    },[]);
    return (
        <div>
            
           <div className="y">
            <div className="container-fluid">
            <h1 className="text-center mt-5 display-3 fw-bold"> Our Doctors </h1>
            <hr className= "mx-auto mb-5 w-25"/>
                <div className="row ">
    <div className="col-12 col-sm-6 col-md-3 m-auto">

                        </div>
                    </div>
                </div>
                <div className="containerrr">
                <div className="boxx">
                <div className="iconn">😊</div>
                <div className="contentt">
                <h3>Doctor Name: mohamed ali jama </h3>
                <h3>Experience: </h3>
                <h3>Languages:</h3>
                <h3>Email:</h3>
                <h3>Hours::</h3>
                    </div>
                </div>
                </div>
            </div>

           </div> 
      
    )
}

export default Doctors
