import React from "react";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import { toast } from "react-toastify";
function MyReviews() {
  const history = useHistory();
  var id = "6191f51925fc20fe991f771f";
  const [review, setreview] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/review/${id}`).then((res) => {
      setreview(res.data.reviews);
      console.log("Review", res);
    });
  });

  function delReview(id) {
    axios
      .delete(`http://localhost:8000/api/review/${id}`)
      .then(() => {
        toast.success("Review successfully deleted");
        history.push("/MyReviews");
      })
      .catch((e) => toast.error(e.response.data.message));
  }
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
          <button
            className="btn btn-primary"
            onClick={() => delReview(review._id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyReviews;
