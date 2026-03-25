import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import PatientRegistration from "./patientRegistration";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/patient-registration">Register Patient</Link> |{" "}
        <Link to="/login">Doctor Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;