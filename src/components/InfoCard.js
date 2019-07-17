import React from "react";

// function that returns the component

const InfoCard = ({ info }) => {
  return (
    <>
      <div className="info-container">
        <h1 className="title">{info.title}</h1>
        <p className="date">{info.date}</p>
        <p className="explain">{info.explanation}</p>
      </div>
    </>
  );
};

export default InfoCard;
