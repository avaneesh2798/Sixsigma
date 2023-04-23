import React from "react";
import logo from "./images/logo-lg.png";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import anniversery from "./images/21-year.png";
import cart from "./images/fshopping-cart.png";
import callus from "./images/callus.jpg.svg";
import mail from "./images/mail.svg";
import training from './images/bg-dsk.png'

const Header = () => {
  return (
    <>
      <div className="main">
        <nav className="main-nav">
          <div className="logo1">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="text">
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Online Training</li>
              <li>Locations</li>
              <li>Onsite</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="">
                  <BsTelephone />
                </a>
                <span> +442036084550</span>
              </li>
              <li>
                <a href="">
                  <MdEmail />
                </a>
                <span> info@sixsigma.co.uk</span>
              </li>
              <button className="btn">
                Get a Quote
                <span>
                  <FaGreaterThan />
                </span>
              </button>
            </ul>
          </div>
        </nav>
      </div>

      <div className="main2">
        <div class="first">
          <p>Global</p>
          <p>Trusted</p>
          <p>Experienced</p>
        </div>
        <div class="second">
          <p>Monday-Sunday(24 Hours)</p>
          <div className="anniversery">
            <p>Anniversary</p>
            <img src={anniversery} alt="" />
            <p>"Over 120,981 Satisfied customer"</p>
            <div className="cart">
              <img src={cart} alt="" />
              <span>o</span>
            </div>
          </div>
        </div>
      </div>

      <div className="six-sigma">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <div className="logo">
            <img src={callus} alt="" />
          </div>
          <div className="cont">
            <h4>Call us:</h4>
            <p>+442036084550</p>
          </div>
          <div className="mail">
            <img src={mail} alt="" />
          </div>
          <div className="mail1">
            <h4>Send us mail:</h4>
            <p>info@sixsigma.co.uk</p>
          </div>
          <button className="btn1">
            Get a Quote
            <span>
              <FaGreaterThan />
            </span>
          </button>
        </div>
      </div>

 
    </>
  );
};
export default Header;
