import React, { useState } from "react";

function PatientRegistration() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    ward: "",
    diagnosis: ""
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = patients.map((p, i) => (i === editIndex ? form : p));
      setPatients(updated);
      setEditIndex(null);
    } else {
      setPatients([...patients, form]);
    }
    setForm({ name: "", age: "", gender: "", ward: "", diagnosis: "" });
  };

  const handleEdit = (i) => {
    setForm(patients[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => setPatients(patients.filter((_, idx) => idx !== i));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Registration</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-6"
      >
        <input className="w-full p-2 mb-3 border rounded" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="w-full p-2 mb-3 border rounded" type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <select className="w-full p-2 mb-3 border rounded" name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input className="w-full p-2 mb-3 border rounded" name="ward" placeholder="Ward" value={form.ward} onChange={handleChange} />
        <input className="w-full p-2 mb-3 border rounded" name="diagnosis" placeholder="Diagnosis" value={form.diagnosis} onChange={handleChange} />

        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul className="max-w-md mx-auto space-y-2">
        {patients.map((p, i) => (
          <li key={i} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <span>{p.name} | {p.age} | {p.gender} | {p.ward} | {p.diagnosis}</span>
            <div className="space-x-2">
              <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => handleEdit(i)}>Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientRegistration;