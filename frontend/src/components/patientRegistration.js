import React, { useState, useEffect } from "react";
import axios from "axios";

function PatientRegistration() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    ward: "",
    diagnosis: ""
  });
  const [editId, setEditId] = useState(null);

  // Use proxy in package.json, so just /api/patients
  const API = "/api/patients";

  // Fetch all patients from backend
  const fetchPatients = async () => {
    try {
      const res = await axios.get(API);
      setPatients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId !== null) {
        // UPDATE
        await axios.put(`${API}/${editId}`, form);
      } else {
        // CREATE
        await axios.post(API, form);
      }

      // Refresh patient list
      fetchPatients();

      // Reset form
      setForm({
        name: "",
        age: "",
        gender: "",
        ward: "",
        diagnosis: ""
      });
      setEditId(null);

    } catch (err) {
      console.log(err);
    }
  };

  // Fill form for editing
  const handleEdit = (p) => {
    setForm(p);
    setEditId(p.id); // Use DB id, not index
  };

  // Delete patient
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchPatients();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Patient Registration</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <br />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <input
          name="ward"
          value={form.ward}
          onChange={handleChange}
          placeholder="Ward"
        />
        <br />
        <input
          name="diagnosis"
          value={form.diagnosis}
          onChange={handleChange}
          placeholder="Diagnosis"
        />
        <br />
        <button type="submit">{editId ? "Update" : "Register"}</button>
      </form>

      {/* Patient List */}
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            {p.name} | {p.age} | {p.gender} | {p.ward} | {p.diagnosis} {" "}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientRegistration;