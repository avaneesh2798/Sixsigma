import React from "react";
import bespoke from "./images/bespoke.png";
import best from "./images/bestquality.png";
import lowest from "./images/lowestprice.png";
import expert from "./images/experttrainers.png";
import training from './images/training-bg.png'

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="why">
          <h3>Why train with us?</h3>
          <p>
            At Six Sigma, we strive to offer the best training at the lowest
            price possible. Over 21 years of business, we have continued to
            provide high-quality training solutions to thousands of companies
            and businesses across the UK. Our trainers are industry experts who
            are highly experienced in planning and delivering quality management
            solutions using Six Sigma, Lean and Kaizen methodologies, and our
            courses are fully customisable to meet budgets, training needs and
            duration preferences. Our goal is to give you the best experience in
            the industry, which is why we have made our courses customisable for
            you, allowing you to ensure that you get the course that you
            require.
          </p>
        </div>
        <div className="innercard">
          <div className="bespoke">
            <img src={bespoke} alt="" />
            <h3>Bespoke solutions</h3>
            <p>
              we work with your business to provide the perfect learning
              solution for your needs
            </p>
          </div>
          <div className="bespoke">
            <img src={best} alt="" />
            <h3>Bespoke solutions</h3>
            <p>
              we work with your business to provide the perfect learning
              solution for your needs
            </p>
          </div>
          <div className="bespoke">
            <img src={lowest} alt="" />
            <h3>Bespoke solutions</h3>
            <p>
              we work with your business to provide the perfect learning
              solution for your needs
            </p>
          </div>
          <div className="bespoke">
            <img src={expert} alt="" />
            <h3>Bespoke solutions</h3>
            <p>
              we work with your business to provide the perfect learning
              solution for your needs
            </p>
          </div>
        </div>
        <div className="six1">
          <button>View dates and prices</button>
        </div>
      </div>

      <div className="training2">
        <div className="sigma">
          <h2>Lean Six Sigma training courses</h2>
        </div>
        <div className="sigmacontent">
          <div className="left">
            <h3>What is Lean Six Sigma?</h3>
            <p className="border1"> </p>
            <p className="border2"></p>
            <p>
              Lean Six Sigma improves business processes by removing waste and
              reducing defects or mistakes. Using proven Japanese-inspired
              techniques to manufacture products and services which are better
              aligned to customer needs, Lean Six Sigma can help any business
              produce better work, improve profitability and reduce costs.
            </p>
            <p className="based">The <strong> methodology </strong> is based around 8 types of waste:</p>
            <div className="list">
              <ul>
                <li>Defects</li>
                <li>Inventory</li>
                <li>Non-Utilised Talents</li>
                <li>Waiting</li>
                <li>Overproduction</li>
                <li>Transportation</li>
                <li>Extra Processing</li>
                <li>Motion</li>
              </ul>
            </div>
          </div>
          <div className="right1">
            <img src={training} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
