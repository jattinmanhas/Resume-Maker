import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost7() {
     return (
       <div className="singlePost__blog">
         <div className="singlePostWrapper">
           <img
             className="singlePostImg"
             src="https://www.dripworks.com/wordpress/wp-content/uploads/2020/05/top-four-irrigation-techniques-782x440.jpg"
             alt=""
           />
           <h1 className="singlePostTitle">
             Drip Irrigation as the Most Efficient Irrigation System Type
           </h1>
           <div className="singlePostInfo">
             <span>
               Author:
               <b className="singlePostAuthor">Tanja Folnovic</b>
             </span>
             <span>1 hour ago</span>
           </div>
           <div className="singlePost__container">
             <p className="singlePostDesc">
               Drip, or trickle irrigation, is the system in which water is
               frequently and slowly applied directly on the crop root zone. The
               concept of this irrigation system is to irrigate only the root
               zone instead of the entire field surface, thus making water
               content of the crop root zone at the optimum level.
               <br />
               <br />
               In a drip irrigation system, water is applied under the pressure,
               dripping one drop at a time through the small emitters. Water can
               also be sprayed as a fine mist over a portion of field’s surface
               or bubbled onto the soil in small streamlets.
             </p>

             <img
               className="singlepostDesc_img"
               src="https://blog.agrivi.com/media/90680/web-940-2.jpg"
               alt=""
             />
             <h2 className="singlepostDesc_heading">
               Drip Irrigation System Types
             </h2>
             <p className="singlePostDesc_cont">
               According to emitters which control the quantity and rate of
               water discharge, trickle or drip irrigation systems can be
               divided into four types:
               <li className="padding_space" style={{ paddingTop: "1rem" }}>
                 Point-source emitters (drip bubbler)
               </li>
               <li className="padding_space">In-line drip emitter</li>
               <li className="padding_space">Basin bubblers</li>
               <li className="padding_space">Micro spray sprinkler</li>
               Drip irrigation is one of the most efficient types of irrigation
               systems. The efficiency of applied and lost water as well as
               meeting the crop water need ranges from 80 to 90%.
             </p>
             <h2 className="singlepostDesc_heading">
               Why Use Drip or Trickle Irrigation System?
             </h2>
             <p className="singlePostDesc_cont">
               In providing water to plants according to plant water
               requirements, drip irrigation systems create no pollution and no
               runoff and very little evapotranspiration. By using this system,
               a farmer can certainly ensure good water management. Utilization
               of a drip irrigation system type provides other benefits to both
               the farmer and crop production:
               <li className="padding_space" style={{ paddingTop: "1rem" }}>
                 Simple implementation of existing soil sensors
               </li>
               <li className="padding_space">
                 Management of soil moisture level; crops are irrigated
                 immediately when soil moisture drops below threshold
               </li>
               <li className="padding_space">
                 Application of fertilizers and pesticides combined with
                 irrigation
               </li>
               <li className="padding_space">
                 Reduced weed growth and facilitated management of farm
                 activities in the field due to localized soil wetting
               </li>
               <li className="padding_space">
                 Irrigation can be stopped at any moment (if rain occurs) which
                 prevents overirrigation
               </li>
               <li className="padding_space">
                 Easy to install, design, and it can be very inexpensive
               </li>
               <li className="padding_space">
                 Possible to implement on almost any terrain, soil, and crop
                 type; especially suitable for high-value row crops
               </li>
             </p>

             <h2 className="singlepostDesc_heading">
               Limitations in Using Drip Irrigation System
             </h2>

             <p
               className="singlePostDesc_cont"
               style={{ marginBottom: "5rem" }}
             >
               Despite many benefits, drip system has also limitation factors
               for successful implementation on crop production:
               <li className="padding_space" style={{ paddingTop: "1rem" }}>
                 Clogging of emitters due to small outlets, caused by soil
                 particles, chemicals, fertilizers or organic materials
               </li>
               <li className="padding_space">
                 Damage on plastic pipe caused by rodents
               </li>
               <li className="padding_space">
                 Uniformity of water distribution due to elevation differences
                 on unleveled field
               </li>
               <li className="padding_space">
                 Potential salt accumulation in crop root zone between two
                 irrigation cycles
               </li>
             </p>
           </div>
         </div>
         <Footer />
       </div>
     );
}