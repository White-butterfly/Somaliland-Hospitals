import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";

function HospitalsUser() {
  const history = useHistory();
  const [hospital, sethospital] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      history.push("/Login");
    }
    axios
      .get(`http://localhost:8000/api/hospital`)
      .then((res) => sethospital(res.data.data));
  }, []);

  return (
    <>
      <div className="hospital">
        <div className="hos-hea">
          <h1
            style={{
              fontSize: "350%",
              marginLeft: "400px",
              color: "blue",
              fontFamily: "Georgia, Times New Roman, Times, serif",
              marginTop: "20px",
            }}
          >
            Best Hospitals in Somaliland{" "}
          </h1>
        </div>
        {/* <div
          className="adminsearch-wrapper"
          style={{
            width: "330px",
            marginLeft: "700px",
            border: "2px solid",
            fontColor: "white",
            placeholder: "searching",
          }}
        >
          <input
            type="search"
            placeholder="Search here"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div> */}
        <div
          class="input-group mb-3"
          style={{
            width: "40%",
            marginLeft: "500px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Searching Cities"
            aria-label="Username"
            onChange={(e) => setsearch(e.target.value)}
          />
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
                  <iframe
                    style={{ height: "100%" }}
                    src={value.location}
                  ></iframe>
                </div>
                <div className="blog-post_info">
                  <h1 className="blog-post_title">{value.name}</h1>

                  <h5>{value.address.city}</h5>

                  <p className="blog-post_text">{value.describtion}</p>

                  <Link
                    to={`DepartmentUser/${value._id}`}
                    className="blog-post_cta"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </>
          ))}

        <div className="hos-sidebar">
          <img
            className="img-hos-sidebar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/820px-Google_Ads_logo.svg.png"
          />
        </div>
        <div className="hos-sidebar" style={{ marginTop: "70%" }}>
          <img
            className="img-hos-sidebar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/820px-Google_Ads_logo.svg.png"
          />
        </div>
        <div className="hos-sidebar" style={{ marginTop: "110%" }}>
          <img
            className="img-hos-sidebar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/820px-Google_Ads_logo.svg.png"
          />
        </div>
      </div>
    </>
  );
}

export default HospitalsUser;
