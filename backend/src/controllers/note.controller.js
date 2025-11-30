const db = require('../models');
const Note = db.Note;

// Create
exports.createNote = async (req, res) => {
  try {
    const { title, content, color, pinned } = req.body;
    const note = await Note.create({ title, content, color, pinned });
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// List + search + pinned first
exports.getNotes = async (req, res) => {
  try {
    const q = req.query.q || '';
    const where = q ? {
      [db.Sequelize.Op.or]: [
        { title: { [db.Sequelize.Op.iLike]: `%${q}%` } },
        { content: { [db.Sequelize.Op.iLike]: `%${q}%` } }
      ]
    } : {};

    const notes = await Note.findAll({
      where,
      order: [['pinned', 'DESC'], ['updatedAt', 'DESC']]
    });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single
exports.getNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    await note.update(req.body);
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    await note.destroy();
    res.json({ message: 'Note deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
