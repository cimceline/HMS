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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = patients.map((p, i) =>
        i === editIndex ? form : p
      );
      setPatients(updated);
      setEditIndex(null);
    } else {
      setPatients([...patients, form]);
    }

    setForm({
      name: "",
      age: "",
      gender: "",
      ward: "",
      diagnosis: ""
    });
  };

  const handleEdit = (index) => {
    setForm(patients[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Patient EDIT</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <br />

        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
        <br />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />

        <input name="ward" placeholder="Ward" value={form.ward} onChange={handleChange} />
        <br />

        <input name="diagnosis" placeholder="Diagnosis" value={form.diagnosis} onChange={handleChange} />
        <br />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {patients.map((p, i) => (
          <li key={i}>
            {p.name} | {p.age} | {p.gender} | {p.ward} | {p.diagnosis}
            <button onClick={() => handleEdit(i)}>update </button>
            <button onClick={() => handleDelete(i)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientRegistration;