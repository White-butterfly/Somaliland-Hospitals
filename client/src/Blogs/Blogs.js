import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Blogs() {
  const [id, setId] = useState("");
  const [Blog, setBlog] = useState([]);
  const [hospital, sethospital] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/blog/${id}`)
      .then((res) => setBlog(res.data.data))

      .catch((e) => console.log(e.response));
  }, []);

  return (
    <div className="bolgs">
      <div className="content clearfix">
        <div className="main-content">
          <div
            className=""
            style={{ color: "#000", background: "white", fontSize: "80%" }}
          >
            <h2 style={{ fontSize: "200%" }}>Recent Blogs</h2>
            {/* <button>
              See All <span className="las la-arrow-right"></span>{" "}
            </button> */}
          </div>

          {Blog.map((Blogs) => (
            <>
              <div
                className="cardd mb-3"
                style={{
                  color: "#000",
                  border: "1px solid #000",
                  height: "250px",
                  borderRadius: "none",
                  marginRight: "600px",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      style={{
                        height: "250px",
                      }}
                      src="https://th.bing.com/th/id/OIP.a5YOm_1N-oe-O025Jw4PTQHaE8?w=265&h=180&c=7&r=0&o=5&pid=1.7"
                      class="img-fluid rounded-start "
                      alt=""
                    />
                  </div>
                  <div className="col-md-8">
                    <div>
                      <h1
                        style={{
                          marginLeft: "100px",
                          marginTop: "14px",
                          color: "blue",
                        }}
                      >
                        Haldoor Hospital
                      </h1>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{Blogs.title}</h2>

                      <p className="card-text">{Blogs.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="sidebar">
          <img src="https://www.seomarket.com.tr/tr/wp-content/uploads/2020/07/google-ads-yonetimi.jpg" />
          <img src="https://www.seomarket.com.tr/tr/wp-content/uploads/2020/07/google-ads-yonetimi.jpg" />
          <img src="https://www.seomarket.com.tr/tr/wp-content/uploads/2020/07/google-ads-yonetimi.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
