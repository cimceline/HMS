import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hospital Management System</h1>
      <p>Welcome! Choose what you want to do:</p>

      <ul>
        <li>
          <Link to="/patient-registration">Register Patient</Link>
        </li>
        <li>
          <Link to="/login">Doctor Login</Link>
        </li>
        <li>
          <Link to="/about">About Hospital</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;