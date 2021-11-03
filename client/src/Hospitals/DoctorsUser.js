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
      console.log(res);
      setdoctor(res.data.data);
    });
  });
  return (
    <>
      <div className="doctor-silder">
        {/* <Slider {...settings}> */}
        {doctor.map((doctor) => (
          <div className="containerrr-card ">
            <div className="boxx user">
              <div className="iconn">😊</div>
              <div className="contentt">
                <p>{doctor.docName}</p>

                <div className="aa">
                  <div className="bb">
                    <div className="cc">
                      {/* <Link to = {`/Doctors/${department._id}`}><button className="aaa">Read More</button></Link> */}
                      <br />
                      Name:{doctor.email}
                      <br />
                      experience: jjjjjjjjjjjjjjjj
                      <br />
                      Language:aaaaaaaaaaaaaaaaa
                      <br />
                      Email: sssssssssssssssssssssssss
                      <br />
                      Hours: aaaaa
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
