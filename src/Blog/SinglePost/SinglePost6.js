import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost6() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://crackittoday.com/wp-content/uploads/2020/05/dairy.jpg"
                         alt=""
                    />
                    <h1 className="singlePostTitle">
                         Interest subvention for dairy sector
                    </h1>
                    <div className="singlePostInfo">
                         <span>
                              Author:
                              <b className="singlePostAuthor">
                                   Government of India
                              </b>
                         </span>
                         <span>2 years ago</span>
                    </div>
                    <div className="singlePost__container">
                         <p className="singlePostDesc">
                              To offset the economic impact of Covid-19 on Dairy Sector, Ministry of Fisheries, Animal Husbandry and Dairying has introduced a new scheme “Interest subvention on Working Capital Loans for Dairy sector” for Supporting Dairy Cooperatives and Farmer Producer Organizations engaged in dairy activities (SDC&FPO). The scheme will be implemented through National Dairy Development Board (NDDB), Anand
                         </p>

                         <img className="singlepostDesc_img" src="https://agritimes.co.in/assets/images/govt-announces-interest-subvention-on-working-capital-loans-for-dairy-sector-english.jpeg" alt="" />
                         <h2 className="singlepostDesc_heading">Period of implementation
</h2>
                         <p className="singlePostDesc_cont">
                              The scheme is to be implemented during 2020-21.
                         </p>
                         <h2 className="singlepostDesc_heading">Benefits</h2>
                         <p className="singlePostDesc_cont">
                              In order to meet the working Capital needs of the Cooperatives and Farmer owned milk producer companies, Interest subvention will be given on working capital loan taken from scheduled Commercial Banks/R.R.Bs/Cooperative Banks/Financial Institutions between 1st April 2020 and 31st March 2021 by Cooperatives/FPOs for conversion of milk into conserved commodities and other milk products.
<br /><br />
                              The scheme has made provisions for providing interest subvention of 2% per annum, with an additional incentive of 2% per annum interest subvention to be given in case of prompt and timely repayment/interest servicing.

                         </p>

                         <h2 className="singlepostDesc_heading">Eligible beneficiaries</h2>

                         <p className="singlePostDesc_cont" style={{ marginBottom: '5rem' }}>
                              Dairy Cooperatives and Farmer owned milk producer companies
                         </p>
                    </div>

               </div>
               <Footer />
          </div>
     );
}