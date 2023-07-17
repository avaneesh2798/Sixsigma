import React from "react";

const Heading = ( {headingss , vir , para , dat , day ,mon , year ,rupees, value , enquiry , timing,days ,view ,book}) => {
  return (
    <>
      <div className="right10">
        <div className="right8">
          <div className="right9">
            <h2>{headingss}</h2>
          </div>
          <div className="leancontent">
            <div className="virtu">
              <h2>{vir}</h2>
              <p>{para}</p>
            </div>
            <div className="virtu2">
              <p>{vir}</p>
            </div>
            <div className="date1">
              <div className="dat_1">
                <p className="dat">{dat}</p>
                <span></span>
                <p className="day">{day}</p>
              </div>

              <div className="dat_2">
                <p className="dat">{mon}</p>
                <span></span>
                <p className="day">{year}</p>
              </div>
            </div>
            <div className="price">
              <p className="price1">{rupees}</p>
              <p className="price2">{value}</p>
            </div>
            <div className="Enquire">
              <button>{enquiry}</button>
            </div>
          </div>
          <div className="border">
            <p></p>
          </div>
          <div className="footer">
            <div className="dur">
              <h5>{timing}</h5>
              <p>{days}</p>
            </div>
            <div className="view">
              <p>{view}</p>
            </div>
            <div className="book">
              <button>{book}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
