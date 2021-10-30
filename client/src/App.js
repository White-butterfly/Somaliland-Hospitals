import "./App.css";
import "./index.css";
import Footer from "./home/Footer";
import HeaderUser from "./home/HeaderUser";
import Section1 from "./home/section1";
import Section2 from "./home/Section2";
import Section4 from "./home/Section4";

import LoginBody from "./Login/LoginBody";
import Register from "./Login/Register";
import HospitalsUser from "./Hospitals/HospitalsUser";
//import DepartmentsUser from "./Hospitals/DepartmentsUser";
import DoctorsUser from "./Hospitals/DoctorsUser";
import Appiontment from "./Hospitals/Appiontment";
import DepartmentCards from "./Hospitals/DepartmentCards";
import Section5 from "./home/Section5";
import Section6 from "./home/Section6";
import Blogs from "./Blogs/Blogs";

import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Line1 from "./components/Line1";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/Admin/NotFound";
import Homee from "./components/Admin/Homee";
import Appoinments from "./components/Admin/Appoinments/OverviewAppoinments";
import TodayTAppoinments from "./components/Admin/Appoinments/TodayTAppoinments";
import YesterdayTAppoinments from "./components/Admin/Appoinments/YesterdayTAppoinments";
import TotalAppoinments from "./components/Admin/Appoinments/TotalAppoinments";
import TotalRegisteredPatient from "./components/Admin/Appoinments/TotalRegisteredPatient";
import Hospitals from "./components/Admin/Hospitals/Hospitals";

import AddHospital from "./components/Admin/Hospitals/AddHospital";
import AddDepartment from "./components/Admin/Hospitals/AddDepartment";
//import Doctor from "./components/Doctors/Doctor";
import Overview from "./components/Admin/Overview";
import Login from "./components/Admin/Login";
import Appoinment from "./components/Admin/Appoinments/Appoinment";
import Record from "./components/Record";
import AllHospitals from "./components/Admin/Hospitals/AllHospitals";
import AllDoctors from "./components/Admin/Hospitals/AllDoctors";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AllDepartment from "./components/Admin/Hospitals/AllDepartment";

function App() {
  const user = {
    firstname: "nemo",
    role: "admin",
  };

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

    setcurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      {user.role === "admin" ? (
        <BrowserRouter>
          <Homee />
          <Switch>
            <Route path="/404">
              {" "}
              <NotFound />{" "}
            </Route>
            <Route path="/Admin">
              <Admin />

              <Homee />
            </Route>
            <Route path="/Homee">
              <Homee />{" "}
            </Route>
            <Route path="/Appoinments">
              <Appoinments />{" "}
            </Route>
            <Route path="/TodayTAppoinments/">
              <TodayTAppoinments />
            </Route>
            <Route path="/yesterdayTotalAppoinments">
              <YesterdayTAppoinments />
            </Route>
            <Route path="/total Appoinments">
              <TodayTAppoinments />
            </Route>
            <Route path="/TotalRegisteredPatient">
              <TotalRegisteredPatient />
            </Route>
            {/* <Route path="/Departments/:id">
              <Departments />
            </Route> */}
            {/* <Route path="/Doctors/:id">
              <Doctors />
            </Route> */}
            <Route path="/AddHospital">
              <AddHospital />
            </Route>
            <Route path="/AddDepartment">
              <AddDepartment />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            {/* <Route path="/Doctor">
              <Doctor />
            </Route> */}
            <Route path="/Appoinment">
              <Appoinment />
            </Route>
            <Route path="/Record">
              <Record />
            </Route>
            <Route path="/AllHospitals">
              <AllHospitals />
            </Route>
            <Route path="/AllDepartment">
              <AllDepartment />
            </Route>
            <Route path="/AllDoctors">
              <AllDoctors />
            </Route>
            <Route path="/AdminDashboard">
              <AdminDashboard />
            </Route>
            <Route path="/Line1/:id">
              <Line1 />
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <HeaderUser />
          <Switch>
            <Route path="/home">
              <Section1 />
              <Section4 />
              <Section5 />
              <Section2 />
              <Section6 />
            </Route>
            <Route path="/HospitalsUser">
              {" "}
              <HospitalsUser />
            </Route>
            {/* <Route path="/DepartmentsUser/:id">
              <DepartmentsUser />
            </Route> */}
            <Route path="/DoctorsUser/:id">
              <DoctorsUser />
            </Route>

            <Route path="/Appiontment">
              {" "}
              <Appiontment />{" "}
            </Route>
            <Route path="/DepartmentCards">
              <DepartmentCards />
            </Route>
            <Route path="/Contact">
              <Section6 />
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
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
