import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdStar } from "react-icons/md";

function HospitalsUser() {
  const [hospital, sethospital] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital`)
      .then((res) => sethospital(res.data.data));
  }, []);

  return (
    <>
      <div className="hospital">
        <div className="hos-head">
          <h1>Best Hospitals in Somaliland </h1>
        </div>
        <div className="flex search">
          <input
            className="input-hos"
            type="text"
            placeholder="searching city"
            onChange={(e) => setsearch(e.target.value)}
          />
          {/* <button className="search-btn">search</button> */}
        </div>

        {hospital
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.address.city.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value) => (
            <>
              <div className="blog-post">
                <div className="blog-post_img">
                  <img src="https://th.bing.com/th/id/OIP.RkQHODCerr-9V32zam2aDwHaEc?w=300&h=180&c=7&r=0&o=5&pid=1.7" />
                </div>
                <div className="blog-post_info">
                  <div className="blog-post_date">
                    <span>october 25 2021</span>
                  </div>
                  <h1 className="blog-post_title">{value.name}</h1>

                  <h5>{value.address.city}</h5>

                  <p className="blog-post_text">
                    ullstack React Book. This Google Map React component library
                    was built alongside the blog post How to Write a Google Maps
                    React Component
                  </p>
                  <div className="stars">
                    <MdStar style={{ color: "yellow" }} />
                    <MdStar style={{ color: "yellow" }} />
                    <MdStar style={{ color: "yellow" }} />
                    <MdStar style={{ color: "yellow" }} />
                    <MdStar />
                  </div>
                  <Link
                    to={`DepartmentsUser/${value._id}`}
                    className="blog-post_cta"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </>
          ))}

        <div className="hos-sidebar">
          <h1>⌛Filter</h1>
          <div className="filter-list">
            <ul>
              <select>
                <h2>Hospitals</h2>
                <option>x-ray</option>
                <option>dentist</option>
                <option>neurology</option>
              </select>
              <select>
                <option>department</option>
                <option>x-ray</option>
                <option>dentist</option>
                <option>neurology</option>
              </select>
              <select>
                <option>Doctors</option>
                <option>x-ray</option>
                <option>dentist</option>
                <option>neurology</option>
              </select>
              <select>
                <option>Expirence</option>
                <option>5 years</option>
                <option>8 years</option>
                <option>1 years</option>
              </select>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HospitalsUser;
