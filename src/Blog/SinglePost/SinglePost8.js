import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost8() {
  return (
    <div className="singlePost__blog">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www.heritagelawnskc.com/wp-content/uploads/2016/05/Sprinkler-System-1-750x501.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Simple Automatic Irrigation with Sprinkler System
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Tanja Folnovic</b>
          </span>
          <span>6 hours ago</span>
        </div>
        <div className="singlePost__container">
          <p className="singlePostDesc">
            The sprinkler irrigation system is a crop irrigation method similar
            to rainfall. The system distributes water over the field surface by
            spraying it into the air and allowing it to fall on the soil like,
            similar to that of rain.
            <br />
            <br />
            By spraying the water through small nozzles on the lateral pipe, the
            system provides a water rate according to crop needs. Moreover, the
            main purpose of a sprinkler system is to uniformly apply water by
            broadcasting in well-defined patterns.
          </p>

          <img
            className="singlepostDesc_img"
            src="https://blog.agrivi.com/media/90685/web-940-2.jpg"
            alt=""
          />
          <h2 className="singlepostDesc_heading">
            Advantages of a Sprinkler Irrigation System
          </h2>
          <p className="singlePostDesc_cont">
            A sprinkler system is one of the most used and efficient irrigation
            systems, along with the drip system. Applying water through a
            sprinkler system has many advantages. Just some of them include:
            <li className="padding_space" style={{ paddingTop: "1rem" }}>
              Suitable for all soil types and slope terrains
            </li>
            <li className="padding_space">
              Suitable for irrigation of nearly all crop types (cereals,
              vegetables, small fruits), except crops such as paddy and jute
            </li>
            <li className="padding_space">Simple to install and maintain</li>
            <li className="padding_space">
              Mobile system which can operate over the entire field surface
            </li>
            <li className="padding_space">Easy control of applied water</li>
            <li className="padding_space">
              Possibility of split fertilizer and pesticide application
            </li>
            Among its benefits, the most important is water conservation, which
            can be achieved up to 50% compared to that of surface irrigation.
            Additionally, crop productivity increases by about 15-25 %.
          </p>

          <h2 className="singlepostDesc_heading">
            Disadvantages of a Sprinkler Irrigation System
          </h2>

          <p className="singlePostDesc_cont" style={{ marginBottom: "5rem" }}>
            Despite its numerous advantages, sprinkler systems have some
            constraints as well. The main constraints which limit sprinkler use
            are:
            <li className="padding_space" style={{ paddingTop: "1rem" }}>
              Uneven water distribution due to high winds
            </li>
            <li className="padding_space">
              High evaporation loss when irrigating under high temperature
            </li>
            <li className="padding_space">High water pressure is required</li>
            <li className="padding_space">
              Not suitable for tall crops (fruit trees) and crops susceptible to
              foliar diseases
            </li>
            Every irrigation system is designed to maximize efficiency and
            minimize labor and capital requirements. In this regard, effective
            management practices for sprinkler irrigation system depend on the
            design, establishment practices, and farmer’s ability to manage the
            system properly. Unlike other systems, sprinklers have the advantage
            to uniformly apply water at a rate lower than the infiltration rate
            of the soil, thereby preventing runoff and resulting damage to soil
            and crops.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
