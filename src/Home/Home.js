import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Design1 from "./Design1";

function Home() {
  const { user } = useUserContext();

  return (
    <>
      <div className="home__container">
        <div className="home__text-container">
          <h1 className="home__heading">Best online Resume builder</h1>
          <h1 className="home__heading">
            Create a Professional <span>Resume for Free.</span>
          </h1>
          <p className="home__text">
            Resume writing can be stressful, confusing, and time-consuming if
            you do it all on your own. With Resume Builder, it's quick, pain
            free, and effective.
          </p>
          <Link to={user ? "resume" : "sign-up"}>
            <button className="home__button">CREATE YOUR RESUME NOW</button>
          </Link>
        </div>
        <div className="home__image-container">
          <img
            className="home__mainImg"
            src="./images/resume-builder.png"
          ></img>
          <img className="home__svg-img" src="./images/wave.svg"></img>
        </div>
      </div>

      <div>
        <Design1/>
      </div>
    </>
  );
}

export default Home;
