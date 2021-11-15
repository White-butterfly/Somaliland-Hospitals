import React from "react";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DepartmentCards from "./DepartmentCards";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";

function DepartmentUser() {
  const { id } = useParams();
  const [addReview, setaddReview] = useState(false);

  return (
    <>
      <DepartmentCards />
      <Reviews />

      {addReview && review()}
      {addReview ? (
        <FaRegTimesCircle
          style={{
            backgroundColor: "red",
            fontSize: "20px",
            marginLeft: "20%",
            borderRadius: "7px",
            color: "white",
          }}
          onClick={() => setaddReview(false)}
        />
      ) : (
        <button
          style={{
            backgroundColor: "blue",
            width: " 150px",
            height: "35px",
            marginLeft: "540px",
            borderRadius: "7px",
            color: "white",
            marginTop: "20px",
            fontSize: "20px",
            marginBottom: "20px",
          }}
          onClick={() => setaddReview(true)}
        >
          Add review
        </button>
      )}
    </>
  );

  function review() {
    return <ReviewForm />;
  }
}

export default DepartmentUser;
