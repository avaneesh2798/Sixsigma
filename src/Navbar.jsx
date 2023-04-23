import React from "react";
import star from "./images/star.png";
import white from "./images/black-courselist.svg";
import yellow from "./images/black-courselist (1).svg";
import green from "./images/white-courselist.svg";
import black from "./images/white-courselist (1).svg";
import logo from "./images/six-sigma-logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav1">
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>online Training</li>
          <li>Locations</li>
          <li>Onsite</li>
          <li>blog</li>
          <li>resources</li>
          <li>about</li>
          <li>carrers</li>
          <li>Contact</li>
        </ul>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <div className="training">
        <div className="content">
          <h3>Six Sigma Training</h3>
          <p>
            We deliver professional Six Sigma courses in over 90 locations
            around the UK. Our modern classrooms are equipped with the latest
            technology to allow you to study Six Sigma and Lean methodologies in
            style and comfort. Alternatively, our Six Sigma online courses let
            you learn in your own time from home.
          </p>
          <div className="text">
            <input type="text" placeholder="search" />
            <button>search</button>
          </div>
          <div className="course">
            <p> Course catalogue </p>
          </div>
        </div>
        <div className="logo2">
          <div className="white">
            <img src={white} alt="" />
            <p>White belt course</p>
          </div>
          <div className="yellow">
            <img src={yellow} alt="" />
            <p>Yellow belt course</p>
          </div>
          <div className="green">
            <img src={green} alt="" />
            <p>Green belt course</p>
          </div>
          <div className="black">
            <img src={black} alt="" />
            <p>Black belt course</p>
          </div>
          <div className="round">
          <img src={logo} alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
