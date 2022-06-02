import React from "react";
import design11 from "../images/design11.svg";
import design21 from "../images/design21.svg";
import design31 from "../images/design31.svg";
import "./Design1.scss"

const Design1 = () => {
  return (
    <>
      <div className="design1__container">
        <div className="design1__firstContainer">
          <img src={design11} alt="" />
          <h6 className="desig1__heading">Make a resume that wins interviews</h6>
          <p className="desig1__paragraph">
            Use our resume maker to tell a professional story that engages
            recruiters, hiring managers and even CEOs.
          </p>
        </div>
        <div className="design1__secondContainer">
          <img src={design21} alt="" />
          <h6 className="desig1__heading">Resume writing made easy</h6>
          <p className="desig1__paragraph">
          Resume writing has never been this effortless. Visual designs and more - all already integrated into the resume maker. Just fill in your details.
          </p>
        </div>
        <div className="design1__thirdContainer">
          <img src={design31} alt="" />
          <h6 className="desig1__heading">Beautiful ready-to-use templates</h6>
          <p className="desig1__paragraph">
          Win over employers and recruiters by using one of our elegant, professionally-designed resume templates..
          </p>
        </div>
      </div>
    </>
  );
};

export default Design1;
