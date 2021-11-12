import React from "react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUser,
  FaRegSmileBeam,
  FaProcedures,
  FaBuilding,
} from "react-icons/fa";

function Section4() {
  const [hospital, sethospital] = useState([]);
  const [department, setdepartment] = useState([]);
  const [doctor, setdoctor] = useState([]);
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hospital`)
      .then((res) => sethospital(res.data.data));

    axios
      .get(`http://localhost:8000/api/Department`)
      .then((res) => setdepartment(res.data.data));

    axios
      .get(`http://localhost:8000/api/doctor`)
      .then((res) => setdoctor(res.data.data));

    axios
      .get(`http://localhost:8000/api/user`)
      .then((res) => setuser(res.data.data));
  }, []);

  return (
    <div>
      {/* <!-- counter section starts  --> */}

      <div class="counter-num">
        <div class="container-counter-num">
          <div class="box-container">
            <div class="box" data-aos="fade-up">
              <FaBuilding
                style={{ color: "blue", width: "60px", height: "30px" }}
              />
              <CountUp
                start={0}
                end={hospital.length}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>+</span>
              </CountUp>
              <h3>Hospitals</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaProcedures
                style={{ color: "blue", width: "50px", height: "30px" }}
              />{" "}
              <CountUp
                start={0}
                end={department.length}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>+</span>
              </CountUp>
              <h3>Departments</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaUser
                style={{ color: "blue", width: "60px", height: "30px" }}
              />
              <CountUp
                start={0}
                end={doctor.length}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>+</span>
              </CountUp>
              <h3>Doctors</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaRegSmileBeam
                style={{ color: "blue", width: "50px", height: "30px" }}
              />{" "}
              <CountUp
                start={0}
                end={user.length}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>+</span>
              </CountUp>
              <h3>happy patients</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- counter section ends --> */}
    </div>
  );
}

export default Section4;
