import React from "react";
import Chart from "./images/Chart1.png";
import call from "./images/call-icon.svg";

const Solution = () => {
  return (
    <>
      <div className="solution">
        <div className="solutionchild">
          <div className="solutionleft">
            <h3>Solutions for business</h3>
            <p>
              We’ll help you find your perfect 6 Sigma training solution. We
              know that the best results require a customised approach. That’s
              why we’re committed to understanding your needs and how your
              business works, before developing relevant training tailored to
              your industry and goals. We can deliver custom Six Sigma and Lean
              solutions onsite at your offices or a venue of your choice,
              covering the topics most important to your organisation.
            </p>
            <p>
              Are you looking for a more substantial training programme? No
              problem, talk to us about what you’re looking for – we can even
              create bespoke content just for you
            </p>
            <div className="getmore">
              <button className="info">Get More Info</button>
            </div>
          </div>
          <div className="solutionright">
            <img src={Chart} alt="" />
          </div>
        </div>
      </div>
      <div className="let_us">
        <div className="know">
          <h2>Let us know what you’re looking for</h2>
          <p>Talk to one of our advisors about your training needs.</p>
        </div>
        <div className="call_us">
          <div className="call_icon">
            <img src={call} alt="" />
          </div>
          <div className="call_num">
            <h2>+442036084550</h2>
            <p>Give us a call</p>
          </div>
        </div>
      </div>
      <div className="sigma">
        <h2>Six Sigma worldwide</h2>
        <p>
          Our Six Sigma, Lean and Kaizen classroom training is available in
          major locations, towns and cities across the UK. Here’s where we get
          the most demand.
        </p>
      </div>
    </>
  );
};

export default Solution;
