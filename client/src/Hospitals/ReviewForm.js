import React from "react";
import { MdStar } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ReviewForm() {
  const [patientName, setpatientName] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setreview] = useState("");
  const [country, setcountry] = useState("");
  const [age, setage] = useState("");

  function saveReview({ hospitalId }) {
    //code
    axios
      .post(`http://localhost:8000/api/review`, {
        patientName,
        rating,
        review,
        country,
        age,
        hospital: hospitalId,
      })

      .then(() => toast.success("Thanks for the review"))
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div style={{ width: "50%", marginLeft: "30%", border: "1px solid" }}>
        <h1
          style={{
            width: "50%",
            marginLeft: "30%",
            color: "#000",
            fontSize: "36px",
          }}
        >
          {" "}
          Add Review
        </h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setpatientName(e.target.value)}
          />
          <label for="floatingInput">Patient Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setage(e.target.value)}
          />
          <label for="floatingInput">age</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com "
            onChange={(e) => setcountry(e.target.value)}
          />
          <label for="floatingInput">Patient country</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="review "
            onChange={(e) => setreview(e.target.value)}
          />
          <label for="floatingPassword">Review</label>
        </div>

        <div className="review-stars flex">
          <h4>Rating</h4>
          <div style={{ marginLeft: "47%" }}>
            <MdStar
              className={rating >= 1 ? "review-star star" : "review-star"}
              onClick={() => setRating(1)}
            />
            <MdStar
              className={rating >= 2 ? "review-star star" : "review-star"}
              onClick={() => setRating(2)}
            />
            <MdStar
              className={rating >= 3 ? "review-star star" : "review-star"}
              onClick={() => setRating(3)}
            />
            <MdStar
              className={rating >= 4 ? "review-star star" : "review-star"}
              onClick={() => setRating(4)}
            />
            <MdStar
              className={rating >= 5 ? "review-star star" : "review-star"}
              onClick={() => setRating(5)}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        style={{
          width: "10%",
          marginLeft: "47%",
          border: "1px solid",
          marginTop: "40px",
          marginBottom: "20px",
        }}
        onClick={() => saveReview()}
      >
        Primary
      </button>
    </>
  );
}

export default ReviewForm;
