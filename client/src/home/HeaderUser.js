import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

const HeaderUser = () => {
  return (
    <div>
      <div className="parent">
        <div className="logo">
          <h2>
            <span className="logo-h2"> Somali</span>
            <span className="font">Hospitals</span>
          </h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/HospitalsUser">Hospitals</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>

              <Link to="/Appoinment">Appoinment</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          



          </ul>

<<<<<<< HEAD
=======
          
>>>>>>> 73ec41c9d261165f9b28cbf1b47d480eb6bd1ff0
          <div className="log-reg">
            <h2>
              <Link to="/Login" className="h2">
                <MdAccountCircle />
                login
              </Link>
              /
            </h2>

            <h2>
              <Link to="/Register" className="h2">
                Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
