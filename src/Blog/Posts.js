import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="posts__blogs">
      <Link to="/singlepage1" style={{ textDecoration: "none" }}>
        <Post
          src="https://images.unsplash.com/photo-1581578017426-04fbc2b0511e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          postTitle="How to Start Crop Farming Business For Highest Profits"
          postDate="28 Sept. 2021"
          postDesc="Before starting crop farming business, it is necessary to assess the available resources. As a conscious farmer, you will have to evaluate the amount of water, land, and the means and labor available. The following vital points will be the choice of crops and the purpose of their cultivation. "
        />
      </Link>

      <Link to="/singlepage2" style={{ textDecoration: "none" }}>
        <Post
          src="https://sarkariyojana.com/wp-content/uploads/2020/08/agriculture-infrastructure-fund.jpg"
          postTitle="Agriculture Infrastructure Fund"
          postDate="1 October 2021"
          postDesc="The Union Cabinet in July 2020 has approved a new pan India Central Sector Scheme called Agriculture Infrastructure Fund. The scheme shall provide a medium - long term debt financing facility for investment in viable projects for post-harvest management Infrastructure and community farming assets through interest subvention and financial support."
        />
      </Link>

      <Link to="/singlepage3" style={{ textDecoration: "none" }}>
        <Post
          src="https://www.kisaanhelpline.com/govt_scheme_image/15072121015621PM%20Kisan%20Maan%20Dhan%20Yojana.jpg.jpg"
          postTitle="Pradhan Mantri Kisan Maan Dhan Yojana
"
          postDate="1 year ago"
          postDesc="Government has launched the Pradhan Mantri Kisan Maan DhanYojana (PM-KMY) on 12.9.2019 with a view to provide social security to Small and Marginal Farmers in their old age when they have no means of livelihood and minimal or no savings to take care of their expenses.
"
        />
      </Link>

      <Link to="/singlepage4" style={{ textDecoration: "none" }}>
        <Post
          src="https://financialtribune.com/sites/default/files/styles/telegram/public/field/image/17january/05-zs-h1_vegetable_oil_production_274-ab.jpg?itok=Vyaid8mY"
          postTitle="National Mission on Edible Oils"
          postDate="1 year ago"
          postDesc="National Mission on Edible Oils – Oil Palm (NMEO-OP) is a new Centrally Sponsored Scheme with a special focus on the North east region and the Andaman and Nicobar Islands with a focus on increasing area and productivity of oilseeds and Oil Palm."
        />
      </Link>

      <Link to="/singlepage5" style={{ textDecoration: "none" }}>
        <Post
          src="https://img.jagranjosh.com/imported/images/E/GK/PM-Kisan-Samman-Nidhi-Yojana%202020.jpg"
          postTitle="Pradhan Mantri Kisan Samman Nidhi
"
          postDate="2 years ago"
          postDesc="Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a new Central Sector Scheme to provide income support to all landholding farmers' families in the country to supplement their financial needs for procuring various inputs related to agriculture and allied activities as well as domestic needs."
        />
      </Link>

      <Link to="/singlepage6" style={{ textDecoration: "none" }}>
        <Post
          src="https://knnindia.co.in/uploads/newsfiles/DAIRYSECTOR-15-5-2020.jpg"
          postTitle="Interest subvention for dairy sector
"
          postDate="2 years ago"
          postDesc="To offset the economic impact of Covid-19 on Dairy Sector, Ministry of Fisheries, Animal Husbandry and Dairying has introduced a new scheme “Interest subvention on Working Capital Loans for Dairy sector” for Supporting Dairy Cooperatives and Farmer Producer Organizations engaged in dairy activities (SDC&FPO). The scheme will be implemented through National Dairy Development Board (NDDB), Anand
"
        />
      </Link>

      <Link to="/singlepage7" style={{ textDecoration: "none" }}>
        <Post
          src="https://www.dripworks.com/wordpress/wp-content/uploads/2020/05/top-four-irrigation-techniques-782x440.jpg"
          postTitle="Drip Irrigation as the Most Efficient Irrigation System Type
"
          postDate="1 hour ago"
          postDesc="Drip, or trickle irrigation, is the system in which water is frequently and slowly applied directly on the crop root zone. The concept of this irrigation system is to irrigate only the root zone instead of the entire field surface, thus making water content of the crop root zone at the optimum level.

"
        />
      </Link>

      <Link to="/singlepage8" style={{ textDecoration: "none" }}>
        <Post
          src="https://www.heritagelawnskc.com/wp-content/uploads/2016/05/Sprinkler-System-1-750x501.jpg"
          postTitle="Simple Automatic Irrigation with Sprinkler System
"
          postDate="6 hours ago"
          postDesc="The sprinkler irrigation system is a crop irrigation method similar to rainfall. The system distributes water over the field surface by spraying it into the air and allowing it to fall on the soil like, similar to that of rain.

"
        />
      </Link>
    </div>
  );
}

export default Posts;
