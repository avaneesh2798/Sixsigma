import React from "react";


const Client = ({ count, images, content }) => {
  return (
    <>
      <div className="ourclients">
        <div className="client">
          <div className="client1">
            <div className="client2">
              <h4>{count}</h4>
              <img src={images} alt="" />
            </div>
            <div className="letter">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
