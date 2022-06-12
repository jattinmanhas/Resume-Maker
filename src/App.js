import "./App.css";
import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./SignUp/Signup";
import Auth from "./SignUp/auth";
import { useUserContext } from "../src/context/userContext";
import Footer from "./Footer/Footer";
import Action from "./Action/Action";
import ContactUs from "./ContactUs/ContactUs"
import AboutUs from "./AboutUs/AboutUs";
import Template1 from "./Templates/Template1/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3/Template3";
import Selector from "./Selector/Selector";
import Template4 from "./Templates/Template4/Template4";
import Template5 from "./Templates/Template5/Template5";
import Template6 from "./Templates/Template6/Template6";
import PhoneSignUp from "./SignUp/PhoneSignup";
import Blog from './Blog/Blog';
import SinglePost1 from './Blog/SinglePost/SinglePost';
import SinglePost2 from './Blog/SinglePost/SinglePost2';
import SinglePost3 from './Blog/SinglePost/SinglePost3';
import SinglePost4 from './Blog/SinglePost/SinglePost4';
import SinglePost5 from './Blog/SinglePost/SinglePost5';
import SinglePost6 from './Blog/SinglePost/SinglePost6';
// import SinglePost7 from './Blog/SinglePost/SinglePost7';
// import SinglePost8 from './Blog/SinglePost/SinglePost8';
import Queries from "./Queries/Contact"
import Signin from "./SignUp/Signin";
import Accordian from "./Accordian/Accordian";
import SwipeCarousel from "./Slider/Slider";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <SwipeCarousel/>
                <Action />
                <Accordian/>
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/sign-up"
            element={
              <>
                <Navbar />
                {error && <p className="error">{error}</p>}
                {loading ? <h2>Loading...</h2> : <> {user ? <Navigate to={"/"} /> : <Auth />} </>}
              </>
            }
          ></Route>

          <Route
            path="/contact-us"
            element={
              <>
                <Navbar />
                < Queries />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/products"
            element={
              <>

                <Navbar />
                < Blog />
                <Footer />
              </>
            }
          ></Route>

        <Route path="/singlepage1"
        element={
          <>
          <Navbar/>
          <SinglePost1 />
          <Footer/>
          </>
        }>
          </Route>
        <Route path="/singlepage2"
        element={
          <>
          <Navbar/>
          <SinglePost2 />
          <Footer/>
          </>
        }>
          </Route>
        <Route path="/singlepage3"
        element={
          <>
          <Navbar/>
          <SinglePost3 />
          <Footer/>
          </>
        }>
          </Route>
        <Route path="/singlepage4"
        element={
          <>
          <Navbar/>
          <SinglePost4 />
          
          </>
        }>
          </Route>
        <Route path="/singlepage5"
        element={
          <>
          <Navbar/>
          <SinglePost5 />
          
          </>
        }>
          </Route>
        <Route path="/singlepage6"
        element={
          <>
          <Navbar/>
          <SinglePost6 />
         
          </>
        }>
           </Route>
      {/*<Route path="/singlepage7"
        element={
          <>
          <Navbar/>
          <SinglePost7 />
          </>
        }>
          </Route>
          
        <Route path="/singlepage8"
        element={
          <>
          <Navbar/>
          <SinglePost8 />
          </>
        }>
          </Route> */}

          <Route
            path="/about-us"
            element={
              <>

                <Navbar />
                < AboutUs />
                <Footer />

              </>
            }
          ></Route>

          <Route
            path="/resume"
            element={
              <>

                <Navbar />
                {/* < Selector /> */}
                {user ? <Selector/> : <Navigate to={"/sign-up"}/>}
                <Footer />


              </>
            }
          ></Route>
          <Route
            path="/template1"
            element={
              <>

                <Navbar />
                < Template1 />
                <Footer />


              </>
            }
          ></Route>
          <Route
            path="/template2"
            element={
              <>

                <Navbar />
                < Template2 />
                <Footer />


              </>
            }
          ></Route>
          <Route
            path="/template3"
            element={
              <>

                <Navbar />
                < Template3 />
                <Footer />


              </>
            }
          ></Route>
          <Route
            path="/template4"
            element={
              <>

                <Navbar />
                < Template4 />
                <Footer />


              </>
            }
          ></Route>
          <Route
            path="/template5"
            element={
              <>

                <Navbar />
                < Template5 />
                <Footer />


              </>
              
            }
          ></Route>
                    <Route
            path="/template6"
            element={
              <>

                <Navbar />
                < Template6 />
                <Footer />


              </>
              
            }
          ></Route>

          <Route
            path="/student-templates"
            element={
              <>

                <Navbar />
                < Template4 />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/professional-templates"
            element={
              <>

                <Navbar />
                < Selector />
                <Footer />
              </>
            }
          ></Route>

<Route
            path="/phoneSignUp"
            element={
              <>
                <Navbar />
                <PhoneSignUp/>
              </>
            }
          ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
