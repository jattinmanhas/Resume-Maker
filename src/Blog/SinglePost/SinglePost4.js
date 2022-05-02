import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost4() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://financialtribune.com/sites/default/files/styles/telegram/public/field/image/17january/05-zs-h1_vegetable_oil_production_274-ab.jpg?itok=Vyaid8mY"
                         alt=""
                    />
                    <h1 className="singlePostTitle">
                         National Mission on Edible Oils
                    </h1>
                    <div className="singlePostInfo">
                         <span>
                              Author:
                              <b className="singlePostAuthor">
                                   Government of India
                              </b>
                         </span>
                         <span>1 year ago</span>
                    </div>
                    <div className="singlePost__container">
                         <p className="singlePostDesc">
                              National Mission on Edible Oils – Oil Palm (NMEO-OP) is a new Centrally Sponsored Scheme with a special focus on the North east region and the Andaman and Nicobar Islands with a focus on increasing area and productivity of oilseeds and Oil Palm.
                         </p>

                         <img className="singlepostDesc_img" src="https://www.jatinverma.org/uploads/2021_08/142.png" alt="" />
                         <h2 className="singlepostDesc_heading">Scheme outlay</h2>
                         <p className="singlePostDesc_cont">A financial outlay of Rs.11,040 crore has been made for the scheme, out of which Rs.8,844 crore is the Government of India share and Rs.2,196 crore is State share and this includes the viability gap funding also.
<br /><br />
                              The proposed scheme will subsume the current National Food Security Mission-Oil Palm programme.

                         </p>
                         <h2 className="singlepostDesc_heading">Scheme outcomes</h2>
                         <p className="singlePostDesc_cont">
                              Under this scheme, it is proposed to cover an additional area  of 6.5 lakh hectare (ha.) for oil palm till the year 2025-26 and thereby reaching the target of 10 lakh hectares ultimately.  The production of Crude Palm Oil (CPO) is expected to go upto 11.20 lakh tonnes by 2025-26 and upto 28 lakh tonnes by 2029-30.
                         </p>
                         <h2 className="singlepostDesc_heading">Scheme components</h2>
                         <p className="singlePostDesc_cont">There are two major focus areas of the Scheme.</p>

                         <h4 className="singlepostDesc_smHeading">Price assurance</h4>
                         <p className="singlePostDesc_cont">
                              The oil palm farmers produce Fresh Fruit Bunches (FFBs) from which oil is extracted by the industry. Presently the prices of these FFBs are linked to the international CPO prices fluctuations.  For the first time, the Government of India will give a price assurance to the oil palm farmers for the FFBs. This will be known as the Viability Price (VP).   This will protect the farmers from the fluctuations of the international CPO  prices and protect him from the volatility.   This VP shall be the annual average CPO price of the last 5 years adjusted with the wholesale price index to be multiplied by 14.3 %.  This will be fixed yearly for the oil palm year from 1st November to 31st October. This assurance will inculcate confidence in the Indian oil palm farmers to go for increased area and thereby more production of palm oil.  A Formula price (FP)  will also be fixed which will be 14.3% of CPO and will be fixed on a monthly basis. The viability gap funding will be the VP-FP and if the need arises, it would be paid directly to the farmers accounts in the form of DBT.
<br /><br />
                              The assurance to the farmers will be in the form of the viability gap funding and the industry will be mandated to pay 14.3% of the CPO price which will eventually go up to 15.3%.  There is a sunset clause for the scheme which is 1st November 2037.  To give impetus to the North-East and Andaman, the Government will additional bear a cost of 2% of the CPO price to ensure that the farmers are paid at par with the rest of India.  The states who adopt the mechanism proposed by the Government of India would benefit from the viability gap payment proposed in the scheme and for this they will enter into MoUs with the Central Government.


                         </p>
                         <h4 className="singlepostDesc_smHeading">Assistance for inputs/interventions</h4>

                         <p className="singlePostDesc_cont" style={{ marginBottom: '5rem' }}>The second major focus of the scheme is to  substantially increase the assistance of inputs/interventions.


                              <li style={{ marginTop: '1rem' }} className="padding_space">A substantial increase has been made for planting material for oil palm and this has increased from Rs 12,000 per ha to  Rs. 29000 per ha. Further substantial increase has been made for  maintenance and inter-cropping interventions. A special assistance @ Rs 250 per plant is being given to replant old gardens for rejuvenation of old gardens.
                              </li>
                              <li className="padding_space">To address the issue of shortage of planting material in the country, seed gardens will be provided assistance up to Rs. 80 lakhs for 15 ha. in Rest of India and Rs.100 lakhs  for 15 ha in North-East and Andaman regions.  Further, assistance for seed gardens @ Rs. 40 lakhs and Rs. 50 lakhs for Rest of India and North-East & Andaman regions respectively. Further Special assistance will be provided for the North-East and the Andaman regions in which special provisions is being made for half moon terrace cultivation, bio fencing and land clearance along with integrated farming.
                              </li>
                              <li className="padding_space">For capital assistance to the industry, for the North East states and Andamans, a provision of Rs 5 core of 5 mt/hr unit with pro rata increase for higher capacity. This will attract the industry to these regions.
                              </li>

                         </p>
                    </div>

               </div>
               <Footer />
          </div>
     );
}