import React from "react";

const Worldwide = ({ image, name }) => {
  return (
    <>
      <div className="world">
        <img src={image} alt="" srcset="" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default Worldwide;
