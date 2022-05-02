import { Link } from "react-router-dom";
import "./SinglePost.css";
import React from "react";

export default function SinglePost2() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://sarkariyojana.com/wp-content/uploads/2020/08/agriculture-infrastructure-fund.jpg"
                         alt=""
                    />
                    <h1 className="singlePostTitle">
                         Agriculture Infrastructure Fund
                    </h1>
                    <div className="singlePostInfo">
                         <span>
                              Author:
                              <b className="singlePostAuthor">
                                   Government of India
                              </b>
                         </span>
                         <span>1 October 2021</span>
                    </div>
                    <div className="singlePost__container">
                         <p className="singlePostDesc">
                              The Union Cabinet in July 2020 has approved a new pan India Central Sector Scheme called Agriculture Infrastructure Fund. The scheme shall provide a medium - long term debt financing facility for investment in viable projects for post-harvest management Infrastructure and community farming assets through interest subvention and financial support.
                              <br /><br />
                              The duration of the Scheme shall be from FY2020 to FY2032 (10 years).


                         </p>
                        
                         <img className="singlepostDesc_img" src="https://newsonair.gov.in/writereaddata/News_Pictures/NAT/2020/Nov/NPIC-2020113019495.png" alt="" />
                         <h2 className="singlepostDesc_heading">Intended beneficiaries</h2>
                         <p className="singlePostDesc_cont">Under the scheme, Rs. One Lakh Crore will be provided by banks and financial institutions as loans to Primary Agricultural Credit Societies (PACS), Marketing Cooperative Societies, Farmer Producers Organizations (FPOs), Self Help Group (SHG), Farmers, Joint Liability Groups (JLG), Multipurpose Cooperative Societies, Agri-entrepreneurs, Startups, Aggregation Infrastructure Providers and Central/State agency or Local Body sponsored Public Private Partnership Project.
                         </p>
                         <h2 className="singlepostDesc_heading">Benefits</h2>
                         <p style={{ marginBottom: '5rem' }} className="singlePostDesc_cont"><li className="padding_space">All loans under this financing facility will have interest subvention of 3% per annum up to a limit of Rs. 2 crore. This subvention will be available for a maximum period of seven years.</li>
                              <br />
                              <li className="padding_space">Further, credit guarantee coverage will be available for eligible borrowers from this financing facility under Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme for a loan up to Rs. 2 crore. The fee for this coverage will be paid by the Government.</li>
                              <br />

                              <li className="padding_space">In case of FPOs the credit guarantee may be availed from the facility created under FPO promotion scheme of Department of Agriculture, Cooperation & Farmers Welfare (DACFW).
                              </li><br />
                              <li className="padding_space">Moratorium for repayment under this financing facility may vary subject to minimum of 6 months and maximum of 2 years.
                              </li><br /> <br />
                              To view the complete scheme guidelines, <a href="http://nhb.gov.in/PDFViwer.aspx?enc=3ZOO8K5CzcdC/Yq6HcdIxKhAr81sb7L9YWVP+6LRzzY5kFBmfjiTZTjvoYLCqUFQQor6bNYJBSb/Ugc0LN2+fg==">click here</a>
                         </p>
                    </div>

               </div>
               
          </div>
     );
}