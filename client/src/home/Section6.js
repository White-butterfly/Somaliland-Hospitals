import React from "react";

function Section6() {
  return (
    <div className="NEW-CONTACT">
      <span className="big-circle "></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="forM">
        <div className="contact-infO">
          <h3 className="titlE">Let's get in touch</h3>
          <p className="texT">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="infO">
            <div className="information">
              <img src="img/location.png" className="icoN" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icoN" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icoN" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-mediA">
            <p>Connect with us :</p>
            <div className="social-iconS">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-forM">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="titlE">Contact us</h3>
            <div className="INPUT-CONTAINER">
              <input type="text" name="name" className="inpuT" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="INPUT-CONTAINER">
              <input type="email" name="email" className="inpuT" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="INPUT-CONTAINER">
              <input type="tel" name="phone" className="inpuT" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="INPUT-CONTAINER textarea">
              <textarea name="message" className="inpuT"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btN" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section6;

//https://www.youtube.com/watch?v=rpujWVkmiPE&t=37s
