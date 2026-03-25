import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  
  const navigate = useNavigate(); // used for redirect

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check (in real app, check from backend)
    if (username && password && department) {
      alert(`Welcome Dr. ${username} (${department})`);
      navigate("/patient-registration"); // redirect after login
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h1>Doctor Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Choose Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;