import React from "react";
import recent from "./images/recent1.jpg";
import recent1 from "./images/recent2.jpg";
import recent2 from "./images/recent3.jpg";

const Recentblog = () => {
  return (
    <>
      <div className="val">
        <button>View all Locations</button>
      </div>
      <div className="blog">
        <div className="recent">
          <h2>Recent blogs</h2>
          <div className="green2">
            <p></p>
          </div>
          <div className="yellow2">
            <p></p>
          </div>
          <div className="recent1">
            <img src={recent} alt="" />
            <p>Which Game of Thrones Character is the Best Project Manager?</p>
            <div className="read">
              <h6>2017-06-16</h6>
              <h6>Read more</h6>
            </div>
          </div>
          <p className="yellow3"></p>
          <div className="recent1">
            <img src={recent1} alt="" />
            <p>Which Game of Thrones Character is the Best Project Manager?</p>
            <div className="read">
              <h6>2017-06-16</h6>
              <h6>Read more</h6>
            </div>
          </div>
          <p className="yellow3"></p>
          <div className="recent1">
            <img src={recent2} alt="" />
            <p>Which Game of Thrones Character is the Best Project Manager?</p>
            <div className="read">
              <h6>2017-06-16</h6>
              <h6>Read more</h6>
            </div>
          </div>
          <p className="yellow3"></p>
        </div>
        <div className="val1">
        <button>View all Locations</button>
      </div>
      </div>
    </>
  );
};

export default Recentblog;
