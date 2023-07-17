import React from "react";
import virtual from "./images/virtual1.svg";
import classroom from "./images/classroom-white.svg";
import online from "./images/online-white.svg";
import onsite from "./images/inhouse-white.svg";

const Trainingcalender = () => {
  return (
    <>
      <div className="calender">
        <div className="calenderchild">
          <div className="headin">
            <h1>Six Sigma training calendar</h1>
          </div>
          <div className="selector">
            <div className="selectors">
              <div className="courses">
                <p>Select Your Course</p>
                <select name="" id="">
                  <option value="">Select your course :</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                </select>
              </div>
              <div className="Location">
                <p>Choose your location</p>
                <select name="" id="">
                  <option value="">Choose your location:</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                </select>
              </div>
              <div className="courses">
                <p>Choose delivery format</p>
                <select name="" id="">
                  <option value="">Choose delivery format :</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                  <option value="">Lean six sigma green belt</option>
                </select>
              </div>
              <button className="go">GO</button>
            </div>
          </div>

          <div className="main3">
            <div className="trainingmode">
              <div className="mode">
                <div className="modes">
                  <h5>Select modes of training</h5>
                </div>
                <div className="one">
                  <div className="virtual">
                    <img src={virtual} alt="" />
                    <p>Virtual</p>
                  </div>
                  <div className="classroom">
                    <img src={classroom} alt="" />
                    <p>Classroom</p>
                  </div>
                </div>
                <div className="two">
                  <div className="online">
                    <img src={online} alt="" />
                    <p>Online</p>
                  </div>
                  <div className="onsite">
                    <img src={onsite} alt="" />
                    <p>Onsite</p>
                  </div>
                </div>
              </div>
              <div className="guarantee">
                <h2>our price guarantee</h2>
                <p>
                  Looking for the Best Price to fulfil a training needs for your
                  company and employees?
                </p>
                <button>Get more info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trainingcalender;
