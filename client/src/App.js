import "./App.css";
import "./index.css";
import "./page.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./home/Footer";
import HeaderUser from "./home/HeaderUser";
import Section1 from "./home/section1";
import Section2 from "./home/Section2";
import Section4 from "./home/Section4";

import LoginBody from "./Login/LoginBody";
import Register from "./Login/Register";
import HospitalsUser from "./Hospitals/HospitalsUser";
import DepartmentUser from "./Hospitals/DepartmentUser";
import DoctorsUser from "./Hospitals/DoctorsUser";

import DepartmentCards from "./Hospitals/DepartmentCards";
import Section5 from "./home/Section5";
import Section6 from "./home/Section6";
import Blogs from "./Blogs/Blogs";


import Line1 from "./components/Line1";
import Homee from "./components/Admin/Homee";
import Appoinment from "./components/Admin/Appoinments/Appoinment";
import TodayTAppoinments from "./components/Admin/Appoinments/TodayTAppoinments";
import Hospitals from "./components/Admin/Hospitals/Hospitals";
import AddHospital from "./components/Admin/Hospitals/AddHospital";
import AddDepartment from "./components/Admin/Hospitals/AddDepartment";


import AllHospitals from "./components/Admin/Hospitals/AllHospitals";
import AllDoctors from "./components/Admin/Hospitals/AllDoctors";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AllDepartment from "./components/Admin/Hospitals/AllDepartment";
import EditHospital from "./components/Admin/Hospitals/EditHospital";
import EditDepartment from "./components/Admin/Hospitals/EditDepartment";
import EditDoctor from "./components/Admin/Hospitals/EditDoctor";

import AddDoctor from "./components/Doctors/AddDoctor";
import Menu from "./Hospital Dashboard/Menu";
import HospitalDashboard from "./Hospital Dashboard/HospitalDashboard";
import AddBlog from "./Hospital Dashboard/AddBlog";
import MyDepartments from "./Hospital Dashboard/MyDepartments";
import MyDoctors from "./Hospital Dashboard/MyDoctors";
import MyAppointments from "./Hospital Dashboard/MyAppointments";
import MyReviews from "./Hospital Dashboard/MyReviews";
import Contactt from "./components/contacts/Contactt";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const [hospitals, sethospitals] = useState([]);
  const [currentUser, setcurrentUser] = useState([]);
  const handeleSettingHospitals = (hospital) => {
    sethospitals(hospital);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital`, hospitals)
      .then((res) => sethospitals(res.data.data))
      .catch((error) => console.log(error));

    setcurrentUser(JSON.parse(localStorage.getItem("admin")));
  }, []);

  return (
    <>
      <BrowserRouter>
        {localStorage.getItem("user") !== null && (
          <>
            {JSON.parse(localStorage.getItem("user")).role === "user" && (
              <HeaderUser />
            )}
            {JSON.parse(localStorage.getItem("user")).role === "admin" && (
              <Homee />
            )}
            {JSON.parse(localStorage.getItem("user")).role === "hospital" && (
              <Menu />
            )}
          </>
        )}

        <Switch>
          <Route exact path="/EditHospital/:id">
            <EditHospital />
          </Route>
          <Route exact path="/EditDepartment/:id">
            <EditDepartment />
          </Route>
          <Route exact path="/EditDoctor/:id">
            <EditDoctor />
          </Route>
          <Route exact path="/AddHospital">
            <AddHospital />
          </Route>
          <Route exact path="/AddDepartment">
            <AddDepartment />
          </Route>
          <Route exact path="/AllHospitals">
            <AllHospitals />
          </Route>
          <Route exact path="/AllDepartment">
            <AllDepartment />
          </Route>
          <Route exact path="/AllDoctors">
            <AllDoctors />
          </Route>
          <Route exact path="/AdminDashboard">
            <AdminDashboard />
          </Route>
          <Route exact path = '/AddDoctor'>
            <AddDoctor/>
            </Route>
            <Route exact path= '/Contactt/:id'>
              <Contactt/>
              </Route>
          <Route exact path="/AddDoctor">
            <AddDoctor />
          </Route>

          {/* // route hospital dashboard */}

          <Route path="/HospitalDashboard">
            <HospitalDashboard />
          </Route>
          <Route path="/AddBlog">
            <AddBlog />
          </Route>
          <Route path="/MyDepartments">
            <MyDepartments />
          </Route>
          <Route path="/MyDoctors">
            <MyDoctors />
          </Route>
          <Route path="/MyAppointments">
            <MyAppointments />
          </Route>
          <Route path="/MyReviews">
            <MyReviews />
          </Route>
          {/* user routes */}
          <Route path="/home" exact>
            <Section1 />
            <Section4 />
            {/* <Section5 /> */}
            <Section2 />
            <Section6 />
          </Route>
          <Route path="/HospitalsUser">
            {" "}
            <HospitalsUser />
          </Route>
          <Route path="/DepartmentUser/:id">
            <DepartmentUser />
          </Route>
          <Route path="/DoctorsUser/:id">
            <DoctorsUser />
          </Route>
          <Route path="/Appoinment">
            <Appoinment />
          </Route>
          <Route path= "/TodayTAppoinments">
<TodayTAppoinments/>
          </Route>
          <Route path="/DepartmentCards/:id">
            <DepartmentCards />
          </Route>
          <Route path="/Contact">
            <Section6 />
          </Route>
          <Route path="/about">
            <Section2 />
          </Route>
          <Route path="/Blogs">
            {" "}
            <Blogs />
          </Route>
          <Route path="/Login">
            <LoginBody />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
        {localStorage.getItem("user") !== null && (
          <>
            {JSON.parse(localStorage.getItem("user")).role === "user" && (
              <Footer />
            )}
          </>
        )}

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
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
