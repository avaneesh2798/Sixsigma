import React from "react";
import waves from "./images/waves.svg";
import logo from "./images/logo-lg.png";
import facebook from "./images/facebook.svg";
import gmail from "./images/gmail.svg";
import twitter from "./images/twitter.svg";
import linkdin from "./images/linkedin.svg";

const Last = () => {
  return (
    <>
      <div className="last">
        <img src={waves} alt="" />
      </div>
      <div className="quick">
        <div className="quick1">
          <div className="firsts">
            <img className="logos" src={logo} alt="" />
            <p>
              SixSigma.co.uk are the UK’s Six Sigma specialists, providing
              professional training for Six Sigma, Lean Six Sigma, Lean and
              Kaizen. We offer classroom, eLearning, onsite and virtual options
              as well as custom business consultancy and improvement programmes.
            </p>
            <img src={facebook} alt="" />
            <img src={gmail} alt="" />
            <img src={twitter} alt="" />
            <img src={linkdin} alt="" />
          </div>
          <div className="seconds">
            <h2>Quick Links</h2>
            <p>testimonials</p>
            <p>clients</p>
            <p>contact us </p>
            <p>blogs</p>
            <p>privacy policy</p>
            <p>cookies</p>
            <p>terms & conditions</p>
          </div>
          <div className="thirds">
            <h2>Courses</h2>
            <p>six sigma green belt</p>
            <p>lean six sigma green belt</p>
            <p>5S Training</p>
            <p>certified kaizen foundation</p>
            <p>certified kaizen practitioner</p>
            <button>Find a course</button>
          </div>
          <div className="fourths">
            <h2>Blogs</h2>
            <div>
              <p>
                Which Game of Thrones Character is the Best Project Manager?
              </p>
              <p>2017-06-16</p>
            </div>
            <div>
              <p>Six Sigma Black Belt Course Information</p>
              <p>2017-03-30</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Last;
