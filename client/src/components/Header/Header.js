import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
      <div className="parent">
        <div className="logo">
          <h2>
            Somali<span className="font">Hospitals</span>
          </h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            {/* <li>
              <link to = '/doctor'>Doctor</link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Header
