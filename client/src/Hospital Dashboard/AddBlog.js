import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function AddBlog() {
  const { id } = useParams();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");

  function saveBlog() {
    //code
    axios
      .post(`http://localhost:8000/api/blog`, {
        title,
        description,
        image,
      })

      .then((res) => toast.success("Thanks for the blog"))
      .catch((e) => toast.error(e.message.response));
  }
  return (
    <div style={{ marginLeft: "500px" }}>
      <h1>ADD BLOGS</h1>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => settitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="describtion"
        onChange={(e) => setdescription(e.target.value)}
      />
      <br />
      <br />
      <input
        type="file"
        placeholder="image"
        onChange={(e) => setimage(e.target.files[0])}
      />
      <br />
      <br />
      <button onClick={() => saveBlog()}>post</button>
    </div>
  );
}

export default AddBlog;
