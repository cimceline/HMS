import React, { useState, useEffect } from "react";
import { getPatients, createPatient, deletePatient } from "./api";

function App() {
  const [form, setForm] = useState({ name: "", age: "", gender: "", ward: "", diagnosis: "" });
  const [patients, setPatients] = useState([]);
  const [editId, setEditId] = useState(null); // track editing patient

  const fetchPatients = async () => {
    try {
      const res = await getPatients();
      setPatients(res.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // Update existing patient
        await fetch(`http://localhost:5000/api/patients/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditId(null);
      } else {
        await createPatient(form); // create new
      }
      setForm({ name: "", age: "", gender: "", ward: "", diagnosis: "" });
      fetchPatients();
    } catch (err) {
      console.error("Error saving patient:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      fetchPatients();
    } catch (err) {
      console.error("Error deleting patient:", err);
    }
  };

  const handleEdit = (patient) => {
    setForm({
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      ward: patient.ward,
      diagnosis: patient.diagnosis,
    });
    setEditId(patient.id);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Patient Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-2 mb-6 bg-white p-4 rounded shadow">
        <input className="w-full border p-2 rounded" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input className="w-full border p-2 rounded" type="number" placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} />
        <input className="w-full border p-2 rounded" placeholder="Gender" value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
        <input className="w-full border p-2 rounded" placeholder="Ward" value={form.ward} onChange={e => setForm({...form, ward: e.target.value})} />
        <input className="w-full border p-2 rounded" placeholder="Diagnosis" value={form.diagnosis} onChange={e => setForm({...form, diagnosis: e.target.value})} />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" type="submit">
          {editId ? "Update Patient" : "Add Patient"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Patients List</h2>
      <ul className="space-y-2">
        {patients.map(p => (
          <li key={p.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <span className="font-medium">{p.name}</span> - {p.age} - {p.gender} - {p.ward} - {p.diagnosis}
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(p)} className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">Edit</button>
              <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;