import React from "react";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DepartmentCards from "./DepartmentCards";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import { FaRegTimesCircle } from "react-icons/fa";
// import GoogleMapReact from "google-map-react";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

// const defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33,
//   },
//   zoom: 11,
// };
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function DepartmentUser() {
  const { id } = useParams();
  // const [viewport, setViewport] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   width: "100vw",
  //   height: "100vh",
  //   zoom: 10,
  // });

  const [info, setinfo] = useState(false);
  const [addReview, setaddReview] = useState(false);

  return (
    <>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBM-d0ljQBz7kkuh00E_MO3wA0d8dLr5lk" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div> */}

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

      <Link path="https://www.google.com/maps/place/Hargeisa+International+Hospital/@9.5288504,44.0399408,13z/data=!4m9!1m2!2m1!1ssomaliland+hospitals!3m5!1s0x1628c06a83d3712b:0x3d71c410d01746fd!8m2!3d9.528853!4d44.0749544!15sChRzb21hbGlsYW5kIGhvc3BpdGFsc1oWIhRzb21hbGlsYW5kIGhvc3BpdGFsc5IBCGhvc3BpdGFsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5oTldaRVJGRlJFQUU">
        <button>location</button>
      </Link>
      {/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibmVtbzEyIiwiYSI6ImNrdXhxdG05aTRndWcycG82OTd4M216enAifQ.A8O4oNRUEKQPa32yaH74eQ"
        mapStyle="mapbox://styles/nemo12/ckuxt0r1p8kam18qvjpxydf4d"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL> */}
    </>
  );

  function review() {
    return <ReviewForm />;
  }
}

export default DepartmentUser;
