import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgetPage from "./pages/ForgetPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Aurora from "./components/Bits/Aurora";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <Aurora
        colorStops={["#BFECFF", "#CDC1FF", "#FFF6E3", "#FFCCEA"]}
        blend={0}
        amplitude={1.0}
        speed={0.5}
        className="absolute -z-10 -top-6"
      />
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPage />} />
      </Routes>
    </div>
  );
}

export default App;
