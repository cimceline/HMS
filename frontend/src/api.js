import axios from "axios";

const API_URL = "http://localhost:3000/api/patients"; // replace with your backend URL

export const getPatients = () => axios.get(API_URL);
export const createPatient = (data) => axios.post(API_URL, data);
export const deletePatient = (id) => axios.delete(`${API_URL}/${id}`);