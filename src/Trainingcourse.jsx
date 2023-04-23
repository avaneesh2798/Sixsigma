import React from "react";
import chart from "./images/Home1571398044.png";
import circle from "./images/circle.png";
import arrow from './images/right-arrow.svg'


const Trainingcourse = () => {
  return (
    <>
      <div className="trainingcourse">
        <h3>Six Sigma training courses</h3>
        <p>
          We offer four types of Six Sigma certification across the UK: Six
          Sigma Yellow Belt, Six Sigma Green Belt, Six Sigma Black Belt and Six
          Sigma Master Black Belt. Yellow Belt provides a base level of
          knowledge, while Green and Black Belt build on this to provide
          guidance on how to launch and lead Six Sigma projects. All courses
          include exams. Six Sigma methodology is the key to enhancing a
          well-organised, cost-effective business and to help you achieve
          excellence when managing a team.
        </p>
      </div>
      <div className="chart">
          <div className="circle">
            <div className="circlimg">
              <img className="circle1" src={circle} alt="" />
              <img className="chart1" src={chart} alt="" />
            </div>
          </div>
        <div className="chartright">
          <div className="chartright1">
            <a href="" className="first1">
              Six sigma green belt
              <img src={arrow} className="arrow" alt="" />

            </a>
            <a href="" className="first1">
              Six sigma Yellow belt
              <img src={arrow} className="arrow" alt="" />
            </a>
            <a href="" className="first1">
              Six sigma Black belt
              <img src={arrow} className="arrow" alt="" />
            </a>
            <a href="" className="first1">
              Certified lean practioner
              <img src={arrow} className="arrow" alt="" />
            </a>

            <a href="" className="first1">
              Lean six sigma green belt
              <img src={arrow} className="arrow" alt="" />
            </a>
            <a href="" className="first1">
              Lean six sigma Yellow belt
              <img src={arrow} className="arrow" alt="" />
            </a>
            <a href="" className="first1">
              Introduction to lean
              <img src={arrow} className="arrow" alt="" />
            </a>
            <a href="" className="first1">
              Certified kaizen practioner
              <img src={arrow} className="arrow" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="six">
        <p>Six Sigma DMAIC</p>
        <button>View all courses</button>
      </div>
    </>
  );
};

export default Trainingcourse;
