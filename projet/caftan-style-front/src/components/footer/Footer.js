import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="follow-div">
        {" "}
        <h1>Suivez-nous</h1>
        <ul>
          <li>
            <a href="#">
              <i class="facebook"></i>Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i class="twitter"></i>twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i class="Youtube"></i>Youtube
            </a>
          </li>
          <li>
            <a href="#">
              <i class="Instagram"></i>Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-div">
        <h1>Contacts</h1>
        <ul>
          <li>
            <a href="#">
              <i class="facebook"></i>Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i class="twitter"></i>twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i class="Youtube"></i>Youtube
            </a>
          </li>
          <li>
            <a href="#">
              <i class="Instagram"></i>Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
