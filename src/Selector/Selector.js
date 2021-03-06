import React from "react";
import "./Selector.css";
import { Link } from "react-router-dom";

export default function Selector() {
  return (
    <>
      <div className="selector-colored">
        <h1 className="selector-heading">Select Resume Template</h1>
        <p className="selector-p">
          " We have some of the best single page resume Templates "
        </p>
      </div>
      <div className="selector__templates">
        <div className="selector_img">
          <Link to="/template6">
            <img
              className="image-selector"
              src="./images/template5.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="selector_img">
          <Link to="/template4">
            <img
              className="image-selector"
              src="./images/template4.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="selector_img">
          <Link to="/template2">
            <img
              className="image-selector"
              src="./images/template2.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="selector_img">
          <Link to="/template3">
            <img
              className="image-selector"
              src="./images/template3.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="selector_img">
          <Link to="/template1">
            {" "}
            <img
              className="image-selector"
              src="./images/template1.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="selector_img">
          <Link to="/template5">
            {" "}
            <img
              className="image-selector"
              src="./images/template5.png"
              alt=""
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
