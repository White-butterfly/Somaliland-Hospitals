import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  function signUp() {
    //code
    axios
      .post("http://localhost:8000/api/user", user)
      .then(
        (res) => toast.success("User created successfully"),
        history.push("/Login")
      )
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <div
        className="containerrr"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div className="tittlee">Registration</div>
        <form action="#" id="reg-from" name="reg-from">
          <div className="user-details">
            <div className="input-boxx">
              <input
                type="text"
                name="email"
                id="email"
                autocomplete="off"
                placeholder="example"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label className="label" for="email">
                E-Mail
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="off"
                placeholder="example"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <label className="label" for="username">
                User Name
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="off"
                placeholder="example"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label className="label" for="password">
                Password
              </label>
            </div>

            <div
              className="buttonn"
              style={{ width: "60%", marginLeft: "120px" }}
            >
              <input type="submit" value="Register" onClick={() => signUp()} />
            </div>
          </div>

          <div className="footerrr">
            <div className="login">
              <Link to="/Login">Login</Link>
            </div>
            <div className="social-media-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
