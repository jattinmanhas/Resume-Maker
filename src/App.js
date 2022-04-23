import "./App.css";
import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./SignUp/Signup";
import Auth from "./SignUp/auth";
import { useUserContext } from "./context/userContext";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";
import Action from "./Action/Action";
import ContactUs from "./ContactUs/ContactUs"
import CareerBlog from "./CareerBlog/CareerBlog";
import AboutUs from "./AboutUs/AboutUs";
import Template1 from "./Templates/Template1/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3/Template3";
import Selector from "./Selector/Selector";
import Template4 from "./Templates/Template4/Template4";
import Template5 from "./Templates/Template5/Template5";

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
                <Carousel />
                <Action />
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
                < ContactUs />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/products"
            element={
              <>

                <Navbar />
                < CareerBlog />
                <Footer />
              </>
            }
          ></Route>

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
                < Selector />
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
