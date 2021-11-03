import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

function Section6() {
  const [userName, setuserName] = useState("");
  const [phone, setphone] = useState(0);
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const { id } = useParams();

  function saveContact() {
    //code
    axios
      .post(`http://localhost:8000/api/contact`, {
        userName,
        phone,
        email,
        message,

        hospital: id,
      })

      .then((res) => toast.success("Thanks for the contact"))
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div className="NEW-CONTACT">
      <span className="big-circle "></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="forM">
        <div className="contact-infO">
          <h3 className="titlE">Somaliland Hospitals</h3>
          <p className="texT">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="infO">
            <div className="information">
              <img src="img/location.png" className="icoN" alt="" />
              <FaMapMarkerAlt className="icon-contact" />
              <p>Hargeisa, Somaliland</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icoN" alt="" />
              <FaPaperPlane className="icon-contact" />
              <p>S/landhospitals66@gmail.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icoN" alt="" />
              <FaPhone className="icon-contact" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-mediA">
            <p>Connect with us :</p>
            <div className="social-iconS">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form>
            <h3 className="titlE">Contact us</h3>
            <div className="INPUT-CONTAINER">
              <input
                type="text"
                name="name"
                className="inpuT"
                onChange={(e) => setuserName(e.target.value)}
              />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="INPUT-CONTAINER">
              <input
                type="email"
                name="email"
                className="inpuT"
                onChange={(e) => setemail(e.target.value)}
              />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="INPUT-CONTAINER">
              <input
                type="tel"
                name="phone"
                className="inpuT"
                onChange={(e) => setphone(e.target.value)}
              />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="INPUT-CONTAINER textarea">
              <textarea
                name="message"
                className="inpuT"
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input
              type="submit"
              value="Send"
              className="btN"
              onClick={() => saveContact()}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section6;

//https://www.youtube.com/watch?v=rpujWVkmiPE&t=37s
