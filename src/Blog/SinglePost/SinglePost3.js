import { Link } from "react-router-dom";
import "./SinglePost.css";
import React from "react";

export default function SinglePost3() {
  return (
    <div className="singlePost__blog">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://sarkariyojana.com/wp-content/uploads/2020/08/agriculture-infrastructure-fund.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">PM Kisan Maan Dhan Yojana</h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Government of India</b>
          </span>
          <span>1 year ago</span>
        </div>
        <div className="singlePost__container">
          <p className="singlePostDesc">
            Government has launched the Pradhan Mantri Kisan Maan DhanYojana
            (PM-KMY) on 12.9.2019 with a view to provide social security to
            Small and Marginal Farmers in their old age when they have no means
            of livelihood and minimal or no savings to take care of their
            expenses.
          </p>

          <img
            className="singlepostDesc_img"
            src="https://www.dairytoday.in/wp-content/uploads/2019/08/PM-KMY-2.jpg"
            alt=""
          />
          <h2 className="singlepostDesc_heading">Benefits</h2>
          <p className="singlePostDesc_cont">
            Under this scheme, a minimum fixed pension of Rs.3,000/- is provided
            to the small and marginal farmers, subject to certain exclusion
            criteria, on attaining the age of 60 years. It is a voluntary and
            contributory pension scheme. The eligible farmer is required to
            contribute to a Pension Fund between Rs.55 to Rs.200 per month
            depending on the entry age. The Central Government also contributes
            in equal amount to the Pension Fund.
          </p>
          <h2 className="singlepostDesc_heading">Eligibility</h2>
          <p className="singlePostDesc_cont">
            <p>
              <li className="padding_space">
                Small and Marginal Farmer (SMF) - a farmer who owns cultivable
                land upto 2 hectare as per land records of the concerned
                State/UT.
              </li>
              <li className="padding_space">Age of 18- 40 years</li>
            </p>
          </p>

          <h4 className="singlepostDesc_smHeading">
            Farmers who are not eligible for the scheme
          </h4>
          <p className="singlePostDesc_cont" style={{ marginBottom: "5rem" }}>
            The following categories of farmers have been brought under the
            exclusion criteria:
            <li className="padding_space">
              SMFs covered under any other statuary social security schemes such
              as National Pension Scheme (NPS), Employees’ State Insurance
              Corporation scheme, Employees’ Fund Organization Scheme etc.
            </li>
            <li className="padding_space">
              Farmers who have opted for Pradhan Mantri Shram Yogi Maan Dhan
              Yojana (PM-SYM) administered by the Ministry of Labour &
              Employment
            </li>
            <li className="padding_space">
              Farmers who have opted for Pradhan Mantri Laghu Vyapari Maan-dhan
              Yojana (PM-LVM) administered by the Ministry of Labour &
              Employment
            </li>
            <li className="padding_space">
              All Institutional Land holders; and Former and present holders of
              constitutional posts Former and present Ministers/ State Ministers
              and former/present Members of Lok Sabha/ Rajya Sabha/ State
              Legislative Assemblies/ State Legislative Councils,former and
              present Mayors of Municipal Corporations, former and present
              Chairpersons of District Panchayats. All serving or retired
              officers and employees of Central/ State Government Ministries/
              Offices/Departments and theirfield units,Central or State PSEs and
              Attached offices/ Autonomous Institutions under Government as well
              as regular employees of the Local Bodies (Excluding Multi Tasking
              Staff / Class IV/Group D employees) All Persons who paid Income
              Tax in last assessment year. Professionals like Doctors,
              Engineers, Lawyers, Chartered Accountants, and Architects
              registered with Professional bodies and carrying out profession by
              undertaking practice.
            </li>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
