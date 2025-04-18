import axios from "axios";

const BASE_URL = "https://notes-backend141-637581838712.us-central1.run.app/notes";

// Get all notes
export const getAllNotes = async () => {
  const response = await axios.get(`${BASE_URL}/notes`);
  return response.data;
};

// Get note by ID
export const getNoteById = async (id) => {
  const response = await axios.get(`${BASE_URL}/notes/${id}`);
  return response.data;
};

// Create a new note
export const createNote = async (data) => {
  const response = await axios.post(`${BASE_URL}/notes`, data);
  return response.data;
};

// Update existing note
export const updateNote = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/notes/${id}`, data);
  return response.data;
};

// Delete a note
export const deleteNote = async (id) => {
  const response = await axios.delete(`${BASE_URL}/notes/${id}`);
  return response.data;
};
