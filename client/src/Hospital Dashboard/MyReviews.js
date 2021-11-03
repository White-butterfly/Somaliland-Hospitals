import React from "react";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MyReviews() {
  var id = "617f1c2059fae044a0883111";
  const [review, setreview] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/review/${id}`)
      .then((res) => setreview(res.data.reviews));
  });

  return (
    <div className="testimonials">
      {/* HEADING */}
      <div className="testimonial-heading">
        <span>Comments</span>
        <h1>Pateint Say</h1>
      </div>
      {review.map((review) => (
        <div
          className="testimonial-box-container "
          style={{ marginLeft: "20%" }}
        >
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src=" https://th.bing.com/th/id/OIP.IA73K-jpjh4USDQYydWOdgHaEK?w=185&h=104&c=7&r=0&o=5&pid=1.7" />
                </div>
                <div className="name-user">
                  <h2>
                    {review.patientName}({review.age}year)
                  </h2>
                  <span>{review.country}</span>
                </div>
              </div>
              <div className="reviews">
                <MdStar
                  className={
                    review.rating >= 1 ? "review-star star" : "review-star"
                  }
                />
                <MdStar
                  className={
                    review.rating >= 2 ? "review-star star" : "review-star"
                  }
                />
                <MdStar
                  className={
                    review.rating >= 3 ? "review-star star" : "review-star"
                  }
                />
                <MdStar
                  className={
                    review.rating >= 4 ? "review-star star" : "review-star"
                  }
                />
                <MdStar
                  className={
                    review.rating >= 5 ? "review-star star" : "review-star"
                  }
                />
              </div>
            </div>
            <div className="client-comment">
              <p>{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyReviews;
