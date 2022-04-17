import "./App.css";
import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./SignUp/Signup";
import Auth from "./SignUp/auth";
import { useUserContext } from "./context/userContext";

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
              </>
            }
          ></Route>

          <Route
            path="/sign-up"
            element={
              <>
                <Navbar />
                {error && <p className="error">{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {user ? <Navigate to={"/"}/> : <Auth />} </>}
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
