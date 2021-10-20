import './index.css';

import {BrowserRouter, Route,Switch, Link} from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from 'axios';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


import Header from './components/Header/Header';
import Navbar from './components/Admin/Navbar';
import Departments from './components/Admin/Hospitals/Departments';
import Line1 from './components/Line1';
import Admin from './components/Admin/Admin';
import AllUsers from './components/Admin/Users/AllUsers';
import AddUser from './components/Admin/Users/AddUser';
import EditUser from './components/Admin/Users/EditUser';
import NotFound from './components/Admin/NotFound';
import ReadUser from './components/Admin/Users/ReadUser';
import Home from './components/Admin/Home';
import Appoinments from './components/Admin/Appoinments/OverviewAppoinments';
import TodayTAppoinments from './components/Admin/Appoinments/TodayTAppoinments';
import YesterdayTAppoinments from './components/Admin/Appoinments/YesterdayTAppoinments';
import TotalAppoinments from './components/Admin/Appoinments/TotalAppoinments';
import TotalRegisteredPatient from './components/Admin/Appoinments/TotalRegisteredPatient';
import Hospitals from './components/Admin/Hospitals/Hospitals';
import Department from './components/Admin/Hospitals/Departments';
import Doctors from './components/Admin/Hospitals/Doctors';
import AddHospital from './components/Admin/Hospitals/AddHospital';
import AddDepartment from './components/Admin/Hospitals/AddDepartment'
import Doctor from './components/Doctors/Doctor';
import Overview from './components/Admin/Overview';
import Login from './components/Admin/Login';
import Appoinment from './components/Admin/Appoinments/Appoinment';
import Record from './components/Record';

function App() {
const [hospitals, sethospitals]= useState([]);
  const[loading,setLoading]=useState(true)
  const [users, setUsers]= useState([]);

  const handleSettingUsers = (user) =>{
    setUsers(user);
  }
  const handeleSettingHospitals= (hospital)=> {
    sethospitals(hospital)

  }
  useEffect(() => {
    axios
    .get('http://localhost:8000/users/', users)
    .then((res)=> {setUsers(res.data.data)
       setLoading(false)
    }).catch((e)=> console.log(e.responce))

axios
    .get(`http://localhost:8000/api/hospital`, hospitals)
    .then((res)=> sethospitals(res.data.data))
    .catch(error => console.log(error)); 

  }, []);
  return (
     <div>
     <BrowserRouter>
     <div className="content">
     <Header/>
     </div>
<Switch>
 
   <Route path = '/AddUser'> <AddUser/> </Route>
<Route path = '/AllUsers'>
{loading === false &&  <AllUsers value={users} handleSettingUsers={handleSettingUsers}/> }
 </Route>

 <Route path = "/hospitals">

  {loading===false && <Hospitals value = {hospitals} handeleSettingHospitals={handeleSettingHospitals}/> }
  <Navbar/>
  </Route>
<Route path = '/EditUser'> <EditUser/></Route>
<Route path = '/404'>  <NotFound/> </Route>
<Route path = '/Admin'><Admin/> 
<Navbar/>
<Home/> 
 </Route> 
<Route path = '/Home'><Home/> </Route>
<Route path = '/Appoinments'><Appoinments/>  </Route>
<Route path = "/TodayTAppoinments"><TodayTAppoinments/></Route>
<Route path = "/yesterdayTotalAppoinments"><YesterdayTAppoinments/></Route>
<Route path = "/total Appoinments"><TodayTAppoinments/></Route>
<Route path = "/TotalRegisteredPatient"><TotalRegisteredPatient/></Route>
<Route path = "/Departments/:id"><Departments/></Route>
<Route path = '/Doctors/:id'><Doctors/></Route>
<Route path = "/AddHospital"><AddHospital/></Route>
<Route path = '/AddDepartment'><AddDepartment/></Route>
<Route path = '/overview'><Overview/></Route>
<Route path = '/Login'><Login/></Route>
<Route path= '/Doctor'><Doctor/></Route>
<Route path= '/Appoinment'><Appoinment/></Route>
<Route path = '/Record'><Record/></Route>
 </Switch>
 </BrowserRouter>

 <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>  
  );
}
export default App;


