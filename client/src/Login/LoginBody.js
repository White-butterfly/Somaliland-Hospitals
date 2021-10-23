import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginBody() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function login() {
    //code

    axios
      .post("http://localhost:8000/api/user/signUp", user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("User Logged In");
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div>
      {
        <div className="containerr">
          <center>
            <b className="title label">Login</b>
          </center>
          <form action="#" id="login-form">
            <div className="user-details">
              <div className="input-box">
                <span className="text">UserName</span>
                <input
                  type="text"
                  className="input-field"
                  name="username"
                  id="username"
                  placeholder="UserName"
                  autocomplete="off"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />

                <span className="line"></span>
              </div>
              <div className="input-box">
                <span className="text">Password</span>
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autocomplete="off"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />

                <span className="line"></span>
              </div>
              <div className="input-box">
                <input
                  type="checkbox"
                  checked
                  name="rememberMe"
                  id="rememberMe"
                />
                <b className="label">Remember Me</b>
              </div>

              <div className="button">
                <input type="button" value="Login" onClick={() => login()} />
              </div>
            </div>
            <div className="footerr">
              <center>
                <span>
                  <b className="label">OR</b>
                </span>
              </center>
              <center>
                <Link to="/Register">
                  <button className="register">Register</button>
                </Link>
              </center>
              <div className="social-media-icons">
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
              </div>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default LoginBody;
