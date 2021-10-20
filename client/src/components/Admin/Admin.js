import React from 'react'
import {BrowserRouter, Route,Switch, Link} from "react-router-dom";

import hospitals from './Hospitals/Hospitals'
import AddHospital from './Hospitals/AddHospital'
const Admin = () => {
    return (
        <div>
           {/* <BrowserRouter> 
           <Switch>
                <Route path = "/AddHospital /:id"><AddHospital/></Route> 
               </Switch>
            </BrowserRouter> */}
        </div>
    )
}




export default Admin
