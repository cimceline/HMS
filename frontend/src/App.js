import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import PatientRegistration from "./components/patientRegistration";
import Login from "./components/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <header className="bg-blue-400 text-white p-4 shadow-md  sm:text-lg md:text-xl lg:text-2xl">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="font-bold text-xl">Kibagaga Hospital</h1>
          <div className="space-x-4">
            <Link className="sm:text-lg md:text-xl lg:text-2xl hover:text-gray-300"  to="/">Home</Link>
            <Link className="sm:text-lg md:text-xl lg:text-2xl hover:text-gray-300" to="/about">About</Link>
            <Link className="sm:text-lg md:text-xl lg:text-2xl hover:text-gray-300" to="/contact">Contact us</Link>
            {!isLoggedIn && <Link className="hover:text-gray-300" to="/login">Doctor Login</Link>}
          </div>
        </nav>
      </header>

      <main className="bg-gray-100 min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && <Route path="/patient-registration" element={<PatientRegistration />} />}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;