import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Hospital Management System
      </h1>
      <p className="mb-6 text-gray-700">Welcome! Choose what you want to do:</p>

      <ul className="flex flex-col space-y-6 ">
        <li>
          <Link className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/login">
            Doctor Login
          </Link>
        </li>
        <li>
          <Link className=" bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" to="/about">
            About Hospital
          </Link>
        </li>
        <li>
          <Link className=" bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;