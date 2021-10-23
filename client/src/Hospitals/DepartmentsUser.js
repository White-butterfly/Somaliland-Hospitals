import React from "react";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DepartmentCards from "./DepartmentCards";
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

function DepartmentsUser() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [info, setinfo] = useState(false);

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

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibmVtbzEyIiwiYSI6ImNrdXhxdG05aTRndWcycG82OTd4M216enAifQ.A8O4oNRUEKQPa32yaH74eQ"
        mapStyle="mapbox://styles/nemo12/ckuxt0r1p8kam18qvjpxydf4d"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>

      <div>
        {info ? (
          <button
            style={{
              backgroundColor: "red",
              width: " 100px",
              height: "29px",
              marginLeft: "30px",
              borderRadius: "7px",
              color: "white",
            }}
            onClick={() => setinfo(false)}
          >
            Close
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "blue",
              width: " 150px",
              height: "35px",
              marginLeft: "30px",
              borderRadius: "7px",
              color: "white",
              marginTop: "20px",
              fontSize: "20px",
            }}
            onClick={() => setinfo(true)}
          >
            Appiontment
          </button>
        )}
      </div>
      {info && form()}
      <div className="flex">
        <img
          src="https://th.bing.com/th/id/R.cbfb18c509cad24d89d664b2d6f44ba8?rik=oMcrX5zThM75hA&pid=ImgRaw&r=0"
          className="hos-img"
        />
        <img
          className="hos-img"
          src="https://th.bing.com/th/id/R.9e27ac44ce28c62b6eedbdca3858d342?rik=Jm9b13yLyN4Ztw&pid=ImgRaw&r=0"
        />
      </div>
      <DepartmentCards />
    </>
  );
  function form() {
    return <Appiontment />;
  }
}

export default DepartmentsUser;
