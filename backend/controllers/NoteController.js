import Note from "../models/NoteModel.js";


export const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note tidak ditemukan" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createNote = async (req, res) => {
  try {
    await Note.create(req.body);
    res.status(201).json({ message: "Note berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note tidak ditemukan" });

    await note.update(req.body);
    res.json({ message: "Note berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note tidak ditemukan" });

    await note.destroy();
    res.json({ message: "Note berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
