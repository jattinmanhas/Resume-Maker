import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost5() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://enterslice.com/learning/wp-content/uploads/2019/02/Pradhan-Mantri-Kisan-Samman-Nidhi-Scheme.jpg"
                         alt=""
                    />
                    <h1 className="singlePostTitle">
                         Pradhan Mantri Kisan Samman Nidhi
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
                              Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a new Central Sector Scheme to provide income support to all landholding farmers' families in the country to supplement their financial needs for procuring various inputs related to agriculture and allied activities as well as domestic needs.
                         </p>

                         <img className="singlepostDesc_img" src="https://www.insightsonindia.com/wp-content/uploads/2020/02/Pradhan_mantri_kisan_samman.png" alt="" />
                         <h2 className="singlepostDesc_heading">Eligibility</h2>
                         <p className="singlePostDesc_cont">All land holding eligible farmer families (subject to the prevalent exclusion criteria) are to avail of the benefits under this scheme.
<br /><br />
                              The following categories of beneficiaries of higher economic status shall not be eligible for benefit under the scheme.
                              <li style={{ marginTop: '1rem' }} className="padding_space">All Institutional Land holders.
                              </li>
                              <li className="padding_space">Farmer families in which one or more of its members belong to following categories
                                   Former and present holders of constitutional posts
                                   Former and present Ministers/ State Ministers and former/present Members of LokSabha/ RajyaSabha/ State Legislative Assemblies/ State Legislative Councils,former and present Mayors of Municipal Corporations, former and present Chairpersons of District Panchayats.
                                   All serving or retired officers and employees of Central/ State Government Ministries /Offices/Departments and its field units Central or State PSEs and Attached offices /Autonomous Institutions under Government as well as regular employees of the Local Bodies (Excluding Multi Tasking Staff /Class IV/Group D employees)
                                   All superannuated/retired pensioners whose monthly pension is Rs.10,000/-or more (Excluding Multi Tasking Staff / Class IV/Group D employees) of above category
                                   All Persons who paid Income Tax in last assessment year
                                   Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects registered with Professional bodies and carrying out profession by undertaking practices.
                              </li>

                         </p>
                         <h2 className="singlepostDesc_heading">Benefits</h2>
                         <p className="singlePostDesc_cont">
                              Under the PM-KISAN scheme, all landholding farmers' families shall be provided the financial benefit of Rs. 6000 per annum per family payable in three equal installments of Rs. 2000 each, every four months.
                         </p>
               
                         <h2 className="singlepostDesc_heading">How to apply</h2>

                         <p className="singlePostDesc_cont" style={{ marginBottom: '5rem' }}>
                              <li style={{ marginTop: '1rem' }} className="padding_space">The eligible farmers may apply with the village Patwaris, revenue officials or other designated officers / agencies and submit their required details to them.
                              </li>
                              <li className="padding_space">Farmers can also visit their nearest Common Service Centres (CSCs) for registration in the Scheme upon payment of fees.

                              </li>
                              <li className="padding_space">Farmers can also do their self-registration through the Farmers Corner in the PM KISAN portal.
                              </li>
                              <li className="padding_space">Details required for registration include  Name, Age, Gender, Category(SC/ST), Aadhaar Number (in case Aadhaar Number has not been issued then Aadhaar Enrollment Number together with any other prescribed documents for purposes of the identification such as Driving Licence, Voters’ ID Card, NREGA Job Card, or any other identification documents issued by Central/State/UT Governments or their authorities,etc.), Bank Account Number and the Mobile Number of the beneficiaries.
                              </li>

                         </p>
                    </div>

               </div>
               <Footer />
          </div>
     );
}