import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function AddBlog() {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  function saveBlog() {
    //code
    axios
      .post(`http://localhost:8000/api/blog`, {
        title,
        description,
      })

      .then((res) => {
        console.log(res);
        toast.success("Thanks for the blog");
      })
      .catch((e) => toast.error(e.message.response));
  }
  return (
    <div
      className="boddy"
      style={{
        width: "700px",
        alignItems: "center",
        marginLeft: "340px",
      }}
    >
      <div id="envelope">
        <form>
          <div className="headder">
            <h2>Add Blog</h2>
          </div>
          <br />
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              onChange={(e) => settitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="describtion"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <br />
          <br />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => saveBlog()}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
