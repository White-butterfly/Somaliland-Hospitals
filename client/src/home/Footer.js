import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Somaliland<span>Hospitals</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
            <a href="#">Blog</a>
          </p>

          <p className="footer-company-name">
            Copyright © 2021 <strong>S/LandHospitals</strong> All rights
            reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>somaliland</span>
              Hargeisa
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+063*******89</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">
                s/landhospitals@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the website</span>
            <strong>Somaliand Hospitals</strong>This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first
            line of Lorem IpsumThis book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
