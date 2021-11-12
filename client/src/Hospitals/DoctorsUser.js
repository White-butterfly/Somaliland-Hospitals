import React from "react";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function DoctorsUser() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdKeyboardArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const { id } = useParams();
  const [doctor, setdoctor] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/doctor/${id}`).then((res) => {
      console.log(res.data.data);
      setdoctor(res.data.data);
    });
  });
  return (
    <>
      <div className="doctor-silder">
        {/* <Slider {...settings}> */}
        {doctor.map((doctorr) => (
          <div className="containerrr-card ">
            <div className="boxx user">
              <div className="iconn">😊</div>
              <div className="contentt">
                <div className="aa">
                  <div className="bb">
                    <div className="cc">
                      <br />
                      Name:{doctorr.docName}
                      <br />
                      experience: {doctorr.experince}
                      <br />
                      Language: {doctorr.language}
                      <br />
                      Email: {doctorr.email}
                      <br />
                      Hours: {doctorr.hours}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </>
  );
}

export default DoctorsUser;
